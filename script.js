document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;

    function showImage(idx) {
        const width = images[0].clientWidth;
        carouselImages.style.transform = `translateX(${-idx * width}px)`;
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % images.length;
        showImage(index);
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });
});