// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  var synth = window.speechSynthesis;

  var inputForm = document.querySelector('form');
  var inputTxt = document.querySelector('.txt');
  var voiceSelect = document.querySelector('select');
  let img = document.querySelector('img');

  var voices = [];


  setTimeout(() => {
      getVoice();
      sayIt();
      
  }, 1000);
  setInterval(function(){if(synth.paused) img.src = 'assets\\images\\smiling.png';}, 30);


  function getVoice(){
    voices = synth.getVoices();

    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }


  function sayIt(){
    let voiceSelected = document.getElementById('voice-select');
    let text = document.getElementById('text-to-speak');
    

    let talkButton = document.querySelector('button');
    talkButton.addEventListener('click', function(){
    //console.log(text.value);
      let utter = new SpeechSynthesisUtterance(text.value);
      let selectedVoice = voiceSelected.value;

      for(let i = 0; i < voices.length; ++i){
        let data = (voices[i].name + ' (' + voices[i].lang + ')');
        let match = selectedVoice;
        if(data == match){
          utter.voice = voices[i];
        }
      }
      img.src = 'assets\\images\\smiling-open.png'
      synth.speak(utter);
      utter.onend = function(event){
        img.src = 'assets\\images\\smiling.png';
      }
    });

  }
  


 
  
}