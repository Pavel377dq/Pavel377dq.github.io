import './a.scss'

var buttonDoor = document.querySelector(".door");
var swiperWrapper = document.getElementsByClassName("repair-wrap");
var text = buttonDoor.querySelector(".text__door");
var doorIcon = buttonDoor.querySelector(".door__icon");
var swiperVariable;
var isOpen = 0;

buttonDoor.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (isOpen === 0) {
    swiperWrapper[0].style = "overflow: visible";
    isOpen = 1;
    if (
      window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches
    ) {
      buttonDoor.style = "margin-top: 100px;";
      text.textContent = "Скрыть";
      doorIcon.classList.add("door__icon-rotate");
      console.log(doorIcon.style);
    } else {
      buttonDoor.style = "margin-top: 180px;";
      text.textContent = "Скрыть";
      doorIcon.classList.add("door__icon-rotate");
      console.log(doorIcon.style);
    }
  } else {
    console.log(swiperWrapper[0].style);
    console.log("hidden");
    swiperWrapper[0].style = "overflow: hidden";
    buttonDoor.style = "margin-top: 0;";
    isOpen = 0;
    text.textContent = "Показать всё";
    doorIcon.classList.remove("door__icon-rotate");
    console.log(doorIcon.style);
  }
});

var swiper = function () {
  return new Swiper(".swiper", {
    // Optional parameters

    spaceBetween: 16,
    // If we need pagination

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.4,
      },
      450: {
        slidesPerView: 1.8,
      },
      550: {
        slidesPerView: 2.2,
      },
      700: {
        slidesPerView: 2.5,
      },
    },
  });
};

swiperVariable = swiper();

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width:0 ) and (max-width: 768px)").matches) {
    buttonDoor.style = "margin-top: 0;";
    isOpen = 0;

    text.textContent = "Показать всё";
    doorIcon.classList.remove("door__icon-rotate");
    swiperWrapper[0].style = "overflow: visible";

    if (swiperVariable === undefined) {
      swiperVariable = swiper();
    }
  }

  if (window.matchMedia("(min-width: 768px)and (max-width: 1980px)").matches) {
    if (swiperVariable !== undefined) {
      swiperVariable.destroy(true, true);
      swiperVariable = undefined;
    }
  }

  if (window.matchMedia("(min-width: 768px)and (max-width: 1120px)").matches) {
    if (isOpen === 1) {
      buttonDoor.classList.add('door--margin-top-big');
      swiperWrapper.classList.add('repair-elements__list--visible');
    }
  }

  if (window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches) {
    if (isOpen === 1) {
      buttonDoor.style = "margin-top: 100px;";
      swiperWrapper[0].style = "overflow: visible";
    }
  }
});


var p = [2,3,4];
console.log(String(p));
