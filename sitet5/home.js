// Image slider 
const slides = document.querySelectorAll(".banner1 .slide");
const slideContents = document.querySelectorAll(".banner1 .slide-content");
let slideIndex = 0;
let intervalId = null;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slideContents.forEach(content => content.style.display = "none");
    slideIndex = (index + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
    slideContents[slideIndex].style.display = "block";
}

function initializeSlider() {
    if (slides.length > 0) {
        showSlide(slideIndex);
        startInterval();
    }
} 

function startInterval() {
    intervalId = setInterval(() => showSlide(++slideIndex), 5000); //time out
}

function resetInterval() {
    clearInterval(intervalId);
    startInterval();
}

function prevSlide() {
    showSlide(--slideIndex);
    resetInterval();
}

function nextSlide() {
    showSlide(++slideIndex);
    resetInterval();
}

document.querySelector('.prevbtn').addEventListener('click', prevSlide);
document.querySelector('.nextbtn').addEventListener('click', nextSlide);

initializeSlider();
