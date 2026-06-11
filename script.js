// ==============================
// IU IMAGA WEBSITE SCRIPT
// Premium Version
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // HERO SLIDESHOW
    // ==========================

    const slides = document.querySelectorAll(".hero-slide");

    if (slides.length > 0) {

        let currentSlide = 0;

        function changeSlide() {

            slides[currentSlide].classList.remove("active");

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            slides[currentSlide].classList.add("active");
        }

        setInterval(changeSlide, 5000);
    }

    // ==========================
    // MOBILE MENU
    // ==========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                menuToggle.innerHTML = "&times;";
            } else {
                menuToggle.innerHTML = "&#9776;";
            }

        });

    }

    // ==========================
    // CLOSE MENU AFTER CLICK
    // ==========================

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 900) {

                navMenu.classList.remove("active");

                if (menuToggle) {
                    menuToggle.innerHTML = "&#9776;";
                }

            }

        });

    });

    // ==========================
    // STICKY NAV SHADOW
    // ==========================

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            nav.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.25)";

            nav.style.background =
                "rgba(0,33,71,0.96)";

        } else {

            nav.style.boxShadow = "none";

            nav.style.background =
                "rgba(0,33,71,0.92)";
        }

    });

    // ==========================
    // SCROLL REVEAL ANIMATION
    // ==========================

    const revealElements = document.querySelectorAll(
        ".section, .content-section, .identity-card, .venture-item, .writing-card, .publication-card, .contact-card"
    );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition =
            "all 0.8s ease";

    });

    function revealOnScroll() {

        revealElements.forEach(el => {

            const windowHeight =
                window.innerHeight;

            const elementTop =
                el.getBoundingClientRect().top;

            const revealPoint = 120;

            if (elementTop < windowHeight - revealPoint) {

                el.style.opacity = "1";
                el.style.transform =
                    "translateY(0)";
            }

        });

    }

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

    // ==========================
    // HERO TEXT FADE-IN
    // ==========================

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

        }, 400);

    }

    // ==========================
    // IMAGE HOVER SMOOTHNESS
    // ==========================

    const galleryImages =
        document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transition =
                "all 0.5s ease";

        });

    });

    // ==========================
    // ACTIVE PAGE HIGHLIGHT
    // ==========================

    const currentPage =
        window.location.pathname.split("/").pop();

    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (
            href &&
            (
                href.endsWith(currentPage) ||
                (
                    currentPage === "" &&
                    href.includes("index.html")
                )
            )
        ) {

            link.style.color = "#c8a951";

        }

    });

});