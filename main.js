// ZK Production - Main JS
console.log("ZK Production Studio script loaded.");

document.addEventListener('DOMContentLoaded', () => {

    const loadingScreen = document.getElementById('loading-screen');
    const body = document.body;
    let loadingScreenHidden = false; // Flag to ensure loading screen hides only once

    /**
     * Hides the loading screen and enables body scrolling.
     */
    function hideLoadingScreen() {
        if (!loadingScreenHidden && loadingScreen) {
            loadingScreen.classList.add('hidden');
            body.classList.remove('loading');
            loadingScreenHidden = true;
            console.log("Loading screen hidden.");
        }
    }

    // --- Loading Screen Logic ---
    // 1. Hide after all resources are loaded (images, videos, etc.)
    window.addEventListener('load', () => {
        // Add a small delay (e.g., 500ms) to ensure the loading animation is visible for a moment
        setTimeout(hideLoadingScreen, 1000);
    });

    // 2. Hide after a maximum of 5 seconds, even if not all resources are loaded yet (fallback)
    setTimeout(hideLoadingScreen, 10000); // 5000ms = 5 seconds


    /**
     * Toggles the mobile navigation menu's visibility.
     */
    function setupMobileNavToggle() {
        const menuToggle = document.getElementById("menu-toggle");
        const nav = document.getElementById("main-nav");

        if (menuToggle && nav) {
            menuToggle.addEventListener("click", () => {
                nav.classList.toggle("show");
                const isExpanded = nav.classList.contains("show");
                menuToggle.setAttribute("aria-expanded", isExpanded);

                if (isExpanded) {
                    nav.setAttribute('tabindex', '0'); // Make nav focusable when open
                    nav.focus(); // Give focus to the nav
                } else {
                    nav.removeAttribute('tabindex'); // Remove tabindex when hidden
                    menuToggle.focus(); // Return focus to the toggle button
                }
            });

            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (nav.classList.contains('show')) {
                        nav.classList.remove('show');
                        menuToggle.setAttribute("aria-expanded", false);
                        menuToggle.focus(); // Return focus to the toggle button
                    }
                });
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && nav.classList.contains('show')) {
                    nav.classList.remove('show');
                    menuToggle.setAttribute("aria-expanded", false);
                    menuToggle.focus(); // Return focus to the toggle button
                }
            });
        }
    }

    /**
     * Handles the count-up animation for statistic numbers on scroll.
     * Uses Intersection Observer for better performance.
     */
    function setupCountUpAnimation() {
        const counters = document.querySelectorAll('.stat-number');
        const statsSection = document.querySelector('.stats-section');
        let hasAnimated = false; // Flag to ensure animation runs only once

        if (!statsSection || counters.length === 0) {
            console.warn("Stats section or counters not found. Skipping count-up animation setup.");
            return; // Exit if elements are not present
        }

        // Using Intersection Observer for more efficient scroll detection
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target'); // Ensure target is a number
                        const duration = 10000; // Animation duration in ms (2 seconds / 2000)  now i made it 10 seconds
                        let startTimestamp = null; // To keep track of animation start time

                        const animate = (timestamp) => {
                            if (!startTimestamp) startTimestamp = timestamp;
                            const progress = Math.min((timestamp - startTimestamp) / duration, 2);
                            counter.innerText = Math.floor(progress * target);

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                counter.innerText = target; // Ensure it ends on the exact target
                            }
                        };
                        requestAnimationFrame(animate);
                    });
                    hasAnimated = true; // Set flag after starting animations
                    observer.unobserve(statsSection); // Stop observing once animation has run
                    console.log("Count-up animation started and observer stopped.");
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the section is visible
        });

        observer.observe(statsSection); // Start observing the stats section
    }

    /**
     * Initializes any interactive elements that have hover effects
     * to improve accessibility for keyboard users (focus-visible).
     */
    function setupInteractiveElementsFocus() {
        const interactiveElements = document.querySelectorAll(
            '.hero-btn, .text-block a, .cta-button, .footer-nav a, .footer-socials a, .services-nav a'
        );

        interactiveElements.forEach(element => {
            // No need for JS class toggling if CSS :focus-visible is used directly
            // Ensure these elements are tabbable if they are interactive but not naturally so
            if (element.tagName === 'IMG' && !element.hasAttribute('tabindex')) {
                element.setAttribute('tabindex', '0');
            }
        });

        document.querySelectorAll('.hero-image img, .video-container video, .mission-image img').forEach(img => {
            if (!img.hasAttribute('tabindex')) {
                img.setAttribute('tabindex', '0'); // Make images tabbable if they have hover effects and are interactive
            }
        });
    }

    // --- Call the setup functions ---
    setupMobileNavToggle();
    setupCountUpAnimation();
    setupInteractiveElementsFocus();

    console.log("ZK Production Studio script fully initialized.");
});
