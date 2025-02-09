// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Toggle mobile menu (if needed)
const navbar = document.querySelector('.navbar');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Menu';
toggleButton.classList.add('toggle-button');
navbar.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
