// WAIT FOR DOM
document.addEventListener("DOMContentLoaded", function () {

    // ENABLE JS-BASED ANIMATIONS
    document.body.classList.add("js-enabled");

    /* =========================
       DARK MODE (with save)
    ========================= */
    const toggleBtn = document.getElementById("darkToggle");

    if (toggleBtn) {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            toggleBtn.textContent = "☀️ Light Mode";
        }

        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                toggleBtn.textContent = "☀️ Light Mode";
                localStorage.setItem("theme", "dark");
            } else {
                toggleBtn.textContent = "🌙 Dark Mode";
                localStorage.setItem("theme", "light");
            }
        });
    }


    /* =========================
       PROGRESS BARS (Observer)
    ========================= */
    const progressBars = document.querySelectorAll(".progress");
    const skillsSection = document.getElementById("skills-experience");

    function animateBars() {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute("data-width");
            if (targetWidth) {
                bar.style.width = targetWidth;
            }
        });
    }

    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateBars();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillsObserver.observe(skillsSection);
    }


    /* =========================
       SECTION FADE-IN (Observer)
    ========================= */
const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            sectionObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

// Observe all sections
sections.forEach(section => {
    sectionObserver.observe(section);

    // 🔥 FIX: immediately show if already in viewport
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        section.classList.add("show");
    }
});
    /* =========================
   ACTIVE NAVBAR LINKS
========================= */
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

});

    /* =========================
       SMOOTH SCROLL
    ========================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
