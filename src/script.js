let swiperVariable1 = undefined;

let swiper = function (swiperClass) {//swiperClass строка с точкой
  return new Swiper(swiperClass, {
    // Optional parameters
  
    spaceBetween: 16,
    // If we need pagination
    slidesPerView: 'auto',
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  
  });
};

if(window.innerWidth < 768){

  swiperVariable1 =  swiper('.swiper');
 
}
function Listeners(expand,expand__text,expand__icon,list,listVisible,expandMarginSmall,expandMarginBig,productsRepairChild,marginChild){

let buttonDoor = document.querySelector(expand);
let swiperWrapper = document.querySelector(list);
let text = buttonDoor.querySelector(expand__text);
let doorIcon = buttonDoor.querySelector(expand__icon);
let prodRepair = document.querySelector(productsRepairChild);

let isOpen = 0;
//let techniqueElements = document.querySelector('.technique-elements');

buttonDoor.addEventListener("click", function (evt) {
  evt.preventDefault();

  doorIcon.classList.toggle('expand__icon-rotate');
  swiperWrapper.classList.toggle(listVisible);
  prodRepair.classList.toggle(marginChild);

    if (
      window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches
    ) {
      buttonDoor.classList.toggle(expandMarginSmall);
    } else {
      buttonDoor.classList.toggle(expandMarginBig);
    }

    if(isOpen === 0){
      text.textContent = "Скрыть";
      isOpen = 1;
    }
    else{
      text.textContent = "Показать всё";
      isOpen = 0;
    }
  
});


window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width:0 ) and (max-width: 768px)").matches) {
  
    swiperWrapper.classList.add(listVisible);
    if(swiperVariable1 === undefined){
    swiperVariable1 = swiper('.swiper');
    }

 
  }

  if (window.matchMedia("(min-width: 768px)and (max-width: 1980px)").matches) {
    if(swiperVariable1!==undefined){
      console.log(swiperVariable1);
      swiperVariable1[0].destroy(true, true);
      swiperVariable1[1].destroy(true, true);
      swiperVariable1 = undefined;
    }


  }

  
  if (window.matchMedia("(min-width: 768px)and (max-width: 1120px)").matches) {
    
    if (isOpen === 1) {
      buttonDoor.classList.add(expandMarginBig);
      buttonDoor.classList.remove(expandMarginSmall);
      prodRepair.classList.add(marginChild);
    }
    else{
      swiperWrapper.classList.remove(listVisible);
      prodRepair.classList.remove(marginChild);
    }
  }

  if (window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches) {
    if (isOpen === 1) {
      buttonDoor.classList.add(expandMarginSmall);
      buttonDoor.classList.remove(expandMarginBig);
      prodRepair.classList.add(marginChild);
    }
    else{
      swiperWrapper.classList.remove(listVisible);
      prodRepair.classList.remove(marginChild);
    }
  }

 
});


}

function ListenersPopUp(){

  let buttonBurger = document.querySelector('.header__wrap-margin-left .button');
  let popUpMenu = document.querySelector('.pop-up-menu');
  let buttonClose = document.querySelector('.pop-up-menu__wrap .button')
 
 
  buttonBurger.addEventListener('click', e => {
    e.stopPropagation();
  
    popUpMenu.classList.add('pop-up-menu--visible');
  });

  buttonClose.addEventListener('click', e => {
    e.stopPropagation();
  
    popUpMenu.classList.remove('pop-up-menu--visible');
  });
  
  document.addEventListener('click', e => {
   
    const withinBoundaries = e.composedPath().includes(popUpMenu);
 
	if ( ! withinBoundaries && popUpMenu.classList.contains('pop-up-menu--visible')) {
    popUpMenu.classList.remove('pop-up-menu--visible');
	}
  })


}


function ListenersCallMessage(icon,closeSmallWidth, closeBigWidth, modalWindow, modalWindowMod){

  let buttonOpen = document.querySelector(icon);
  let buttonCloseSmall = document.querySelector(closeSmallWidth);
  let buttonCloseBig = document.querySelector(closeBigWidth);
  let modal = document.querySelector(modalWindow);

  buttonOpen.addEventListener('click', function(evt){

    evt.preventDefault();
    evt.stopPropagation();
    modal.classList.add(modalWindowMod);

  });

  buttonCloseSmall.addEventListener('click', evt => {
    evt.preventDefault();
    evt.stopPropagation();
  
    modal.classList.remove(modalWindowMod);
  });


  
  buttonCloseBig.addEventListener('click', evt => {
    evt.preventDefault();
    evt.stopPropagation();
  
    modal.classList.remove(modalWindowMod);
  });



  document.addEventListener('click', evt => {
   
    const withinBoundaries = evt.composedPath().includes(modal);
 
	if ( ! withinBoundaries && modal.classList.contains(modalWindowMod)) {
    modal.classList.remove(modalWindowMod);
	}
  })




}

function ListenerMainText(){

  let expandButton = document.querySelector('.page-service__text .expand');
  let icon = document.querySelector('.page-service__text .expand__icon')
  let mainText = document.querySelector('.page-service__text-formation');
  let text = document.querySelector('.page-service__text .expand__text')
  let isOpen=0;
  expandButton.addEventListener('click',evt => {

    expandButton.classList.toggle('expand-margin-top');
    icon.classList.toggle('expand__icon-rotate');
    mainText.classList.toggle('page-service__text-formation--visible');
    if(isOpen){
      text.textContent = 'Читать далее';
      isOpen = 0;
    }
    else{
      isOpen = 1;
      text.textContent = 'Скрыть';
    }

  })
}



Listeners('.repair-elements__button-wrapper .expand','.repair-elements__button-wrapper .expand__text','.repair-elements__button-wrapper .expand__icon','.repair-elements__list','repair-elements__list--visible','repair-elements__expand--margin-top-small','repair-elements__expand--margin-top-big','article.products-repair','products-repair--top-margin');

Listeners('.technique-elements__button-wrapper .expand','.technique-elements__button-wrapper .expand__text','.technique-elements__button-wrapper .expand__icon','.technique-elements__list','technique-elements__list--visible','technique-elements__expand--margin-top-small','technique-elements__expand--margin-top-big','section.products-repair','products-repair--top-margin');

ListenersPopUp();

ListenersCallMessage('.list-buttons__button .button__phone-icon','.request-call__button','.modals__call .clean-list__button','.modals__call','modals__call--visible');


ListenersCallMessage('.list-buttons__button .button__message-icon','.request-message__button','.modals__message .clean-list__button','.modals__message','modals__message--visible');

ListenerMainText();