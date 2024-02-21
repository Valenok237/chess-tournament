const aboutSliderPrev = document.querySelector('.about-controllers__controller_prev');
const aboutSliderNext = document.querySelector('.about-controllers__controller_next');
const aboutSliderLine = document.querySelector('.about-slider__line');
const aboutSlides = document.querySelectorAll('.about-slide');
const aboutCircles = document.querySelectorAll('.about-controllers__circle');

const sliderInterval = aboutSlides.length;
let slideInterval = 1;
let aboutOffset = 0;
let index = 0;

const activeCircle = (n) => {
    for (let circle of aboutCircles) {
        circle.classList.remove('about-controllers__circle_active');
    };
    aboutCircles[n].classList.add('about-controllers__circle_active');
};

aboutCircles.forEach((item, indexCircle) => {
    item.addEventListener('click', () => {
        index = indexCircle;
        activeCircle(index);

        if (index === 0) {
            aboutSliderLine.style.left = 0 + 'px';
            aboutSliderPrev.setAttribute('disabled', '');
            aboutSliderNext.removeAttribute('disabled');
        } else if (index === aboutCircles.length - 1) {
            aboutSliderLine.style.left = -(aboutSlides[0].clientWidth * (aboutSlides.length - 1)) + 'px';
            aboutSliderNext.setAttribute('disabled', '');
            aboutSliderPrev.removeAttribute('disabled');
        } else {
            aboutSliderLine.style.left = -(aboutSlides[0].clientWidth * index) + 'px';
            aboutSliderPrev.removeAttribute('disabled');
            aboutSliderNext.removeAttribute('disabled');
        }
    });
});

aboutSliderNext.addEventListener('click', () => {
    index++;
    activeCircle(index);
    slideInterval = index + 1;
    aboutOffset = aboutSlides[0].clientWidth * index;

    if (slideInterval > 1) {
       aboutSliderPrev.removeAttribute('disabled');
    }
    if (slideInterval === sliderInterval) {
        aboutSliderNext.setAttribute('disabled', '');
    }   

    aboutSliderLine.style.left = -aboutOffset + 'px';
});

aboutSliderPrev.addEventListener('click', () => {
    index--;
    activeCircle(index);
    slideInterval = index + 1;
    aboutOffset = aboutSlides[0].clientWidth * index;

    if (slideInterval < sliderInterval) {
       aboutSliderNext.removeAttribute('disabled');
    }
    if (slideInterval === 1) {
        aboutSliderPrev.setAttribute('disabled', '');
    }
    
    aboutSliderLine.style.left = -aboutOffset + 'px';
});