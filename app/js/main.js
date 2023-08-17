var swiper = new Swiper(".swiper", {
  slidesPerView: 1.5,
  spaceBetween: 80,
  // initialSlide: 1,
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
const minus = document.querySelector('.minus');

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
minus.addEventListener('click', () => {
  if (views > 0) {
    document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML
    views = Number(document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML) - 1000;
    document.querySelector('.swiper-slide-active').querySelector('.video-views-value').innerHTML = views;
    balance += val;
    viewsTop -= 1000;
    document.querySelector('.views__value').innerHTML = numberWithSpaces(viewsTop);

    document.querySelector('.views__value-cta').innerHTML = numberWithSpaces(views);
    document.querySelector('.balance__value').innerHTML = numberWithSpaces(balance) + "₽";
  }

})

const Slides = document.querySelectorAll('.video-views-value');
const images = document.querySelector(".swiper-wrapper").querySelectorAll('.swiper-slide');
let rowsKol = 0
videoViews = {
}
videoPrevews = {
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
      videoViews["img" + kVideo] = el.id;
      kVideo += 1;
    }
  });
  const slideNone = document.querySelector('.first-reel > .swiper-wrapper').querySelectorAll('.swiper-slide');
  const slideNone2 = document.querySelector('.first-reel > .swiper-wrapper1').querySelectorAll('.swiper-slide');
  const videoPrevValue = document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item > span');

  for (t = 0; t < rowsKol; t++) {
    const indexVideo = "img" + String(t);
    document.getElementById(Number(videoViews[(indexVideo)]) + 5).style.display = "flex";
    document.getElementById(Number(videoViews[(indexVideo)]) + 5).classList.remove('remove');
    slideNone[Number(videoViews[(indexVideo)]) - 1].style.display = "flex";
    slideNone2[Number(videoViews[(indexVideo)]) - 1].style.display = "flex";
    videoPrevValue[Number(videoViews[(indexVideo)]) - 1].innerHTML = videoViews['slide' + t];
  }

  function removeBlock(elem) {
    elem.parentNode.removeChild(elem);
    return false;
  }
  const remove = document.querySelectorAll('.remove');
  remove.forEach(el => {
    removeBlock(el);
  })
  const parent = document.querySelector('.first-reel > .swiper-wrapper');
  const parent1 = document.querySelector('.first-reel > .swiper-wrapper1');
  const last1 = document.querySelector('.first-reel > .swiper-wrapper1').querySelectorAll('.swiper-slide');
  const arr = Array.from(parent.childNodes);
  arr.reverse();
  parent.append(...arr);



  videoViews['rowsKol'] = rowsKol;
  if (videoViews.rowsKol == 1) {
    document.querySelector('.slot-machine').classList.add('one-reel');
    setTimeout(() => {
      popup.classList.add('act');
      playSound();
      document.querySelector('.dark-overlay').classList.add('visible');
    }, 14000);

  }
  else if (videoViews.rowsKol == 2) {
    document.querySelector('.slot-machine').classList.add('two-reel');
    setTimeout(() => {
      popup.classList.add('act');
      playSound();
      document.querySelector('.dark-overlay').classList.add('visible');
    }, 21500);
  }
  else if (videoViews.rowsKol == 3) {
    // setTimeout(() => {
    //   popup.classList.add('act');
    //   playSound();
    //   document.querySelector('.dark-overlay').classList.add('visible');
    // }, 30500);
  }
  else if (videoViews.rowsKol == 4) {

    // setTimeout(() => {
    //   popup.classList.add('act');
    //   playSound();
    //   document.querySelector('.dark-overlay').classList.add('visible');
    // }, 41500);
  }
  else if (videoViews.rowsKol == 5) {

    // setTimeout(() => {
    //   popup.classList.add('act');
    //   playSound();
    //   document.querySelector('.dark-overlay').classList.add('visible');
    // }, 50500);
  }

  for (var n = 0; n < (rowsKol + 1) * 15; n++) {
    const random = Math.round(Math.random() * 10) / 10;
    document.querySelector('.third-reel > .swiper-wrapper').innerHTML += ('<div class="swiper-slide">' + random + '</div>');
  }
  for (var m = 0; m < (rowsKol + 1) * 15; m++) {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const random = getRandomIntInclusive(200, 2000)
    document.querySelector('.last-reel > .swiper-wrapper').innerHTML += ('<div class="swiper-slide">' + random + '</div>');
  }

  const reel2 = document.querySelector('.third-reel > .swiper-wrapper').querySelectorAll('.swiper-slide');
  const reel3 = document.querySelector('.last-reel > .swiper-wrapper').querySelectorAll('.swiper-slide');
  const slotPaidVulues = document.querySelectorAll('.slot-paid__item');
  for (var i = 0; i < rowsKol; i++) {
    document.querySelector('.second-reel > .swiper-wrapper').innerHTML += ('<div class="swiper-slide">' + (videoViews['slide' + i]) + '</div>');
    document.querySelector('.second-reel > .swiper-wrapper1').innerHTML += ('<div class="swiper-slide">' + (videoViews['slide' + i]) + '</div>');
  }
  const Paid = document.querySelectorAll('.slot-paid__item > span');
  let maxPaid = 0;
  let average = 0;
  Paid.forEach(el => {
    maxPaid += Number(el.innerHTML.substring(0, el.innerHTML.length - 1));
  })
  average = maxPaid / rowsKol;

  document.querySelector('.popup__paid').innerHTML = maxPaid + "₽";

  document.querySelector('.popup__paid-value').innerHTML = Math.round(average * 10) / 10 + "₽";


  const parent2 = document.querySelector('.second-reel > .swiper-wrapper');
  const parent3 = document.querySelector('.second-reel > .swiper-wrapper1');
  const arr2 = Array.from(parent2.childNodes);
  const last = document.querySelector('.second-reel > .swiper-wrapper').querySelectorAll('.swiper-slide');
  const last2 = document.querySelector('.second-reel > .swiper-wrapper1').querySelectorAll('.swiper-slide');


  if (rowsKol > 2) {
    arr2.reverse();
    parent2.append(...arr2);
    parent2.insertBefore(last[0], parent2.firstChild)
    // parent3.insertBefore(last[0], null)
    parent1.insertBefore(last1[1], null)
  }
  if (rowsKol > 3) {

    parent2.insertBefore(last[0], parent2.firstChild)
    parent2.insertBefore(last[1], parent2.firstChild)
    parent3.insertBefore(last2[0], null)
  }
  if (rowsKol > 4) {
    parent2.insertBefore(last[2], parent2.firstChild)
    parent3.insertBefore(last2[1], null)
  }
  for (var i = 0; i < rowsKol; i++) {

    if ((videoViews['slide' + i]) > 0) {
      if (rowsKol == 1) {
        slotPaidVulues[0].innerHTML = "<span>" + ((videoViews['slide' + i]) * Number(reel2[0].innerHTML) * Number(reel3[0].innerHTML)) + "₽" + "</span>"
      }
      else if (rowsKol == 2) {
        slotPaidVulues[0].innerHTML = "<span>" + ((videoViews['slide' + (i - 1)]) * Number(reel2[16].innerHTML) * Number(reel3[16].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[1].innerHTML = "<span>" + ((videoViews['slide' + i]) * Number(reel2[1].innerHTML) * Number(reel3[1].innerHTML)) + "₽" + "</span>"
      }
      else if (rowsKol == 3) {
        slotPaidVulues[0].innerHTML = "<span>" + ((videoViews['slide' + (i - 2)]) * Number(reel2[31].innerHTML) * Number(reel3[31].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[1].innerHTML = "<span>" + ((videoViews['slide' + (i - 1)]) * Number(reel2[16].innerHTML) * Number(reel3[16].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[2].innerHTML = "<span>" + ((videoViews['slide' + (i)]) * Number(reel2[1].innerHTML) * Number(reel3[1].innerHTML)) + "₽" + "</span>"
      }
      else if (rowsKol == 4) {
        slotPaidVulues[0].innerHTML = "<span>" + ((videoViews['slide' + 1]) * Number(reel2[46].innerHTML) * Number(reel3[46].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[1].innerHTML = "<span>" + ((videoViews['slide' + 2]) * Number(reel2[31].innerHTML) * Number(reel3[31].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[2].innerHTML = "<span>" + ((videoViews['slide' + 3]) * Number(reel2[16].innerHTML) * Number(reel3[16].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[3].innerHTML = "<span>" + ((videoViews['slide' + 0]) * Number(reel2[1].innerHTML) * Number(reel3[1].innerHTML)) + "₽" + "</span>"
      }
      else if (rowsKol == 5) {
        slotPaidVulues[0].innerHTML = "<span>" + ((videoViews['slide' + 2]) * Number(reel2[61].innerHTML) * Number(reel3[61].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[1].innerHTML = "<span>" + ((videoViews['slide' + 3]) * Number(reel2[46].innerHTML) * Number(reel3[46].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[2].innerHTML = "<span>" + ((videoViews['slide' + 4]) * Number(reel2[31].innerHTML) * Number(reel3[31].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[3].innerHTML = "<span>" + ((videoViews['slide' + 0]) * Number(reel2[16].innerHTML) * Number(reel3[16].innerHTML)) + "₽" + "</span>"
        slotPaidVulues[4].innerHTML = "<span>" + ((videoViews['slide' + 1]) * Number(reel2[1].innerHTML) * Number(reel3[1].innerHTML)) + "₽" + "</span>"
      }
    }
  }
  function animate() {
    const firstReel = document.querySelector('.first-reel');
    const secondReel = document.querySelector('.second-reel');
    const thirdReel = document.querySelector('.third-reel');
    const lastReel = document.querySelector('.last-reel');
    firstReel.style.top = '-' + (rowsKol - 1) * 180 + 'px';
    secondReel.style.top = '-' + (rowsKol - 1) * 180 + 'px';
    thirdReel.style.top = '-' + (rowsKol) * 2700 + 'px';
    lastReel.style.top = '-' + (rowsKol) * 2700 + 'px';
    function playSlotSound() {
      var sound = document.getElementById("audioslot");
      sound.play();
    }
    document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[0].style.width = '198px';
    setTimeout(() => {
      thirdReel.style.top = '-' + (rowsKol - 1) * 2700 + 'px';
      lastReel.style.top = '-' + (rowsKol - 1) * 2700 + 'px';
    }, 100);
    // setTimeout(() => {
    //   playSlotSound()
    // }, 5700);
    setTimeout(() => {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[0].classList.add('act');
      document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item')[0].classList.add('act');
    }, 9000);
    if (rowsKol > 1) {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[1].style.width = '198px';
      setTimeout(() => {
        firstReel.style.top = '-' + (rowsKol - 2) * 180 + 'px';
        secondReel.style.top = '-' + (rowsKol - 2) * 180 + 'px';
        thirdReel.style.top = '-' + (rowsKol - 2) * 2700 + 'px';
        lastReel.style.top = '-' + (rowsKol - 2) * 2700 + 'px';
      }, 9500);
      // setTimeout(() => {
      //   playSlotSound()
      // }, 15000);
      setTimeout(() => {
        document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[1].classList.add('act');
        document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item')[1].classList.add('act');
      }, 18000);
    }

    if (rowsKol > 2) {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[2].style.width = '198px';
      setTimeout(() => {


        firstReel.style.top = '-' + (rowsKol - 3) * 180 + 'px';
        secondReel.style.top = '-' + (rowsKol - 3) * 180 + 'px';
        thirdReel.style.top = '-' + (rowsKol - 3) * 2700 + 'px';
        lastReel.style.top = '-' + (rowsKol - 3) * 2700 + 'px';


      }, 18500);
      // setTimeout(() => {
      //   playSlotSound()
      // }, 24000);
      setTimeout(() => {
        document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[2].classList.add('act');
        document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item')[2].classList.add('act');
      }, 25500);
    }
    if (rowsKol > 3) {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[3].style.width = '198px';
      setTimeout(() => {
        firstReel.style.top = '-' + (rowsKol - 4) * 180 + 'px';
        secondReel.style.top = '-' + (rowsKol - 4) * 180 + 'px';
        thirdReel.style.top = '-' + (rowsKol - 4) * 2700 + 'px';
        lastReel.style.top = '-' + (rowsKol - 4) * 2700 + 'px';
      }, 28000);
      // setTimeout(() => {
      //   playSlotSound()
      // }, 33500);
      setTimeout(() => {
        document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[3].classList.add('act');
        document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item')[3].classList.add('act');
      }, 36500);
    }
    if (rowsKol > 4) {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[4].style.width = '198px';
      setTimeout(() => {
        firstReel.style.top = '-' + (rowsKol - 5) * 180 + 'px';
        secondReel.style.top = '-' + (rowsKol - 5) * 180 + 'px';
        thirdReel.style.top = '-' + (rowsKol - 5) * 2700 + 'px';
        lastReel.style.top = '-' + (rowsKol - 5) * 2700 + 'px';
      }, 36500);
      // setTimeout(() => {
      //   playSlotSound()
      // }, 42000);
      setTimeout(() => {
        document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[4].classList.add('act');
        document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item')[4].classList.add('act');
      }, 45500);
    }
  }
  animate()
  console.log(videoViews);
}
document.querySelector('.dark-overlay').style.height = document.documentElement.scrollHeight + 100 + "px";
go.addEventListener('click', () => {
  videoSlides()
  if (videoViews.rowsKol > 0) {
    document.querySelector('.main').classList.add('move');
    document.querySelector('.page__one').style.marginTop = '-' + (document.querySelector('.page__one').clientHeight + 200 + 'px');
    lastVideo.pause();
  }

})


