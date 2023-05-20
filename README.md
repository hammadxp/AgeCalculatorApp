# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./public/img/design/desktop-preview.jpg)

### Links

- Solution URL: [Link](https://www.frontendmentor.io/solutions/age-calculator-app-p2ujl_oWWf)
- Live Site URL: [Link](https://age-calculator-hammadxp.netlify.app)

## My process

Creating the design was easy but form validation took me while. Especially the red indicators around invalid input fields. Also, the age calculation logic was tricky, so had to get help from the internet. And I also animated the calculated age numbers on enter.

### What I learned

I learned about form validation using JavaScript. JavaScript's 'Date' object is really powerfull and can be used for interesting things. Using frames to animate text for performance.

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Desktop-first workflow
- Vanilla JavaScript

### Useful resources

- ChatGPT
- Stackoverflow
