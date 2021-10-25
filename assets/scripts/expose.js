// expose.js
// testing commit

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

function init() {
  function changePicture(){
      console.log('this working');
  }

 // var airHorn = new Image();
  //airHorn.src = 'C:\\Users\\thegu\\Documents\\HW\\110\\Lab5\\Lab5_Starter\\assets\\images\\air-horn.svg';
  

  let selectElement = document.getElementById("horn-select");
  selectElement.addEventListener('change', (event) =>{
    let horn = event.target.value;
    let img = document.querySelector("img");
    let sound = document.querySelector('.hidden');
    switch(horn){
      case 'air-horn':
        img.src = "assets\\images\\air-horn.svg";
        sound.src = "assets\\audio\\air-horn.mp3"
        break;
      case 'car-horn':
        img.src = "assets\\images\\car-horn.svg";
        sound.src = "assets\\audio\\car-horn.mp3"
        break;
      case 'party-horn':
        img.src = "assets\\images\\party-horn.svg";
        sound.src = "assets\\audio\\party-horn.mp3"
        break;
      default:
        console.log("ERROR");
    }
  });

  let button = document.querySelector('button');
  button.addEventListener('click', event => {
    let sound = document.querySelector('audio');
    let img = document.querySelector("img");

    if(selectElement.value == 'party-horn'){
    jsConfetti.addConfetti({
      emojis: ['🦄'],
      emojiSize: 100,
      confettiNumber: 30,
    })
    }
    
    if(img.src == "assets\\images\\party-horn.svg") console.log("this should work");
    sound.play();
    
  })

  let volume = document.querySelector('input');
  volume.addEventListener('input', event =>{
    let img = document.querySelectorAll("img")[1];
    let sound = document.querySelector('.hidden');

    sound.volume = volume.value/100;
    if(volume.value == 0){
      img.src = 'assets\\icons\\volume-level-0.svg';
      button.disabled = true;
    }
    else if(volume.value < 33){
      img.src = 'assets\\icons\\volume-level-1.svg';
      button.disabled = false;
    }
    else if(volume.value < 67){
      img.src = 'assets\\icons\\volume-level-2.svg';
      button.disabled = false;
      
    }
    else {
      img.src = 'assets\\icons\\volume-level-3.svg';
      button.disabled = false;
    }
  });
  
  
  
}