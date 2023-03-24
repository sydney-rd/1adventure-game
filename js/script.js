// Get the element to be animated
const gameStartIntro = document.querySelector(".game-start-intro");
const gameIntroduction = document.querySelector(".introduction");
// Add a class to show the element with a fade-in animation after 5 seconds
setTimeout(() => {
  gameStartIntro.classList.add("show");
}, 8000);


// After 8 seconds, add a class to hide the element with a fade-out animation
setTimeout(() => {
  gameIntroduction.classList.add("hide");
}, 8000);

// After the fade-out animation is complete, remove the element from the DOM
gameIntroduction.addEventListener("transitionend", () => {
  gameIntroduction.parentNode.removeChild(gameIntroduction);
});
