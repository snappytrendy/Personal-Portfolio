// WAIT FOR DOM
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       DARK MODE (with save)
    ========================= */
    const toggleBtn = document.getElementById("darkToggle");

    if (toggleBtn) {
        // Load saved theme
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
       PROGRESS BARS ANIMATION
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

    function checkScroll() {
        if (!skillsSection) return;

        const sectionTop = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            animateBars();
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();


    /* =========================
       SECTION FADE-IN
    ========================= */
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();


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
