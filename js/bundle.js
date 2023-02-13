/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function popup(popupSelector, popupTriggerSelector, btnCloseSelector) {
    const popup = document.querySelector("." + popupSelector),
      popupTrigger = document.querySelector(popupTriggerSelector),
      btnClose = document.querySelector("." + btnCloseSelector);
  
    popupTrigger.addEventListener("submit", (e) => {
      e.preventDefault();
      popupShow();
    });
    popup.addEventListener("click", (e) => {
      if (e.target == popup) {
        popupHide();
      }
    });
    window.addEventListener("keydown", (e) => {
      if (e.code == "Escape") {
        popupHide();
      }
    });
    btnClose.addEventListener("click", popupHide);
  
    function popupShow() {
      document.body.style.overflow = "hidden";
      popup.classList.add(popupSelector + "--active");
    }
    function popupHide() {
      document.body.style.overflow = "";
      popup.classList.remove(popupSelector + "--active");
    }
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);

/***/ }),

/***/ "./src/modules/show-animation.js":
/*!***************************************!*\
  !*** ./src/modules/show-animation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function showAnimation(){
    function onEntry(entry) {
        entry.forEach((change) => {
          if (change.isIntersecting) {
            change.target.classList.add("element-show");
          }
        });
      }
      let options = { threshold: [0.1] };
      let observer = new IntersectionObserver(onEntry, options);
      let observerCounter = new IntersectionObserver(counterEntry, options);
      let elements = document.querySelectorAll(".element-animation");
      let numbers = document.querySelectorAll(".number");
    
      for (let elm of elements) {
        observer.observe(elm);
      }
      for (let num of numbers) {
        observerCounter.observe(num);
      }
      function counterEntry(entry) {
        entry.forEach((change) => {
          if (change.isIntersecting && !change.target.classList.contains("over")) {
            commonCounter();
          }
        });
      }
      function counter(num, elem, step) {
        const time = 1000;
        let l = document.querySelector(elem);
        let n = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
          n = n + step;
          if (n >= num) {
            clearInterval(interval);
          }
          l.innerHTML = n;
          l.classList.add("over");
        }, t);
      }
      function commonCounter() {
        counter(15, "#year", 1);
        counter(3, "#continents", 1);
      }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAnimation);

/***/ }),

/***/ "./src/modules/smooth-scrolling.js":
/*!*****************************************!*\
  !*** ./src/modules/smooth-scrolling.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function smoothScrolling(){
    const anchors = document.querySelectorAll(".nav__link");
    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const blockID = anchor.getAttribute("href").substr(1);
  
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);

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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/popup */ "./src/modules/popup.js");
/* harmony import */ var _modules_show_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/show-animation */ "./src/modules/show-animation.js");
/* harmony import */ var _modules_smooth_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/smooth-scrolling */ "./src/modules/smooth-scrolling.js");




window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_show_animation__WEBPACK_IMPORTED_MODULE_1__["default"])()
  ;(0,_modules_smooth_scrolling__WEBPACK_IMPORTED_MODULE_2__["default"])()
  ;(0,_modules_popup__WEBPACK_IMPORTED_MODULE_0__["default"])("popup", "form", "btn-close");
  jQuery(function ($) {
    $("#phone").mask("+7(999) 999-9999");
  });
});

// MASK 
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map