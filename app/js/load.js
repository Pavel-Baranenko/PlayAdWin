
var links = {
  src0: "https://blog.andrewbondar.ru/plaginy-dlya-bystroj-retushi-kozhi/",
  src1: " https://www.grandline.ru/katalog/krovlya/rulonnye-materialy/krovelnaa-membrana-pvh/logicroof-v-rp/",
  src2: "https://logomaster.ai/ru/",
  src3: "https://media.s7.ru/ru/blog/uedineniye-na-altae/",
  src4: "https://hongqi-keyauto-rnd.ru/",
}
const link = document.querySelector(".link ");
let k = 1;
link.addEventListener('click', () => {
  if (k < 5) {
    document.getElementById('uploadLink').src = links['src' + k];
    k++;
  }

})
const anim = document.querySelector('.anim');

function getPosition(e) {
  var x = y = 0;

  if (!e) {
    var e = window.event;
  }

  if (e.pageX || e.pageY) {
    x = e.pageX;
    y = e.pageY;
  } else if (e.clientX || e.clientY) {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: x, y: y }
}

document.querySelector('body').click(function (e) {
  var coord = getPosition(e);

  console.log(coord.x, "-------", coord.y);
});