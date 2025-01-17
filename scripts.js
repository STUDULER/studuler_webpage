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
setInterval(nextSlide, 1600);

// Click handlers for navigation buttons
navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

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
