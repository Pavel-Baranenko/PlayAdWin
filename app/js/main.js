var swiper = new Swiper(".swiper", {
  slidesPerView: 1.5,
  spaceBetween: 80,
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

const audio = new Audio("../audio/btn.mp3");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});



function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let viewsTop = 1176560;
let views = 123.560;
let balance = 7367.20;
let val = 20;

document.querySelector('.views__value').innerHTML = numberWithSpaces(viewsTop);
document.querySelector('.views__value-cta').innerHTML = views.toLocaleString() + "0";
document.querySelector('.balance__value').innerHTML = balance.toLocaleString() + "0" + "₽";
const plus = document.querySelector('.plus');

plus.addEventListener('click', () => {
  views += val;
  balance -= val;
  viewsTop -= val;
  document.querySelector('.views__value').innerHTML = numberWithSpaces(viewsTop);

  document.querySelector('.views__value-cta').innerHTML = views.toLocaleString() + "0";
  document.querySelector('.balance__value').innerHTML = numberWithSpaces(balance) + "0" + "₽";
})

const nextVideo = document.querySelector('.swiper-button-next');
const prevVideo = document.querySelector('.swiper-button-prev');
let lastVideo = document.querySelector(".swiper-slide-active").querySelector('video');

document.querySelector(".swiper-slide-active").querySelector('video').play();
nextVideo.addEventListener('click', () => {

  document.querySelector(".swiper-slide-active").classList.add("active-video");

  if (lastVideo) {
    lastVideo.pause();
  }

  lastVideo = document.querySelector(".swiper-slide-active").querySelector('video');
  lastVideo.play();

  // document.querySelector(".swiper-slide-active").querySelector('video').play();
})