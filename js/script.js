const gameStartIntro = document.querySelector(".game-start-intro");
const glowDudettes = document.querySelectorAll('.glowing')

// Add a class to show the element with a fade-in animation after 5 seconds
setTimeout(() => {
  gameStartIntro.classList.add("show");
  for (let i = 0; i < glowDudettes.length; i++) {
      glowDudettes[i].classList.add("show");
  }
}, 1000);

// After 8 seconds, add a class to hide the element with a fade-out animation
setTimeout(() => {
  gameStartIntro.classList.add("hide");
}, 5000);

// After the fade-out animation is complete, remove the element from the DOM
gameStartIntro.addEventListener("transitionend", () => {
  gameStartIntro.parentNode.removeChild(gameStartIntro);
});
