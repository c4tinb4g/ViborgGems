const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;

function showSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;
    slider.style.transform = `translateX(-${index * 100}vw)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(index - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(index + 1);
});
