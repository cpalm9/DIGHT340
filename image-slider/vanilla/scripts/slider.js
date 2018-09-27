const slider = document.querySelector('.slider');
const sliderStyles = getComputedStyle(slider);
let translateValue = sliderStyles.getPropertyValue('--translateValue');

const slides = document.querySelectorAll('.slide');
const slideWidth = document.querySelector('.slide').clientWidth;
let imageIndex = 0;

const arrowForward = document.querySelector('.arrow-forward');
const arrowBackward = document.querySelector('.arrow-backward');

arrowForward.addEventListener('click',() => {
    imageIndex++;
    if(imageIndex === slides.length){
      imageIndex = 0;
      translateValue = 0;
    }
    else {
      translateValue = translateValue - slideWidth;
    }
    slider.style.setProperty('--translateValue', `${translateValue}px`);
  }
);

arrowBackward.addEventListener('click', () => {
  imageIndex--;
  if(imageIndex < 0){
    imageIndex = slides.length - 1;
    translateValue = -(slideWidth * imageIndex);
  }
  else{
    translateValue = translateValue + slideWidth;
  }
  slider.style.setProperty('--translateValue', `${translateValue}px`);
})
// use arrow keys and space bar to move forward

document.addEventListener('keydown', (e) => {
  if(e.keyCode == 39 || e.keyCode == 32){
    imageIndex++;
    if(imageIndex === slides.length){
      imageIndex = 0;
      translateValue = 0;
    }
    else {
      translateValue = translateValue - slideWidth;
    }
    slider.style.setProperty('--translateValue', `${translateValue}px`);
  }
  else if(e.keyCode == 37){
    imageIndex--;
    if(imageIndex < 0){
      imageIndex = slides.length - 1;
      translateValue = -(slideWidth * imageIndex);
    }
    else{
      translateValue = translateValue + slideWidth;
    }
    slider.style.setProperty('--translateValue', `${translateValue}px`);
  }
})