import form from "../modules/form";
import showAnimation from "../modules/show-animation";
import smoothScrolling from "../modules/smooth-scrolling";
import popup from "../modules/popup";
window.addEventListener("DOMContentLoaded", () => {
  form();
  showAnimation();
  smoothScrolling();
  popup("popup", "form", "btn-close");
  jQuery(function ($) {
    $("#phone").mask("+7(999) 999-9999");
  });
});
// MASK
