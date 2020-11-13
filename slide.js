let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;


//This function clears all images ▽

function reset(){
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

//This function initializes the slider ▽

function startSlide(){
  reset();
  sliderImages[0].style.display = 'block';
}

//This function shows the previous slide ▽

function slideLeft(){
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

//This function shows the next slide ▽

function slideRight(){
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

//This function initializes the left-arrow ▽

arrowLeft.addEventListener('click', function(){
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
})

//This function initializes the right-arrow ▽

arrowRight.addEventListener('click', function(){
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
})


startSlide();
