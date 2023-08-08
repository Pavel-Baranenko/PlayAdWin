var swiper = new Swiper(".swiper", {
  slidesPerView: 1.5,
  // spaceBetween: 30,
  initialSlide: 1,
  // freeMode: true,
  centeredSlides: true,
  speed: 300,
  loop: true,
  parallax: true,
  // effect: 'coverflow',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // mousewheel: true,
  keyboard: true,
  breakpoints: {
    1500: {
      slidesPerView: 1.6,

    },
    1700: {
      slidesPerView: 1.8,
    },
    2000: {
      slidesPerView: 2,
    }
  }
});



const pageHeight = document.querySelector(".page__one").clientHeight;
const go = document.querySelector('.go');
const popup = document.querySelector('.popup');

go.addEventListener('click', () => {
  document.querySelector('.main').classList.add('move');

  setTimeout(() => {
    popup.classList.add('act');
  }, 4400);
})

// const audio = new Audio("../audio/go.mp3");
// const buttons = document.querySelectorAll(".btn");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     audio.play();
//   });
// });




// Content Value


let views = 123.560;
let balance = 7367.20;
let val = 20;
// console.log(views + 20);
document.querySelector('.views__value-cta').innerHTML = views + "0";
document.querySelector('.balance__value').innerHTML = balance + "0" + "₽";
const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
  views += val;
  balance -= val;
  document.querySelector('.views__value-cta').innerHTML = views + "0";
  document.querySelector('.balance__value').innerHTML = balance + "0" + "₽";
})