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

const images = ["work1.JPG", "work2.JPG", "image3.JPG", "work4.JPG", "work5.JPG", "image6.JPG", "work7.JPG", "work8.JPG", "image9.JPG", "work10.JPG", "work11.JPG", "image12.JPG", "sketch1.jpg", "sketch2.jpg", "sketch3.jpg", "sketch4.jpg", "sketch5.jpg", "sketch6.jpg", "sketch7.jpg", "sketch8.jpg", "sketch9.jpg", "sketch10.jpg", "sketch11.jpg", "sketch12.jpg",];
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

let lastScrollY = window.pageYOffset;

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const currentScrollY = window.pageYOffset;

  // If scrolling down and past a 50px threshold, hide the header
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.classList.add('header-hidden');
  } else {
    // If scrolling up, show the header
    header.classList.remove('header-hidden');
  }

  // Update last scroll position
  lastScrollY = currentScrollY;
});

