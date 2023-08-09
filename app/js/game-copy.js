

$(document).ready(function () {

  var tMax = 4000, // время анимации
    height = document.querySelector('.reel-holder').clientHeight,
    speeds = [],
    r = [],
    // target = 16545,
    // target = 5555,
    target = 5555,
    sTarget = target.toString(),
    numberOutput = [],
    $reels,
    start;

  function init() {
    $reels = $('.reel').each(function (i, el) {
      // el.innerHTML = reels[i].join('<div class="reel-holder"><p><p></div>')
    });
    $('.lever').click(action);
  }
  function playSound2() {
    var sound = document.getElementById("audio-slot");
    setTimeout(() => {
      sound.play();
    }, 1800);
  }
  function action() {
    if (start !== undefined) return;
    for (var i = 0, len = sTarget.length; i < len; i += 1) {
      var intOffset = (parseInt(+sTarget.charAt(i) | 0)) * height / 10 - ((height / 10) * 2);
      numberOutput[i] = intOffset >= 0 ? intOffset : (height - (height / 10));
    }
    for (var j = 0; j < 4; ++j) {
      speeds[j] = Math.random() + .7;
      r[j] = (Math.random() * 10 | 0) * height / 10;
    }
    animate();
    playSound2()
  }

  function animate(now) {
    if (!start) start = now;
    var t = now - start || 0;
    console.log(t);
    console.log(speeds[2]);
    for (var i = 0; i < 4; ++i)
      // var topPad = i * (height / 10);
      $reels[i].scrollTop = (speeds[i] / tMax / 2 * (tMax - t) * (tMax - t) * 1.5 + numberOutput[i]) % height | 0;

    if (t < tMax) {

      requestAnimationFrame(animate);
    } else {
      start = undefined;

    }
  }


  init();
});
