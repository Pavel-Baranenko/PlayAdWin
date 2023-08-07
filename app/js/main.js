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


// function playMusic() {
//   var music = new Audio('../audio/zvuk-nopki-v-kompyuternoy-igre1.wav');
//   music.play();
// }

// const goBtn = document.getElementById('go');
// import sound from '../audio/zvuk-nopki-v-kompyuternoy-igre1.wav'
// const goNoise = new Audio(sound);
// // goNoise.src = "../audio/zvuk-nopki-v-kompyuternoy-igre1.wav"
// goBtn.addEventListener('click', () => {
//   console.log("SDFGHJKL");
//   goNoise.play();
// })

const pageHeight = document.querySelector(".page__one").clientHeight;
const go = document.querySelector('.go');
const popup = document.querySelector('.popup');

go.addEventListener('click', () => {
  document.querySelector('.main').classList.add('move');

  setTimeout(() => {
    popup.classList.add('act');
  }, 5400);
})

// const audio = new Audio("../audio/go.mp3");
// const buttons = document.querySelectorAll(".btn");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     audio.play();
//   });
// });
