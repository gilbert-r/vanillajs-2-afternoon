function play(){
  let tone = document.getElementById("tone");
  tone.play();
}

window.addEventListener("keypress", function(e) {
   const tone = document.querySelector(`tone[data-key="${e.keyCode}"]`);
   if (!tone) return;
   const pianoKey = document.querySelector(`.pianoKey[data-key="${e.keyCode}"]`);
   tone.currentTime = 0;
   pianoKey.classList.add("pressed");
   tone.play();
   setTimeout(function() {
       pianoKey.classList.remove("pressed");
   }, 300);
});