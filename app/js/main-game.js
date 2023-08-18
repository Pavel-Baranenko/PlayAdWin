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


let idSlides = [];
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

    const Index = document.querySelector('.swiper-slide-active').id;
    idSlides.push(Index);

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

    const Index = document.querySelector('.swiper-slide-active').id;
    const index = idSlides.indexOf(Index);
    if (index > -1) {
      idSlides.splice(index, 1);
    }
  }

})

previews = {

}

const Slides = document.querySelectorAll('.video-views-value');
const images = document.querySelector(".swiper-wrapper").querySelectorAll('.swiper-slide');
let rowsKol = 0
videoViews = {
}

function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
}
function del(arr) {
  for (i = 0; i < arr.length; i++) {

    if (document.getElementById(arr[i]).querySelector('.video-views-value').innerHTML == '0') {
      arr.splice(i, 1);
    }
  }
}
function videoSlides() {
  del(idSlides);
  let IdSlot = [...new Set(idSlides)];///Массив с id видео по порядку нажатия пользователя
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
  const FirstReel = document.querySelector('.first-reel > .swiper-wrapper');
  const FirstReelImages = document.querySelector('.first-reel > .swiper-wrapper').querySelectorAll('.swiper-slide');
  const FirstReelWrap = document.querySelector('.first-reel > .swiper-wrapper1');
  const FirstReelImagesWrap = document.querySelector('.first-reel > .swiper-wrapper1').querySelectorAll('.swiper-slide');
  const secondReelWrap = document.querySelector('.second-reel > .swiper-wrapper');
  const secondReelWrap1 = document.querySelector('.second-reel > .swiper-wrapper1');
  const Video = document.querySelector('.slot-videos');
  const videoItems = Video.querySelectorAll('.slot-videos__item');
  for (i = 0; i < IdSlot.length; i++) {
    let currentId = document.getElementById(IdSlot[i]).querySelector('.video-views-value').innerHTML;
    FirstReelImages[IdSlot[i] - 1].style.display = "flex";
    FirstReelImagesWrap[IdSlot[i] - 1].style.display = "flex";
    FirstReelImages[IdSlot[i] - 1].classList.remove('remove');
    FirstReelImagesWrap[IdSlot[i] - 1].classList.remove('remove');
    FirstReel.insertBefore(FirstReelImages[IdSlot[i] - 1], FirstReel.firstChild)
    FirstReelWrap.insertBefore(FirstReelImagesWrap[IdSlot[i] - 1], null)
    secondReelWrap.innerHTML += ('<div class="swiper-slide">' + currentId + '</div>');
    secondReelWrap1.innerHTML += ('<div class="swiper-slide">' + currentId + '</div>');
    videoItems[IdSlot[i] - 1].style.display = "flex";
    videoItems[IdSlot[i] - 1].classList.remove('remove');

    Video.insertBefore(videoItems[IdSlot[i] - 1], null)
    videoItems[IdSlot[i] - 1].querySelector('span').innerHTML = currentId;

    // const secondItems = secondReelWrap.querySelectorAll('.swiper-slide');
    // secondReelWrap.insertBefore(secondItems[IdSlot[i] - 1], secondReelWrap.firstChild);
  }

  const arr = Array.from(secondReelWrap.childNodes);
  arr.reverse();
  secondReelWrap.append(...arr);
  function removeBlock(elem) {
    elem.parentNode.removeChild(elem);
    return false;
  }
  const remove = document.querySelectorAll('.remove');
  remove.forEach(el => {
    removeBlock(el);
  })
  // const secondValue = secondReelWrap.querySelectorAll('.swiper-slide');
  // secondReelWrap.insertBefore(secondValue[1], null);



  videoViews['rowsKol'] = rowsKol;
  if (videoViews.rowsKol == 1) {
    document.querySelector('.slot-machine').classList.add('one-reel');
    setTimeout(() => {
      popup.classList.add('act');
      setTimeout(() => {
        playSound();
      }, 400);
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
    setTimeout(() => {
      popup.classList.add('act');

      setTimeout(() => {
        playSound();
      }, 400);
      document.querySelector('.dark-overlay').classList.add('visible');
    }, 30500);
  }
  else if (videoViews.rowsKol == 4) {

    setTimeout(() => {
      popup.classList.add('act');
      setTimeout(() => {
        playSound();
      }, 400);
      document.querySelector('.dark-overlay').classList.add('visible');
    }, 41500);
  }
  else if (videoViews.rowsKol == 5) {

    setTimeout(() => {
      popup.classList.add('act');
      setTimeout(() => {
        playSound();
      }, 400);
      document.querySelector('.dark-overlay').classList.add('visible');
    }, 50500);
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


  const slots = document.querySelectorAll('.slot-paid__item');
  const reelThree = document.querySelector('.third-reel > .swiper-wrapper').querySelectorAll('.swiper-slide');
  const reelLast = document.querySelector('.last-reel > .swiper-wrapper').querySelectorAll('.swiper-slide');
  for (j = 0, k = IdSlot.length - 1; j < IdSlot.length; j++, k--) {
    let val = k * 15 + 1;
    if (rowsKol == 1) {
      val = 0;
    }
    let reelValue = document.querySelectorAll('.slot-videos__item > span')[j].innerHTML;
    slots[j].innerHTML += "<span>" + Math.round(reelThree[val].innerHTML * reelLast[val].innerHTML * reelValue * 10) / 10 + "₽" + "</span>";
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
    }, 8500);
    if (rowsKol > 1) {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[1].style.width = '198px';
      setTimeout(() => {
        setTimeout(() => {
          firstReel.style.top = '-' + (rowsKol - 2) * 180 + 'px';
          secondReel.style.top = '-' + (rowsKol - 2) * 180 + 'px';
        }, 1000);
        thirdReel.style.top = '-' + (rowsKol - 2) * 2700 + 'px';
        lastReel.style.top = '-' + (rowsKol - 2) * 2700 + 'px';
      }, 9500);
      // setTimeout(() => {
      //   playSlotSound()
      // }, 15000);
      setTimeout(() => {
        document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[1].classList.add('act');
        document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item')[1].classList.add('act');
      }, 17500);
    }

    if (rowsKol > 2) {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[2].style.width = '198px';
      setTimeout(() => {

        setTimeout(() => {
          firstReel.style.top = '-' + (rowsKol - 3) * 180 + 'px';
          secondReel.style.top = '-' + (rowsKol - 3) * 180 + 'px';
        }, 1000);

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
        setTimeout(() => {
          firstReel.style.top = '-' + (rowsKol - 4) * 180 + 'px';
          secondReel.style.top = '-' + (rowsKol - 4) * 180 + 'px';
        }, 1000);

        thirdReel.style.top = '-' + (rowsKol - 4) * 2700 + 'px';
        lastReel.style.top = '-' + (rowsKol - 4) * 2700 + 'px';
      }, 28000);
      // setTimeout(() => {
      //   playSlotSound()
      // }, 33500);
      setTimeout(() => {
        document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[3].classList.add('act');
        document.querySelector('.slot-videos').querySelectorAll('.slot-videos__item')[3].classList.add('act');
      }, 36000);
    }
    if (rowsKol > 4) {
      document.querySelector('.slot-paid').querySelectorAll('.slot-paid__item')[4].style.width = '198px';
      setTimeout(() => {
        setTimeout(() => {
          firstReel.style.top = '-' + (rowsKol - 5) * 180 + 'px';
          secondReel.style.top = '-' + (rowsKol - 5) * 180 + 'px';
        }, 1000);

        thirdReel.style.top = '-' + (rowsKol - 5) * 2700 + 'px';
        lastReel.style.top = '-' + (rowsKol - 5) * 2700 + 'px';
      }, 37500);
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


