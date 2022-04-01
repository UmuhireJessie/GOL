const showNavButton = document.querySelector('.nav__button-main');
const nav = document.querySelector('.navigation__nav');

showNavButton.addEventListener('click', () => {
    nav.classList.toggle('show__nav')
    document.querySelector('.nav__button--1').classList.toggle('rotate-positive')
    document.querySelector('.nav__button--2').classList.toggle('hide')
    document.querySelector('.nav__button--3').classList.toggle('rotate-negative')
});