function swiper(swiperClass) {
  return new Swiper(swiperClass, {
    spaceBetween: 16,

    slidesPerView: "auto",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}


export default swiper;