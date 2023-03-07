/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper.js */ "./src/swiper.js");




function Listeners(swiperVariable){
   let buttonDoor = document.querySelector(".door");
   let swiperWrapper = document.querySelector(".repair-elements__list");
let text = buttonDoor.querySelector(".text__door");
let doorIcon = buttonDoor.querySelector(".door__icon");
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
      swiperVariable = (0,_swiper_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Listeners);

/***/ }),

/***/ "./src/swiper.js":
/*!***********************!*\
  !*** ./src/swiper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
 

 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper.js */ "./src/swiper.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners.js */ "./src/eventListeners.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");




let swiperVariable = undefined;


if(window.innerWidth < 768){
  swiperVariable = (0,_swiper_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

(0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiperVariable);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map