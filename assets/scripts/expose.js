// expose.js

window.addEventListener('DOMContentLoaded', init);

function updateVolumeIcon() {
  const volumeIcon = document.querySelector("img[alt='Volume level 2']"); // volume icon level

  // check volume level
  if (volumeLevel === 0) {
    volumeIcon.src = "assets/icons/volume-level-0.svg";
  } else if (volumeLevel < 33) {
    volumeIcon.src = "assets/icons/volume-level-1.svg";
  } else if (volumeLevel < 67) {
    volumeIcon.src = "assets/icons/volume-level-2.svg";
  } else {
    volumeIcon.src = "assets/icons/volume-level-3.svg";
  }
}

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select"); // horn input element
  const hornImage = document.querySelector("img[alt='No image selected']"); // horn image
  const hornAudio = document.querySelector("audio"); // horn audio

  const volumeInput = document.getElementById("volume"); // volume input
  const volumeIcon = document.querySelector("img[alt='Volume level 2']"); // volume icon level
  let volumeLevel = volumeInput.value; // current volume level

  const playButton = document.querySelector("button"); // play button

  const jsConfetti = new JSConfetti();

  // on horn selection change
  hornSelect.addEventListener("change", (e) => {
    hornImage.src = `assets/images/${e.target.value}.svg`;
    hornAudio.src = `assets/audio/${e.target.value}.mp3`;
  });

  // on volume change
  volumeInput.addEventListener("change", (e) => {
    // update volume
    volumeLevel = Number(e.target.value);

    // check volume level
    if (volumeLevel === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volumeLevel < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volumeLevel < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  // on button click
  playButton.addEventListener("click", () => {
    
    // has horn selected
    if (hornSelect.value !== "select") {

      // confetti if party horn
      if (hornSelect.value === "party-horn") {
        jsConfetti.addConfetti();
      }

      hornAudio.volume = volumeLevel / 100;
      hornAudio.play();
    }
  });
}