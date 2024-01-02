document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slidepx');
    let currentSlide = 0;
    const intervalTime = 3000; // 3 segundos para cada slide
    let slideInterval;

    const nextSlide = () => {
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = '1';
    };

    slideInterval = setInterval(nextSlide, intervalTime);

    // Añadir aquí más funcionalidades si es necesario
});

