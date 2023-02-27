var changingMenu = document.querySelector('.swiper-wrapper');
var buttonDoor = document.querySelector('.door');
var swiperWrapper = document.getElementsByClassName('swiper-wrapper');
var swiperVariable ;
var isOpen= 0;


  buttonDoor.addEventListener('click', function(evt){

    evt.preventDefault();

    if(isOpen === 0){

      swiperWrapper[0].style = "overflow: visible";
      isOpen= 1;
      if (window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches) {
         buttonDoor.style = "margin-top: 100px;"
      }
      else {
        buttonDoor.style = "margin-top: 150px;"
      }

    }
    else{
      console.log(swiperWrapper[0].style);
      console.log('hidden');
      swiperWrapper[0].style = "overflow: hidden";
      buttonDoor.style = "margin-top: 0;"
      isOpen= 0;
    }

  });



var swiper = function(){
  
  return new Swiper('.swiper', {
   // Optional parameters
  
    
   spaceBetween: 16,
   // If we need pagination
   
   
   pagination: {
     el: '.swiper-pagination',
     clickable: true
   },

   breakpoints: {
    320:{
      slidesPerView:1,
    },
    450:{
      slidesPerView:1.7,
    },
    550:{
      slidesPerView:2.1,
    },
    700:{
      slidesPerView:2.4,
    },

   },

 
 });
};


swiperVariable = swiper();

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width:0 ) and (max-width: 768px)").matches) {

 
    buttonDoor.style = "margin-top: 0;"
    isOpen = 0;
    

    swiperWrapper[0].style = "overflow: visible";
    
    if(swiperVariable ===undefined){
      swiperVariable = swiper();
    }
      
  } 
});

 window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 768px)and (max-width: 1980px)").matches) {
     
        if(swiperVariable!==undefined){
            console.log("good good")
            swiperVariable.destroy(true, true);
            swiperVariable = undefined;
        }
        
   
        
 
      
    } 
});

