import swiper from "./swiper.js";



function Listeners(
  expand,
  expand__text,
  expand__icon,
  list,
  listVisible,
  expandMarginSmall,
  expandMarginBig,
  productsRepairChild,
  marginChild
) {
  let buttonDoor = document.querySelector(expand);
  let swiperWrapper = document.querySelector(list);
  let text = buttonDoor.querySelector(expand__text);
  let doorIcon = buttonDoor.querySelector(expand__icon);
  let prodRepair = document.querySelector(productsRepairChild);

  let isOpen = 0;

  let swiperVariable1 = undefined;

  if (window.innerWidth < 768) {
    swiperVariable1 = swiper(".swiper");
  }
  //let techniqueElements = document.querySelector('.technique-elements');

  buttonDoor.addEventListener("click", function (evt) {
    evt.preventDefault();

    doorIcon.classList.toggle("expand__icon-rotate");
    swiperWrapper.classList.toggle(listVisible);
    prodRepair.classList.toggle(marginChild);

    if (
      window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches
    ) {
      buttonDoor.classList.toggle(expandMarginSmall);
    } else {
      buttonDoor.classList.toggle(expandMarginBig);
    }

    if (isOpen === 0) {
      text.textContent = "Скрыть";
      isOpen = 1;
    } else {
      text.textContent = "Показать всё";
      isOpen = 0;
    }
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width:0 ) and (max-width: 768px)").matches) {
      swiperWrapper.classList.add(listVisible);
      if (swiperVariable1 === undefined) {
        swiperVariable1 = swiper(".swiper");
      }
    }

    if (
      window.matchMedia("(min-width: 768px)and (max-width: 1980px)").matches
    ) {
      if (swiperVariable1 !== undefined) {
        console.log(swiperVariable1);
        swiperVariable1[0].destroy(true, true);
        swiperVariable1[1].destroy(true, true);
        swiperVariable1[2].destroy(true,true);
        swiperVariable1 = undefined;
      }
    }

    if (
      window.matchMedia("(min-width: 768px)and (max-width: 1120px)").matches
    ) {
      if (isOpen === 1) {
        buttonDoor.classList.add(expandMarginBig);
        buttonDoor.classList.remove(expandMarginSmall);
        prodRepair.classList.add(marginChild);
      } else {
        swiperWrapper.classList.remove(listVisible);
        prodRepair.classList.remove(marginChild);
      }
    }

    if (
      window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches
    ) {
      if (isOpen === 1) {
        buttonDoor.classList.add(expandMarginSmall);
        buttonDoor.classList.remove(expandMarginBig);
        prodRepair.classList.add(marginChild);
      } else {
        swiperWrapper.classList.remove(listVisible);
        prodRepair.classList.remove(marginChild);
      }
    }
  });
}


export default Listeners;
