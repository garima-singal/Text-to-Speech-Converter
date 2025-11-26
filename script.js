// let speech = new SpeechSynthesisUtterance();


// let voices= [];

// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = ()=>{
//       voices = window.speechSynthesis.getVoices();
//       speech.voice=voices[0];

//       voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice,name,i)))
// };


// document.querySelector("button").addEventListener("click" , ()=>{
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// })



let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  voiceSelect.innerHTML = ""; // ✅ clear old options

  voices.forEach((voice, i) => {
    let option = new Option(
      `${voice.name} (${voice.lang})`, // ✅ text shown
      i                                // ✅ value
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
