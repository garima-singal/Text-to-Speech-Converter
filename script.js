
let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  voiceSelect.innerHTML = ""; 

  voices.forEach((voice, i) => {
    let option = new Option(
      `${voice.name} (${voice.lang})`,
      i                                
    );
    voiceSelect.appendChild(option);
  });

  // default voice
  speech.voice = voices[0];
};

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;

  let selectedIndex = voiceSelect.value;
  speech.voice = voices[selectedIndex]; // ✅ selected voice

  window.speechSynthesis.speak(speech);
});
