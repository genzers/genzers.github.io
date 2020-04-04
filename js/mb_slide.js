// IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
var mb_imageSlides = document.getElementsByClassName('mb_imageSlides');
var mb_circles = document.getElementsByClassName('mb_circle');
var mb_leftArrow = document.getElementById('mb_leftArrow');
var mb_rightArrow = document.getElementById('mb_rightArrow');
var mb_counter = 0;

// HIDE ALL IMAGES FUNCTION
function mb_hideImages() {
  for (var i = 0; i < mb_imageSlides.length; i++) {
    mb_imageSlides[i].classList.remove('mb_visible');
  }
}

// REMOVE ALL DOTS FUNCTION
function mb_removeDots() {
  for (var i = 0; i < mb_imageSlides.length; i++) {
    mb_circles[i].classList.remove('mb_dot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function mb_imageLoop() {
  var currentImage = mb_imageSlides[mb_counter];
  var currentDot = mb_circles[mb_counter];
  currentImage.classList.add('mb_visible');
  mb_removeDots();
  currentDot.classList.add('mb_dot');
  mb_counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function mb_arrowClick(e) {
  var target = e.target;
  if (target == mb_leftArrow) {
    clearInterval(mb_imageSlideshowInterval);
    mb_hideImages();
    mb_removeDots();
    if (mb_counter == 1) {
      mb_counter = (mb_imageSlides.length - 1);
      mb_imageLoop();
      mb_imageSlideshowInterval = setInterval(mb_slideshow, 5000);
    } else {
      mb_counter--;
      mb_counter--;
      mb_imageLoop();
      mb_imageSlideshowInterval = setInterval(mb_slideshow, 5000);
    }
  } 
  else if (target == mb_rightArrow) {
    clearInterval(mb_imageSlideshowInterval);
    mb_hideImages();
    mb_removeDots();
    if (mb_counter == mb_imageSlides.length) {
      mb_counter = 0;
      mb_imageLoop();
      mb_imageSlideshowInterval = setInterval(mb_slideshow, 5000);
    } else {
      mb_imageLoop();
      mb_imageSlideshowInterval = setInterval(mb_slideshow, 5000);
    }
  }
}

mb_leftArrow.addEventListener('click', mb_arrowClick);
mb_rightArrow.addEventListener('click', mb_arrowClick);


// IMAGE SLIDE FUNCTION
function mb_slideshow() {
  if (mb_counter < mb_imageSlides.length) {
    mb_imageLoop();
  } else {
    mb_counter = 0;
    mb_hideImages();
    mb_imageLoop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(mb_slideshow, 5000);
var mb_imageSlideshowInterval = setInterval(mb_slideshow, 5000);