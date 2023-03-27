// Get the element to be animated
const gameStartIntro = document.querySelector(".game-start-intro");
const gameIntroduction = document.querySelector(".introduction");
const main = document.querySelector(".main");
let ans1 = document.querySelector(".ans1");
let ans2 = document.querySelector(".ans2");
let bothAns = document.querySelectorAll(".button");
let question = document.querySelector(".question");
let message = "";


// Add a class to show the element with a fade-in animation after 5 seconds
// setTimeout(() => {
//   gameStartIntro.classList.add("show");
// }, 8000);


// After 8 seconds, add a class to hide the element with a fade-out animation
setTimeout(() => {
  gameIntroduction.classList.add("hide");
}, 8000);

// After the fade-out animation is complete, remove the element from the DOM
gameIntroduction.addEventListener("transitionend", () => {
  gameIntroduction.parentNode.removeChild(gameIntroduction);
});

function startQues(e) {
    if (e.target.classList.contains('ans1')) {
        main.innerHTML = message; // keep to reset message to empty string
    } else {
        main.innerHTML = message; // keep to reset message to empty string
    }
    question.innerText = "You are indefintely floating in space. Float towards the light or towards the darkness";
    ans1.innerText = "light"
    ans2.innerText = "dark"
    bothAns.forEach(btn => btn.removeEventListener("click", startQues));
    // document.body.style.background = `black`;
    ans1.addEventListener('click', exploreLightFunc)
    message = "";
    //ans2.addEventListener("click", darkFunc) 
}

function exploreLightFunc(e) {
    question.innerText = "you veer towards the first speck of light in the vast darkness and render unconcious, you awake in a seemingly different dimension. You find yourself in a room full of mirrors. Do you..."
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; // keep to reset message to empty string
    } else {
        main.innerHTML = message; // keep to reset message to empty string
    }
    ans1.innerText = "explore";
    ans2.innerText = "escape"
    bothAns.forEach(btn => btn.removeEventListener("click", exploreLightFunc)); // removes click event
    ans1.addEventListener("click", exploreMirrorFunc);
    message = ""; // removes messag
}

function exploreMirrorFunc(e) {
    question.innerText = "you explore the boundless reflections as you lose track of time. You don't realize you've been searching for a way out for months, you see yourself and your past through the reflections in your prior life. You barely recognize yourself in the mirrors. Do you...";
    main.innerHTML = message;
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; // keep to reset message to empty string
    } else {
        main.innerHTML = message; // keep to reset message to empty string
    }
    ans1.innerText = "break the mirror";
    ans2.innerText = "becomed filled with despair";
    bothAns.forEach(btn => btn.removeEventListener("click", exploreLightFunc));
    ans1.addEventListener("click", breakMirrorFunc);
    message = "";
}

function breakMirrorFunc(e) {
    question.innerText = "you smash through and instantly are transported back to something familiar...this looks like my childhood home"
    main.innerHTML = message;
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; // keep to reset message to empty string
    } else {
        main.innerHTML = message; // keep to reset message to empty string
    }
    ans1.innerText = "this obviously isn't real";
    ans2.innerText = "I've finally awoken from this nightmare!"
    ans1.addEventListener("click", childHomeFunc);
    message = "";
}

function childHomeFunc(e) {
    question.innerText = "you walk through your home and observe. Sinks are working, fridge is filled with food. You begin to relax. Later on, you hear a door open. Do you..."
    main.innerHTML = message;
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message;
    } else {
        main.innerHTML = message;
    }
    ans1.innerText = "see who it is!";
    ans2.innerText = "hide!";
    ans1.addEventListener("click", startQues);
    message = "";
}

bothAns.forEach(btn => btn.addEventListener("click", startQues));



