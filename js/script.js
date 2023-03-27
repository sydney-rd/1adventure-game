// Get the element to be animated
const gameStartIntro = document.querySelector(".game-start-intro");
const gameIntroduction = document.querySelector(".introduction");
const main = document.querySelector(".main");
let ans1 = document.querySelector(".ans1");
let ans2 = document.querySelector(".ans2");
let bothAns = document.querySelectorAll(".button");
let question = document.querySelector(".question");
let message = "";

function clearButtons(func) {
    bothAns.forEach(btn => btn.removeEventListener("click", func));
}

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
    // document.body.style.background = `black`;
    clearButtons(startQues);
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
    clearButtons(exploreLightFunc);    
    ans1.addEventListener("click", exploreMirrorFunc);
    ans2.addEventListener("click", escapeMirrorFunc);
    message = ""; // removes message
}

function escapeMirrorFunc(e) {
    question.innerText = "the thought of being trapped for eternity leads you to smash through the floor, you begin falling through darkness. You begin to feel heat, but know how intense heat could be. Do you..."
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message;
    } else {
        main.innerHTML = message;
    }
    ans1.innerText = "find warmth";
    ans2.innerText = "veer towards the cold";
    clearButtons(escapeMirrorFunc);
    ans1.addEventListener("click", warmFunc);
    ans2.addEventListener("click", coldFunc);
    message = "";
}

function warmFunc(e) {
    question.innerText = "you follow and eventually find a calm, still hot spring. Do you go in?"
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message;
    } else {
        main.innerHTML = message;
    }
    ans1.innerText = "you deserve a break, go ahead and dive in";
    ans2.innerText = "throw a piece of an asteroid in first to test the waters";
    clearButtons(warmFunc);
    ans1.addEventListener("click", diveInFunc);
    // ans2.addEventListener("click", func); // add function 
    message = "";
}

function diveInFunc(e) {
    question.innerText = "you dive in and whoops, you've now entered another parallel, welcome! You now must escape the desert and its elements. After miles of exploration, you discover a plane. You understand there is someone else here."
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; 
    } else {
        main.innerHTML = message;
    }
    ans1.innerText = "hop on board";
    ans2.innerText = "keep searching the desert";
    clearButtons(diveInFunc);
    ans1.addEventListener("click", explorePlaneFunc);
    // ans2.addEventListener("click", func); // add function 
}

function explorePlaneFunc(e) {
    question.innerText = "as you are looking around the plane, you begin to have intense flashbacks. Your memory is beginning to come back of what has happened to you"
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; 
    } else {
        main.innerHTML = message;
    }
    clearButtons(explorePlaneFunc);
    ans1.innerText = "continue to recall these memories, maybe it can help you escape";
    ans1.addEventListener("click", startQues);
    message = ""
    // ans2.addEventListener("click", func); // add function 
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
    clearButtons(exploreMirrorFunc);
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
    clearButtons(breakMirrorFunc);
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
    clearButtons(childHomeFunc);
    ans1.addEventListener("click", startQues);
    message = "";
}

bothAns.forEach(btn => btn.addEventListener("click", startQues));



