const portfolioData = [
    {
        title: "Photo Art",
        thumbUrl: "images/portfolio/photoart thumbnail.png",
        imgUrl: "./images/portfolio/photoart.png",
        description: "This is a webpage created using HTML and CSS.",
    },
    {
        title: "Portfolio/Personal Site",
        thumbUrl: "images/portfolio/portfolio site thumbnail.png",
        imgUrl: "./images/portfolio/portfolio site.png",
        description: "The site is created using HTML and CSS.",
    },
    {
        title: "Speed Motors",
        thumbUrl: "images/portfolio/wordpress thumbnail.png",
        imgUrl: "./images/portfolio/wordpress.png",
        description:
            "This is an e-commerce site. It is created using Wordpress.",
    },
    {
        title: "Photographic Site",
        thumbUrl: "images/portfolio/Bootstrap thumbnail.png",
        imgUrl: "./images/portfolio/Bootstrap.png",
        description:
            "It is a phographic site. HTML, CSS and Javascript is used to create the page.",
    },
    {
        title: "ABC Restaurant",
        thumbUrl: "images/portfolio/abc restaurant thumbnail.png",
        imgUrl: "./images/portfolio/abc restaurant.png",
        description: "The site is created using HTML anc CSS.",
    },
    {
        title: "Registration Page",
        thumbUrl: "images/portfolio/form thumbnail.PNG",
        imgUrl: "./images/portfolio/form.PNG",
        description: "It is created using HTML and CSS.",
    },
];

const portfolioDiv = document.getElementsByClassName("portfolio")[0];

function generatePortfolioSection() {
    let i = 0;
    while (i < portfolioData.length) {
        const el = document.createElement("div");
        el.classList.add("row", "portfolio_row");
        let n = i + 3;
        while (i < n && i < portfolioData.length) {
            const innerEl = document.createElement("div");
            innerEl.classList.add("col-md-4", "portfolio_col");

            // setting the inner content based on dynamic data
            innerEl.innerHTML = `<h3>${portfolioData[i].title}</h3>
        <img
            src="${portfolioData[i].thumbUrl}"
            alt="portfolio_one"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
            onclick="addToModal('${portfolioData[i].title}','${portfolioData[i].imgUrl}')"
        />
        <h6>${portfolioData[i].description}</h6>`;

            el.appendChild(innerEl);
            i++;
        }
        portfolioDiv.appendChild(el);
    }
}
