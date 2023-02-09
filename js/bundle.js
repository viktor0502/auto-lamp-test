/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
window.addEventListener("DOMContentLoaded", () => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".element-animation");

  for (let elm of elements) {
    observer.observe(elm);
  }
});

const popup = document.querySelector(".popup"),
  popupTrigger = document.querySelector("form"),
  btnClose = document.querySelector(".btn-close");
  

popupTrigger.addEventListener("submit", e=>{
    e.preventDefault()
    popupShow()
});
popup.addEventListener('click', e=>{
    if(e.target == popup){
        popupHide()
    }
})
window.addEventListener('keydown', e=>{
    if(e.code == 'Escape'){
        popupHide()
    }
})
btnClose.addEventListener('click', popupHide)

function popupShow(){
    document.body.style.overflow = 'hidden'
    popup.classList.add('popup--active')
}
function popupHide(){
    document.body.style.overflow = ''
    popup.classList.remove('popup--active')
}



// MASK
jQuery(function($){
  $("#phone").mask("+7(999) 999-9999");
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map