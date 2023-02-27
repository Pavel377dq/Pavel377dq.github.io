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



var swiper = function(slidesInSight){
  console.log(slidesInSight);
  return new Swiper('.swiper', {
   // Optional parameters
  
    
   spaceBetween: 16,
   // If we need pagination
   
   slidesPerView: slidesInSight,
   pagination: {
     el: '.swiper-pagination',
     clickable: true
   },
 
 });
}

if (window.matchMedia("(min-width:0 ) and (max-width: 360px)").matches) {
  swiperVariable = swiper(1.3);
}
if (window.matchMedia("(min-width:361px) and (max-width: 420px)").matches){
  swiperVariable = swiper(1.7);
}
if(window.matchMedia("(min-width:421px ) and (max-width: 500px)").matches){
  swiperVariable = swiper(2.1);

}
if(window.matchMedia("(min-width:501px ) and (max-width: 768px)").matches){
  swiperVariable = swiper(2.5);

}


window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width:0 ) and (max-width: 768px)").matches) {

 
    buttonDoor.style = "margin-top: 0;"
    isOpen = 0;
    

    swiperWrapper[0].style = "overflow: visible";
    
     
    
        
        
  if (window.matchMedia("(min-width:0 ) and (max-width: 360px)").matches) {
    swiperVariable = swiper(1.3);
  }
  else if (window.matchMedia("(min-width:361px) and (max-width: 420px)").matches){
    swiperVariable = swiper(1.7);
  }
  else if(window.matchMedia("(min-width:421px ) and (max-width: 500px)").matches){
    swiperVariable = swiper(2.1);

  }
  else if(window.matchMedia("(min-width:501px ) and (max-width: 768px)").matches){
    swiperVariable = swiper(2.5);

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

