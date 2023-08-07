var button = document.querySelector('.button');

function setupSynth() {
  window.synth = new Tone.Synth({
    oscillator: {

      modulationFrequency: 0.5,
      mute: false,
      volume: -15.999999999999998,
      detune: 0,
      frequency: 440,
      partialCount: 0,
      partials: [],
      phase: 0,
      type: "square",

    },
    envelope: {
      attack: 0,
      decay: 0.2,
      sustain: 0,
      release: 0.5,
    }
  }).toMaster();
}

function boopMe() {
  if (!window.synth) {
    setupSynth();
  }

  window.synth.triggerAttackRelease(600, '9n');
}

button.addEventListener('touchstart', function (e) {
  e.stopPropagation();
  e.preventDefault();
  boopMe();
});
button.addEventListener('mousedown', boopMe);