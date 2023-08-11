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

function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
}


go.addEventListener('click', () => {
  document.querySelector('.main').classList.add('move');
  lastVideo.pause();
  setTimeout(() => {
    popup.classList.add('act');
    playSound();
  }, 4400);
})





// var vieValue = {
//   slide1: 0,
//   slide2: 0,
//   slide3: 0,
//   slide4: 0,
// };


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
  lastVideo.querySelector('.video-views-value');
  const value = document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML;
  views = Number(value);
  document.querySelector('.views__value-cta').innerHTML = numberWithSpaces(views);

})
prevVideo.addEventListener('click', () => {

  document.querySelector(".swiper-slide-active").classList.add("active-video");

  if (lastVideo) {
    lastVideo.pause();
  }

  lastVideo = document.querySelector(".swiper-slide-active").querySelector('video');
  lastVideo.play();
  const value = document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML;
  views = Number(value);
  document.querySelector('.views__value-cta').innerHTML = numberWithSpaces(views);
})

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let viewsTop = 0;
let views = 0;
let balance = 70000;
let val = 250;

document.querySelector('.views__value').innerHTML = numberWithSpaces(viewsTop);
document.querySelector('.views__value-cta').innerHTML = views.toLocaleString();
document.querySelector('.balance__value').innerHTML = balance.toLocaleString() + "0" + "₽";
const plus = document.querySelector('.plus');

plus.addEventListener('click', () => {
  // value
  document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML
  views = Number(document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML) + 1000;
  document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML = views;
  balance -= val;
  viewsTop += 1000;
  document.querySelector('.views__value').innerHTML = numberWithSpaces(viewsTop);

  document.querySelector('.views__value-cta').innerHTML = numberWithSpaces(views);
  document.querySelector('.balance__value').innerHTML = numberWithSpaces(balance) + "0" + "₽";
})