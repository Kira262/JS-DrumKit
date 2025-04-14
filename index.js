function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it's not transform
  e.target.classList.remove("playing");
}

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio) return; //stop function from running

  key.classList.add("playing"); //adds .playing class
  audio.currentTime = 0; //rewind to start ,when clicked/keypressed multiple times
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(
  (key) => key.addEventListener("transitionend", removeTransition) //call removeTransition  after keypressed
);

window.addEventListener("keydown", (e) => {
  playSound(e.keyCode);
});

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyCode = key.getAttribute("data-key");
    playSound(keyCode);
  });
});
// Preloader Thingy
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
