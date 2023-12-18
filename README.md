# Single-page design portfolio

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Screenshot](#screenshot)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Links

- Live Demo: [https://aaronkagandev-design-portfolio.netlify.app/](https://aaronkagandev-design-portfolio.netlify.app/)

### Screenshot

![](assets/preview.jpg)

## My process

### Built with

- Semantic HTML
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

The hardest part of this project was the logic for the image carousel.
Here is the example for the mobile view.

```scss
.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth
  gap: 1.5rem

  img {
    max-width: 27rem;
    scroll-snap-align: center;
    border-radius: 0.8rem;
  }
```

Because we're using not using fixed widths here it scales well when
the image size is changed for lager viewports

```js
const slider = document.querySelector('.slider');
const slideWidth = slider.clientWidth;
prev.addEventListener('click', () => {
  const newPosition = slider.scrollLeft - slideWidth;
  slider.scrollLeft = newPosition + slideWidth / 2;
});
next.addEventListener('click', () => {
  const newPosition = slider.scrollLeft + slideWidth;
  slider.scrollLeft = newPosition - slideWidth / 2;
});
```

## Author

- Portfolio - [aaronkagan.dev](https://www.aaronkagan.dev)
- Linkedin - [/aaron-kagan](https://www.linkedin.com/in/aaron-kagan/)
- X - [@aaronkagandev](https://www.twitter.com/aaronkagandev)
- Instagram - [aaronkagandev](https://www.instagram.com/aaronkagandev/)
