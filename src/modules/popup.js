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

  export default popup