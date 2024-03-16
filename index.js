function playSound(sound) {
  var audio = new Audio(sound);
  audio.play();
}

var drums = document.querySelectorAll(".drum");
drums.forEach((drum) => {
  drum.addEventListener("click", handleClick);
  drum.addEventListener("keydown", handleKeydown);
});

function handleClick() {
  var key = this.innerHTML;
  playDrum(key);
  animate(key);
}

function handleKeydown(event) {
  var key = event.key;
  playDrum(key);
  animate(key);
}

var sounds = {
  w: "./sounds/crash.mp3",
  a: "./sounds/kick-bass.mp3",
  s: "./sounds/snare.mp3",
  d: "./sounds/tom-1.mp3",
  j: "./sounds/tom-2.mp3",
  k: "./sounds/tom-3.mp3",
  l: "./sounds/tom-4.mp3",
};

function playDrum(key) {
  var sound = sounds[key];
  if (sound) {
    playSound(sound);
  }
}

function animate(key) {
  var drumButton = document.querySelector("." + key);
  if (drumButton) {
    drumButton.classList.add("game-over", "pressed");
    setTimeout(() => {
      drumButton.classList.remove("game-over", "pressed");
    }, 100);
  }
}
