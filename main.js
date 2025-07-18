// Smooth Scroll & GSAP Hero Animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hero-text h1", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".cta-button", {
    opacity: 0,
    y: 20,
    delay: 0.6,
    duration: 1,
    ease: "power2.out",
  });
// ABOUT SECTION ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-left h2", {
  scrollTrigger: {
    trigger: ".about-left h2",
    start: "top 85%",
  },
  opacity: 0,
  x: -50,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".about-left p", {
  scrollTrigger: {
    trigger: ".about-left p",
    start: "top 85%",
  },
  opacity: 0,
  x: -50,
  delay: 0.2,
  duration: 1.1,
  ease: "power2.out",
});

gsap.from(".about-img", {
  scrollTrigger: {
    trigger: ".about-gallery",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.8,
  ease: "power2.out",
});

// EXPERTISE SECTION ANIMATIONS
gsap.from(".expertise-left h2", {
  scrollTrigger: {
    trigger: ".expertise-left h2",
    start: "top 85%",
  },
  opacity: 0,
  x: -50,
  duration: 1.2,
  ease: "expo.out",
});

gsap.from(".icon-bar", {
  scrollTrigger: {
    trigger: ".icon-bar",
    start: "top 90%",
  },
  opacity: 0,
  x: -30,
  delay: 0.3,
  duration: 1,
});

gsap.from(".expertise-right img", {
  scrollTrigger: {
    trigger: ".expertise-right img",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 1.1,
  ease: "power2.out",
});

gsap.from(".expertise-card", {
  scrollTrigger: {
    trigger: ".expertise-grid",
    start: "top 90%",
  },
  opacity: 0,
  y: 20,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out",
});

// TESTIMONIALS SECTION ANIMATIONS// TESTIMONIALS SECTION ANIMATIONS
gsap.from(".testimonial-title", {
  scrollTrigger: {
    trigger: ".testimonial-title",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "expo.out"
});

gsap.from(".testimonial-card", {
  scrollTrigger: {
    trigger: ".testimonial-grid",
    start: "top 85%",
  },
  opacity: 0,
  scale: 0.9,
  stagger: 0.1,
  duration: 0.8,
  ease: "power2.out"
});
    gsap.from(".testimonial-card .quote-icon", {
        scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 85%",
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        ease: "back.out(1.7)"
    });

    gsap.from(".testimonial-card .testimonial-text", {
        scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
    });
    gsap.from(".testimonial-card .stars", {
        scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
    });
    gsap.from(".testimonial-card .client-name", {
        scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
    });
    gsap.from("footer", {
        scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
    });
    gsap.from(".footer-logo", {
        scrollTrigger: {
        trigger: ".footer-logo",
        start: "top 90%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
    });
    gsap.from(".footer-links a", {
        scrollTrigger: {
        trigger: ".footer-links",
        start: "top 90%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out"
    });
    gsap.from(".footer-social-icons a", {
        scrollTrigger: {
        trigger: ".footer-social-icons",
        start: "top 90%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out"
    });
    gsap.from(".footer-contact p", {
        scrollTrigger: {
        trigger: ".footer-contact",
        start: "top 90%",
        },
        opacity: 0, 
        y: 20,
        duration: 1,    
        ease: "power2.out"
    });


    // Smooth Scroll
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
        offset: function (anchor, toggle) {
            return document.querySelector('.navbar').offsetHeight;
        }
    });
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('.navbar a');
    menuToggle.addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('active');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.navbar').classList.remove('active');
        });
    }
    // Close mobile menu on link click
    );
    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    scrollToTopBtn.addEventListener('click', () => {
        scroll.animateScroll(0);
    });
    // Show/Hide Scroll to Top Button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }   
    );




});
