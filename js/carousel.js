document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const nextBtn = carousel.querySelector('.next-btn');
        const prevBtn = carousel.querySelector('.prev-btn');
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('.carousel-images img');
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            imagesContainer.style.transform = `translateX(${offset}%)`;
        }

        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        updateCarousel();
    });
});
