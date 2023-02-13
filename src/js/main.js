import popup from "../modules/popup";
import showAnimation from "../modules/show-animation";
import smoothScrolling from "../modules/smooth-scrolling";

window.addEventListener("DOMContentLoaded", () => {
  showAnimation()
  smoothScrolling()
  popup("popup", "form", "btn-close");
  jQuery(function ($) {
    $("#phone").mask("+7(999) 999-9999");
  });
});

// MASK 