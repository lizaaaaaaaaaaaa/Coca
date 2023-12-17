document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();
});

const menuBtn = document.querySelector('.burger');
const menuBody = document.querySelector('.header__links');

menuBtn.addEventListener('click', () => {
    menuBody.classList.toggle('header__links--active');
    menuBtn.classList.toggle('burger--active');
});