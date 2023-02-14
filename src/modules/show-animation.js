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
        const time = 500;
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

export default showAnimation