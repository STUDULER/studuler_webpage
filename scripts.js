// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.slider-nav button');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    navButtons.forEach(button => button.classList.remove('active'));

    slides[index].classList.add('active');
    navButtons[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 1300);

// Click handlers for navigation buttons
navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});
