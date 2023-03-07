function swiper() {
   return new Swiper(".swiper", {
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
 

 
export default swiper;