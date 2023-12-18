const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');
const slide3 = document.querySelector('.slide-3');
const slide4 = document.querySelector('.slide-4');
const slide5 = document.querySelector('.slide-5');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const slider = document.querySelector('.slider');
const slideWidth = slider.clientWidth;

// Setting slider to middle on content load
document.addEventListener('DOMContentLoaded', function () {
  slider.scrollLeft = slideWidth * 1.5;
});

prev.addEventListener('click', () => {
  // Calculate the new scroll position based on the current position
  const newPosition = slider.scrollLeft - slideWidth;

  // Use scrollTo for smooth scrolling
  // Adding more to newPosition to compensate for the scrolling
  // behavior when at the end
  slider.scrollLeft = newPosition + slideWidth / 2;
});

next.addEventListener('click', () => {
  // Calculate the new scroll position based on the current position
  const newPosition = slider.scrollLeft + slideWidth;

  // Use scrollTo for smooth scrolling
  // Removing more to newPosition to compensate for the scrolling
  // behavior when at the start
  slider.scrollLeft = newPosition - slideWidth / 2;
});
