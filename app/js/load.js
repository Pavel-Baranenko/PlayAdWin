var canv = document.getElementById("drawingCanvas"),
  ctx = canv.getContext('2d'),
  pic = new Image();

pic.src = '../lead-images/vinaska.com_ru_.png';
pic.onload = function () {
  let picWidth = pic.width;
  let picHeight = pic.height;

  // console.log(picWidth, "-----------", picHeight);
  canv.width = window.screen.availWidth;
  canv.height = (picHeight / (picWidth / window.screen.availWidth));
  ctx.drawImage(pic, 0, 0, window.screen.availWidth, (picHeight / (picWidth / window.screen.availWidth)));
}

var cord = [1258, 233];

let k = cord.length / 2;
console.log(k);
var menu = new Image();
menu.src = "../lead-images/menu.png";

menu.onload = function () {
  setTimeout(() => {
    ctx.drawImage(menu, cord[0], cord[1]);
  }, 3000);
}



// for (let i = 0; i < k; i++) {
//   var counter = 0;
//   function foo() {
//     if (counter < k) {
//       counter++

//       window.setTimeout(foo, 3000);
//     }
//   }

//   foo()
// }



const elem = document.querySelector('body'); // выбираем элемент, на котором будем отслеживать движение мыши

elem.addEventListener('click', function (event) {
  // добавляем обработчик события "mousemove"
  const x = event.clientX; // получаем координату X мыши
  const y = event.clientY; // получаем координату Y мыши

  console.log(`Координаты мыши: x=${x}, y=${y}`); // выводим координаты мыши в консоль
});

let x = 0;
let y = 0;
function anim() {
  if (x != cord[0]) {
    x += 2;
    y += 1
    document.getElementById("curs").style = "left:" + x + "px; top:" + y + "px";
  }

  setInterval('anim();', 50);
}