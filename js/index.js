// Photo modal functionalities
const modalContent = document.getElementById("modalContent");
const modalTitle = document.getElementById("modalTitle");

function addToModal(title, imgUrl) {
    modalTitle.textContent = title;
    modalContent.innerHTML = `<img width="100%" src="${imgUrl}" + "/>`;
}

// Generate projects section
generateProjectsSection();

// Generate portfolio section
generatePortfolioSection();

// Generate contact section
generateContactSection();
