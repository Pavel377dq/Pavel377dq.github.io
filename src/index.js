import swiper from "./swiper.js";
import Listeners from "./eventListeners.js";
import "./styles.scss"

let swiperVariable = undefined;


if(window.innerWidth < 768){
  swiperVariable = swiper();
}

Listeners(swiperVariable);
