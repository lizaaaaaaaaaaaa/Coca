const nav = document.querySelector('.nav');
const button = document.querySelector('.header__btn');

function addWow() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (width > 690) {
    nav.classList.add('wow', 'fadeInRight');
    button.classList.add('wow', 'fadeInRight');
  } else {
    nav.classList.remove('wow', 'fadeInRight');
    button.classList.remove('wow', 'fadeInRight');
  }
}

addWow();

document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();
});

const menuBtn = document.querySelector('.burger');
const menuBody = document.querySelector('.header__links');

menuBtn.addEventListener('click', () => {
    menuBody.classList.toggle('header__links--active');
    menuBtn.classList.toggle('burger--active');
});

$('.insight__slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
});

$('.testim__slider').slick({
    arrows: true,
    infinite: false,
    adaptiveHeight: false,
});