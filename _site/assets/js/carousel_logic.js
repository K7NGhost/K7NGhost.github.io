console.log("Hello world")

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Update classes for slides
function updateSlides() {
  slides.forEach((slide,index) => {
    slide.classList.remove('active', 'left', 'right', 'hidden');

    if (index === currentIndex) {
      slide.classList.add('active');
    }
    else if (index === (currentIndex - 1 + slides.length) % slides.length) {
      slide.classList.add('left');
    }
    else if (index === (currentIndex + 1) % slides.length) {
      slide.classList.add('right');
    }
    else {
      slide.classList.add('hidden');
    }
  });
}

// Move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

// Move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}


// Optionally, add keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// dragging carousel implementation

const carousel = document.querySelector('.carousel');
let isDragging = false;
let startX, endX, prevTranslate;

// Drag Start Event
function startDrag(e) {
  isDragging = true;
  startX = getPositionX(e);
  carousel.style.cursor = "grabbing";
}

// Drag End Event
function endDrag(e) {
  if (!isDragging) return;
  isDragging = false;
  carousel.style.cursor = "grab";
  endX = getPositionX(e);

  const deltaX = endX - startX;

  if (deltaX > 50) {
    prevSlide(); // Dragging right moves to the previous slide
  } else if (deltaX < -50) {
    nextSlide(); // Dragging left moves to the next slide
  }
}

// Detect click to change slide
function handleClick(e) {
  const clickX = e.clientX; // Get the X position of the click
  const carouselWidth = carousel.offsetWidth; // Get the total width of the carousel

  if (clickX < carouselWidth / 2) {
    prevSlide(); // Clicked on the left side → Go to previous slide
  } else {
    nextSlide(); // Clicked on the right side → Go to next slide
  }
}

// Get X position for both mouse and touch events
function getPositionX(e) {
  return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

// Attach Event Listeners
carousel.addEventListener("mousedown", startDrag);
carousel.addEventListener("mouseup", endDrag);
carousel.addEventListener("mouseleave", endDrag);
carousel.addEventListener("touchstart", startDrag);
carousel.addEventListener("touchend", endDrag);
carousel.addEventListener("click", handleClick);

// Initial Setup
updateSlides();

