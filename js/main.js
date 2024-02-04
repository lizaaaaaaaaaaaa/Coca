const nav = document.querySelector(".nav");
const button = document.querySelector(".header__btn");
const addressTable = document.querySelector(".connection__address");

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function addWow() {
  // Перевірка чи елементи знайдено перед додаванням / видаленням класів
  if (nav && button) {
    if (width > 690) {
      nav.classList.add("wow", "fadeInRight");
      button.classList.add("wow", "fadeInRight");
    } else {
      nav.classList.remove("wow", "fadeInRight");
      button.classList.remove("wow", "fadeInRight");
    }
  }

  if (addressTable) {
    if (width > 775) {
      addressTable.classList.remove("wow", "fadeInRight");
    } else {
      addressTable.classList.add("wow", "fadeInRight");
    }
  }
}

addWow();

document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});

const menuBtn = document.querySelector(".burger");
const menuBody = document.querySelector(".header__links");

if (menuBtn && menuBody) {
  menuBtn.addEventListener("click", () => {
    menuBody.classList.toggle("header__links--active");
    menuBtn.classList.toggle("burger--active");
    menuBody.classList.add("wow", "bounceInDown");
  });
}

$(".insight__slider").slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  variableWidth: true,
});

$(".testim__slider").slick({
  arrows: true,
  infinite: false,
   // appendArrows: $('.testim__arrows'),
  // prevArrow:'<button type="button" class="testim__arrows-prev"><img src="../images/icons/active-arrow.svg"></button>',
  // nextArrow:'<button type="button" class="testim__arrows-next"><img src="../images/icons/active-arrow.svg"></button>'
});

const text = document.querySelector(".get-it__p p");

if (text) {
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) => `<span style="transform:rotate(${i * 9.2}deg)">${char}</span>`
    )
    .join("");
}

if (width > 690) {
  $(".believe-in__slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
  });
}

$(".team__slider").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  variableWidth: true,
});
