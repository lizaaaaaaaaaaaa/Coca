const nav = document.querySelector(".nav");
const button = document.querySelector(".header__btn");
const addressTable = document.querySelector(".connection__address");

var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

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
      (char, i) =>
        `<span style="transform:rotate(${i * 9.2}deg)">${char}</span>`
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

const countryCodes = [
  { code: "US", phoneNumber: "+1 (555) 000-0000" },
  { code: "CA", phoneNumber: "+1 (555) 000-0000" },
  { code: "GB", phoneNumber: "+44 (55) 000-0000" },
  { code: "UA", phoneNumber: "+380 (55) 00-0000" },
  { code: "IL", phoneNumber: "+972 (55) 00-0000" },
];

const select = document.getElementById("choosePhone");
const phone = document.getElementById("phone");

if (select && phone) {
  countryCodes.forEach((country) => {
    const option = document.createElement("option");
    option.text = country.code;
    option.value = country.phoneNumber;
    select.appendChild(option);
  });

  select.addEventListener("change", function () {
    const selectedOption = this.options[this.selectedIndex];
    const selectedCountryCode = selectedOption.value;
    phone.placeholder = `${selectedCountryCode}`;
  });
}

document.addEventListener("mousemove", function (e) {
  var cursor = document.querySelector(".cursor-highlight");
  var offsetX = window.scrollX;
  var offsetY = window.scrollY;
  cursor.style.display = "block";
  cursor.style.left = e.clientX + offsetX - 20 + "px"; //положення по горизонталі
  cursor.style.top = e.clientY + offsetY - 20 + "px"; //по вертикалі
});

const tabItem = document.querySelectorAll(".tabs__btn");
const tabContent = document.querySelectorAll(".tabs__item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  //забирати клас щоб змінити колір тексту на звичайний
  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn--active");
  });

  // щоб змінити колір тексту на синій тлбто активний елемент
  tabTarget.classList.add("tabs__btn--active");

  tabContent.forEach(function (item) {
    item.classList.remove("tabs__item--active");
  });

  document.querySelector(`#${button}`).classList.add("tabs__item--active");
}

$(".tabs__btns").slick({
  arrows: false,
  infinite: false,
  variableWidth: true,
  swipe: false,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        swipe: true,
      },
    },
  ],
});

$(".tabs__item").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  variableWidth: true,
});

$(".articles__slider").slick({
  arrows: false,
  variableWidth: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
});
