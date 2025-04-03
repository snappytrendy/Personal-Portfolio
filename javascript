//for the progress bars 
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress");

  function animateProgressBars() {
    progressBars.forEach(bar => {
      let targetWidth = bar.getAttribute("style").match(/\d+/)[0] + "%";
      bar.style.width = targetWidth;
    });
  }

  // Trigger animation when user scrolls
  function checkScroll() {
    let skillsSection = document.getElementById("skills");
    let position = skillsSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      animateProgressBars();
      window.removeEventListener("scroll", checkScroll);
    }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run once in case section is already visible
});
