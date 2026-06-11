// ======================================
// IU IMAGA WEBSITE
// Premium Script
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================
    // HERO SLIDESHOW
    // ======================================

    const slides = document.querySelectorAll(".hero-slide");

    if (slides.length > 0) {

        let currentSlide = 0;

        slides[0].classList.add("active");

        setInterval(() => {

            slides[currentSlide].classList.remove("active");

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            slides[currentSlide].classList.add("active");

        }, 6000);
    }

    // ======================================
    // MOBILE MENU
    // ======================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                menuToggle.innerHTML = "&times;";
            } else {
                menuToggle.innerHTML = "&#9776;";
            }

        });

    }

    // ======================================
    // CLOSE MENU AFTER CLICK
    // ======================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 900 && navMenu) {

                navMenu.classList.remove("active");

                if (menuToggle) {
                    menuToggle.innerHTML = "&#9776;";
                }
            }

        });

    });

    // ======================================
    // STICKY NAV EFFECT
    // ======================================

    const nav = document.querySelector("nav");

    if (nav) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                nav.style.background =
                    "rgba(0,33,71,0.98)";

                nav.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.20)";

            } else {

                nav.style.background =
                    "rgba(0,33,71,0.95)";

                nav.style.boxShadow =
                    "none";
            }

        });

    }

    // ======================================
    // SCROLL REVEAL
    // ======================================

    const revealElements = document.querySelectorAll(
        ".section, .content-section, .identity-card, .venture-item, .writing-card, .publication-card, .contact-card, .quick-links, .gallery-grid"
    );

    const revealOnScroll = () => {

        revealElements.forEach(element => {

            const windowHeight =
                window.innerHeight;

            const elementTop =
                element.getBoundingClientRect().top;

            const revealPoint = 120;

            if (elementTop < windowHeight - revealPoint) {

                element.style.opacity = "1";
                element.style.transform = "translateY(0)";

            }

        });

    };

    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition =
            "all 0.8s ease";

    });

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

    // ======================================
    // HERO CONTENT ANIMATION
    // ======================================

    const heroContent =
        document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform =
            "translateY(40px)";
        heroContent.style.transition =
            "all 1.2s ease";

        setTimeout(() => {

            heroContent.style.opacity = "1";
            heroContent.style.transform =
                "translateY(0)";

        }, 300);

    }

    // ======================================
    // ACTIVE PAGE HIGHLIGHT
    // ======================================

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();

    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (!href) return;

        if (
            href.includes(currentPage)
        ) {
            link.classList.add("active");
        }

        if (
            currentPage === "" &&
            href.includes("index.html")
        ) {
            link.classList.add("active");
        }

    });

    // ======================================
    // GALLERY IMAGE EFFECTS
    // ======================================

    const galleryImages =
        document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(img => {

        img.style.transition =
            "all 0.5s ease";

    });

});