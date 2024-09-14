// JavaScript to dynamically add projects to your portfolio
document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");

    // Example projects (you can replace this with your own)
    const projects = [
        { name: "Project 1", link: "#", description: "This is my first project." },
        { name: "Project 2", link: "#", description: "This is my second project." }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <h3><a href="${project.link}">${project.name}</a></h3>
            <p>${project.description}</p>
        `;

        projectList.appendChild(projectDiv);
    });
});
