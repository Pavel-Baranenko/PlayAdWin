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


var swiper1 = new Swiper(".mySwiper1", {
  direction: "vertical",
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  loop: true,

});
const pageHeight = document.querySelector(".page__one").clientHeight;
const go = document.querySelector('.go');
const popup = document.querySelector('.popup');



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
let balance = 7000;
let val = 250;

document.querySelector('.views__value').innerHTML = numberWithSpaces(viewsTop);
document.querySelector('.views__value-cta').innerHTML = views.toLocaleString();
document.querySelector('.balance__value').innerHTML = balance.toLocaleString() + "₽";
const plus = document.querySelector('.plus');

plus.addEventListener('click', () => {
  if (balance > 0) {
    document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML
    views = Number(document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML) + 1000;
    document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML = views;
    balance -= val;
    viewsTop += 1000;
    document.querySelector('.views__value').innerHTML = numberWithSpaces(viewsTop);

    document.querySelector('.views__value-cta').innerHTML = numberWithSpaces(views);
    document.querySelector('.balance__value').innerHTML = numberWithSpaces(balance) + "₽";
  }

})

const Slides = document.querySelectorAll('.video-views-value');
const images = document.querySelector(".swiper-wrapper").querySelectorAll('.swiper-slide');
// console.log(images);
let rowsKol = 0
videoViews = {
}

function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
}

function videoSlides() {
  let k = 0;
  Slides.forEach((el) => {

    if (Number(el.innerHTML) > 0) {
      rowsKol += 1
      videoViews['slide' + k] = Number(el.innerHTML);
      k += 1;
    }

  });
  let kVideo = 0;
  images.forEach((el) => {

    if (Number(el.querySelector('.video-views-value').innerHTML) > 0) {
      videoViews[kVideo] = el.id;
      kVideo += 1;
    }
  });
  videoViews['rowsKol'] = rowsKol;
  if (videoViews.rowsKol == 1) {
    document.querySelector('.slot-machine').classList.add('one-reel');
    document.querySelector('.reels').classList.add('one-reel-animate');
    setTimeout(() => {
      popup.classList.add('act');
      playSound();
    }, 3800);

    setTimeout(() => {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[0].classList.add('act');
      document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item')[0].classList.add('act');
    }, 2900);
  }
  else if (videoViews.rowsKol == 2) {
    document.querySelector('.slot-machine').classList.add('two-reel');
    document.querySelector('.reels').classList.add('two-reel-animate');

    // setTimeout(() => {
    //   popup.classList.add('act');
    //   playSound();
    // }, 6500);
    setTimeout(() => {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[0].classList.add('act');
      document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item')[0].classList.add('act');
    }, 2900);
  }
  else if (videoViews.rowsKol == 3) {
    document.querySelector('.slot-machine').classList.add('three-reel');

    setTimeout(() => {
      popup.classList.add('act');
      playSound();
    }, 9500);
  }
  else if (videoViews.rowsKol == 4) {
    document.querySelector('.slot-machine').classList.add('four-reel');

    setTimeout(() => {
      popup.classList.add('act');
      playSound();
    }, 9500);
  }
  else if (videoViews.rowsKol == 5) {
    document.querySelector('.slot-machine').classList.add('five-reel');

    setTimeout(() => {
      popup.classList.add('act');
      playSound();
    }, 11500);
  }

  for (var n = 0; n < (rowsKol + 1) * 10; n++) {
    const random = Math.round(Math.random() * 10) / 10;
    document.querySelector('.third-reel > .swiper-wrapper').innerHTML += ('<div class="swiper-slide">' + random + '</div>');
  }
  for (var m = 0; m < (rowsKol + 1) * 10; m++) {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const random = getRandomIntInclusive(200, 2000)
    document.querySelector('.last-reel > .swiper-wrapper').innerHTML += ('<div class="swiper-slide">' + random + '</div>');
  }
  const reel2 = document.querySelector('.third-reel > .swiper-wrapper').querySelectorAll('.swiper-slide')[0].innerHTML;
  const reel3 = document.querySelector('.last-reel > .swiper-wrapper').querySelectorAll('.swiper-slide')[0].innerHTML;
  for (var i = 0; i < rowsKol; i++) {
    const videoPrev = document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item');
    const slideNone = document.querySelector('.first-reel > .swiper-wrapper').querySelectorAll('.swiper-slide');
    const slideNone2 = document.querySelector('.first-reel > .swiper-wrapper1').querySelectorAll('.swiper-slide');
    const videoPrevValue = document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item > span');
    if ((videoViews['slide' + i]) > 0) {
      document.querySelector('.second-reel > .swiper-wrapper').innerHTML += ('<div class="swiper-slide">' + (videoViews['slide' + i]) + '</div>');
      document.querySelector('.second-reel > .swiper-wrapper1').innerHTML += ('<div class="swiper-slide">' + (videoViews['slide' + i]) + '</div>');

      // console.log(document.getElementById(videoViews.str(i)));
      slideNone[i].style.display = "flex";
      slideNone2[i].style.display = "flex";
      videoPrev[i].style.display = "flex";
      videoPrevValue[i].innerHTML = (videoViews['slide' + i]);
      if (rowsKol == 1) {
        document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[i].innerHTML = "<span>" + ((videoViews['slide' + i]) * Number(reel2) * Number(reel3)) + "₽" + "</span>"
      }
      else if (rowsKol == 2) {
        document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[1].innerHTML = "<span>" + ((videoViews['slide' + i]) * Number(reel2) * Number(reel3)) + "₽" + "</span>"
      }

    }
    // console.log(videoViews);

    // console.log(evt[i].getAttribute('data-img'));

    // if (evt[i].getAttribute('data-img') == videoViews[i]) {
    //   slideNone[i].style.display = "flex";
    // }
    // console.log(videoViews[i]);

    // console.log(videoViews[0]);
    // console.log(slideNone[0].getAttribute('data-img'));
    for (var j = 0; j < rowsKol + 1; j++) {
      // console.log(slideNone[j].getAttribute('data-img'));
      // console.log(videoViews[i]);
      if (slideNone[j].getAttribute('data-img') == videoViews[i]) {
        console.log(slideNone[j].getAttribute('data-img'));
        console.log(videoViews[i]);
        // console.log(i);
        // console.log(j);
        console.log("YES");
      }
    }
    // for ()
    // slideNone.getAttribute(videoViews[i]) = "flex";

  }
  // for (l = 0; l < copyVideo.k; l++) {
  //   document.querySelector('.first-reel > .swiper-wrapper').appendChild(copyVideo[l]);
  //   console.log(copyVideo[l]);
  // }
  // console.log(copyVideo);
  // for (var v = 0; v < rowsKol; v++) {
  //   let countReps = 0;
  //   console.log(rowsKol);
  //   if (Number(countReps) < Number(rowsKol)) {
  //     setInterval(() => {
  //       console.log("ASDFGHJK");
  //       console.log(countReps);
  //       countReps += 1;
  //     }, 1000);
  //   }
  // }

  // setTimeout(() => {
  //   document.querySelector('.third-reel > .swiper-wrapper').style.marginTop =  ;
  // }, 1000);
  console.log(videoViews);
}

go.addEventListener('click', () => {
  videoSlides()
  if (videoViews.rowsKol > 0) {
    document.querySelector('.main').classList.add('move');
    lastVideo.pause();
  }

})


