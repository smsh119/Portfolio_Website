const projectData = [
    {
        title: "DimDhora",
        thumbUrl: "images/projects/DimDhora.PNG",
        projectUrl: "Projects/DimDhora/index.html",
        description: "Unity Game Development Project",
    },
    {
        title: "Block Destroyer",
        thumbUrl: "images/projects/Block Destroyer.PNG",
        projectUrl: "Projects/BlockDestroyer/index.html",
        description: "Unity Game Development Project",
    },
];

const projectsDiv = document.getElementsByClassName("projects")[0];

function generateProjectsSection() {
    let i = 0;
    while (i < projectData.length) {
        const el = document.createElement("div");
        el.classList.add("row", "project_row");
        let n = i + 3;
        while (i < n && i < projectData.length) {
            const innerEl = document.createElement("div");
            innerEl.classList.add("col-md-4", "project_col");

            // setting the inner content based on dynamic data
            innerEl.innerHTML = `<h3>${projectData[i].title}</h3>
            <img
                src="${projectData[i].thumbUrl}"
                alt="project_one"
            />
            <h6>${projectData[i].description}</h6>
            <a href="${projectData[i].projectUrl}"
                >View Project</a
            >`;

            el.appendChild(innerEl);
            i++;
        }
        projectsDiv.appendChild(el);
    }
}
