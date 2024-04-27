const navbar = document.querySelector('.navv');


window.onscroll = function () { 
    if (window.scrollY >= 100 ) {
        console.log('fbvdjn');
        navbar.style.background = '#FDFDFD';
    } 
    else {
        navbar.style.background = 'transparent';
    }
};



const slider = document.querySelector(".items");
      const slides = document.querySelectorAll(".item");
      const button = document.querySelectorAll(".buttonn");
      const counter = document.querySelector(".counter");
        console.log(slides.length);
        let n = slides.length;
      let current = 0;
      let prev = n;
      let next = 1;

      for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () =>
          i == 0 ? gotoPrev() : gotoNext()
        );
    }
    counter.innerHTML = `${current+1}/${n}`;

      const gotoPrev = () =>
        current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

      const gotoNext = () => (current < n-1 ? gotoNum(current + 1) : gotoNum(0));

      const gotoNum = (number) => {
        current = number;
        prev = current - 1;
        next = current + 1;

        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove("current");
          slides[i].classList.remove("forward");
          slides[i].classList.remove("backward");
        }

        if (next == n) {
          next = 0;
        }

        if (prev == -1) {
          prev = n-1;
        }
        counter.innerHTML = `${current+1}/${n}`;
        slides[current].classList.add("current");
        slides[prev].classList.add("backward");
        slides[next].classList.add("forward");
      };