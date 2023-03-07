import swiper from  "./swiper.js"



function Listeners(swiperVariable){
   let buttonDoor = document.querySelector(".expand-top");
   let swiperWrapper = document.querySelector(".repair-elements__list");
let text = buttonDoor.querySelector(".expand-top__text");
let doorIcon = buttonDoor.querySelector(".expand-top__icon");
let isOpen = 0;



   buttonDoor.addEventListener("click", function (evt) {
      evt.preventDefault();
  
      doorIcon.classList.toggle("door__icon-rotate");
      swiperWrapper.classList.toggle('repair-elements__list--visible');
    
        if (
          window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches
        ) {
          buttonDoor.classList.toggle('door--margin-top-small');
        } else {
          buttonDoor.classList.toggle('door--margin-top-big');
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
    
      swiperWrapper.classList.add('repair-elements__list--visible');
      if(swiperVariable === undefined){
      swiperVariable = swiper();
      }
      
    }
  
    if (window.matchMedia("(min-width: 768px)and (max-width: 1980px)").matches) {
      if(swiperVariable!== undefined){
        swiperVariable.destroy(true, true);
        swiperVariable = undefined;
      }
    }
  
     
    if (window.matchMedia("(min-width: 768px)and (max-width: 1120px)").matches) {
      
      if (isOpen === 1) {
        buttonDoor.classList.add('door--margin-top-big');
        buttonDoor.classList.remove('door--margin-top-small');
      }
      else{
        swiperWrapper.classList.remove('repair-elements__list--visible');
      }
    }
  
    if (window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches) {
      if (isOpen === 1) {
        buttonDoor.classList.add('door--margin-top-small');
        buttonDoor.classList.remove('door--margin-top-big');
      }
      else{
        swiperWrapper.classList.remove('repair-elements__list--visible');
      }
    }

  });
  
}

export default Listeners;