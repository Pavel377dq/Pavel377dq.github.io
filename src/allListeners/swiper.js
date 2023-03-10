function swiper(swiperClass) {
  //swiperClass строка с точкой
  return new Swiper(swiperClass, {
    // Optional parameters

    spaceBetween: 16,
    // If we need pagination
    slidesPerView: "auto",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}


export default swiper;