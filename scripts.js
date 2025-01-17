// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.slider-nav button');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach(slide => slide.classList.remove('active'));
    navButtons.forEach(button => button.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    navButtons[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 1600);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Attach event listeners
navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showSlide(index);
        stopAutoSlide(); // Stop auto-slide after manual interaction
        startAutoSlide(); // Restart auto-slide
    });
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide(); // Stop auto-slide after manual interaction
    startAutoSlide(); // Restart auto-slide
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide(); // Stop auto-slide after manual interaction
    startAutoSlide(); // Restart auto-slide
});

// Start auto-sliding initially
startAutoSlide();

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,            // Enables looping
        margin: 270,           // Adds margin between items
        nav: false,            // Shows navigation arrows
        dots: true,           // Shows dots below the carousel
        autoplay: true,       // Enables auto-slide
        autoplayTimeout: 3000, // Auto-slide interval (in milliseconds)
        responsive: {
            0: {
                items: 1      // 1 item for screens < 600px
            },
            600: {
                items: 2      // 2 items for screens 600px - 1000px
            },
            1000: {
                items: 3      // 3 items for screens > 1000px
            }
        }
    });
});
