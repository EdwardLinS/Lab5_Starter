// explore.js

window.addEventListener("DOMContentLoaded", init);

/**
 * Loads all available voices and populates select element
 *
 * @param {Element} select
 * @returns Array of voices
 */
const loadVoices = (select) => {
  // stores all available voices
  const voices = speechSynthesis.getVoices();

  // populate select element
  for (let i = 0; i < voices.length; i++) {
    const voiceOption = document.createElement("option");
    voiceOption.value = i; // index in voices array
    voiceOption.textContent = voices[i].name;

    select.appendChild(voiceOption);
  }

  return voices;
};

/**
 * Speaks a message with a chosen voice
 *
 * @param {SpeechSynthesisVoice} chosenVoice
 * @param {String} message
 */
const speakMessage = (chosenVoice, message) => {
  // smiling face
  const friend = document.querySelector("img[alt='Smiling face']");

  // no message, don't speak or open mouth
  if (message === undefined) { return }

  // utterance object
  const utterance = new SpeechSynthesisUtterance(message.trim());
  utterance.voice = chosenVoice;

  speechSynthesis.speak(utterance);

  // open mouth
  utterance.addEventListener("start", () => {
    friend.src = "assets/images/smiling-open.png";
  });

  // close mouth
  utterance.addEventListener("end", () => {
    friend.src = "assets/images/smiling.png";
  });
};

function init() {
  // TODO
  const voiceSelect = document.querySelector("select[name='voice']"); // select element

  let voices = []; // stores all voices

  // loads voices when loaded
  speechSynthesis.onvoiceschanged = () => {
    voices = loadVoices(voiceSelect);
  };

  // listen for button press
  const playButton = document.querySelector("button");
  const textToSpeak = document.getElementById("text-to-speak");

  // speak if clicked
  playButton.addEventListener("click", () => {
    // speak if voice selected
    if (voiceSelect.value !== "select") {
      speakMessage(voices[voiceSelect.value], textToSpeak.value);
    }
  });
}