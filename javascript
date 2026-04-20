document.addEventListener("DOMContentLoaded", function () {

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
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      animateBars();
      window.removeEventListener("scroll", checkScroll);
    }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();

});
document.addEventListener("DOMContentLoaded", function () {

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
});
