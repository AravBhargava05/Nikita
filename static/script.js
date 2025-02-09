document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Open modal
function openModal(imageWrapper) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalText = document.getElementById('modal-text');
    const imgElement = imageWrapper.querySelector('img');
    const imgSrc = imgElement.src;
    const imgDescription = imgElement.getAttribute('data-description');
    const imgTitle = imageWrapper.querySelector('.image-description').textContent;
    const imgTitle2 = imageWrapper.querySelector('.image-description2').textContent;

    modalImg.src = imgSrc;
    modalText.innerHTML = `${imgTitle} <br><br> ${imgTitle2}`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}


// Add click handler to the close button
document.querySelector('.close').addEventListener('click', closeModal);

