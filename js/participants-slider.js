const sliderPrev = document.querySelector('.participants-controllers__controller_prev');
const sliderNext = document.querySelector('.participants-controllers__controller_next');
const sliderWindow = document.querySelector('.participants-slider');
const sliderLine = document.querySelector('.participants-slider__line');
const slides = document.querySelectorAll('.participants-slide');
const slideCount = document.querySelector('.participants-controllers__count_slide');

const numberItems = Math.floor(sliderWindow.clientWidth / slides[0].clientWidth);
let countItems = numberItems;
slideCount.textContent = numberItems;
const intervalSlider =  Math.ceil((slides[0].clientWidth * slides.length) / sliderWindow.clientWidth);
let intervalSlide = 1;
let offset = 0;

sliderNext.addEventListener('click', () => {
    if(countItems < slides.length) {
        countItems+=numberItems;
        slideCount.textContent = countItems;
    }
    
    offset = offset + sliderWindow.clientWidth;
    intervalSlide++;

    if (intervalSlide > intervalSlider ) {
        offset = 0;
        intervalSlide = 1;
        countItems = numberItems;
        slideCount.textContent = numberItems;
    }   
    sliderLine.style.left = -offset + 'px';
})

sliderPrev.addEventListener('click', () => {
    if(countItems > numberItems) {
        countItems-=numberItems;
        slideCount.textContent = countItems;
    }
    
    offset = offset - sliderWindow.clientWidth;
    intervalSlide--;

    if (intervalSlide < 1) {
       offset = (slides[0].clientWidth * slides.length) - sliderWindow.clientWidth;
       intervalSlide = intervalSlider;
       countItems = slides.length;
       slideCount.textContent = slides.length;
    }
    sliderLine.style.left = -offset + 'px';
})

const nextSlide = () => {
    if(countItems < slides.length) {
        countItems+=numberItems;
        slideCount.textContent = countItems;
    }
    
    offset = offset + sliderWindow.clientWidth;
    intervalSlide++;

    if (intervalSlide > intervalSlider ) {
        offset = 0;
        intervalSlide = 1;
        countItems = numberItems;
        slideCount.textContent = numberItems;
    }   
    sliderLine.style.left = -offset + 'px';
};

setInterval(nextSlide, 4000);