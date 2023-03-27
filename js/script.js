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
    document.body.style.background = "";
}

// After the fade-out animation is complete, remove the element from the DOM
gameIntroduction.addEventListener("transitionend", () => {
  gameIntroduction.parentNode.removeChild(gameIntroduction);
});

function startQues(e) {
    clearButtons(startQues);
    message = "";
    if (e.target.classList.contains('ans1')) {
        main.innerHTML = message; // keep to reset message to empty string
    } else {
        main.innerHTML = message; // keep to reset message to empty string
    }
    question.innerText = "You are indefintely floating in space. Float towards the light or towards the darkness";
    ans1.innerText = "light"
    ans2.innerText = "dark"
    document.body.style.background = "url('https://www.spitzer.caltech.edu/system/articles/images/618/medium/hubble_waterworlds_stsci-01ggtf6gyh3pbetsdy77g7tvvy.png?1671131838')";
    document.body.style.backgroundSize = `cover`;
    ans1.addEventListener('click', exploreLightFunc)
    message = "";
    //ans2.addEventListener("click", darkFunc) 
}

function exploreLightFunc(e) {
    clearButtons(exploreLightFunc);    
    question.innerText = "you veer towards the first speck of light in the vast darkness and render unconcious, you awake in a seemingly different dimension. You find yourself in a room full of mirrors. Do you..."
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; // keep to reset message to empty string
    } else {
        main.innerHTML = message; // keep to reset message to empty string
    }
    ans1.innerText = "explore";
    ans2.innerText = "escape"
    document.body.style.background = "url('https://imgprd19.hobbylobby.com/9/02/68/902685335f4d58a40c9d73c1799f6bf5fb0ecf06/1400Wx1400H-1970565-0621-px.jpg')";
    document.body.style.backgroundSize = "50px 50px";
    ans1.addEventListener("click", exploreMirrorFunc);
    ans2.addEventListener("click", escapeMirrorFunc);
    message = ""; // removes message
}

function escapeMirrorFunc(e) {
    clearButtons(escapeMirrorFunc);
    question.innerText = "the thought of being trapped for eternity leads you to smash through the floor, you begin falling through darkness. You begin to feel heat, but know how intense heat could be. Do you..."
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message;
    } else {
        main.innerHTML = message;
    }
    document.body.style.background = "url('https://media0.giphy.com/media/YOwbELhOUH990gMU1Y/giphy.gif')";
    document.body.style.backgroundSize = "cover";
    ans1.innerText = "find warmth";
    ans2.innerText = "veer towards the cold";
    ans1.addEventListener("click", warmFunc);
    ans2.addEventListener("click", coldFunc);
    message = "";
}

function warmFunc(e) {
    clearButtons(warmFunc);
    question.innerText = "you follow and eventually find a calm, still hot spring. Do you go in?"
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message;
    } else {
        main.innerHTML = message;
    }
    document.body.style.background = "url('https://thumbs.gfycat.com/SpottedAcceptableImperialeagle-size_restricted.gif')"
    document.body.style.backgroundSize = "cover"; 
    ans1.innerText = "you deserve a break, go ahead and dive in";
    ans2.innerText = "throw a piece of an asteroid in first to test the waters";
    ans1.addEventListener("click", diveInFunc);
    // ans2.addEventListener("click", func); // add function 
    message = "";
}

function diveInFunc(e) {
    clearButtons(diveInFunc);
    question.innerText = "you dive in and whoops, you've now entered another parallel, welcome! You now must escape the desert and its elements. After miles of exploration, you discover a plane. You understand there is someone else here."
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; 
    } else {
        main.innerHTML = message;
    }
    document.body.style.background = "url('https://spacecoastdaily.com/wp-content/uploads/2018/06/Mars-Curiosity-Rover-580-8.gif')";
    document.body.style.backgroundSize = "cover";
    
    ans1.innerText = "hop on board";
    ans2.innerText = "keep searching the desert";
    ans1.addEventListener("click", explorePlaneFunc);
    // ans2.addEventListener("click", func); // add function 
}

function explorePlaneFunc(e) {
    clearButtons(explorePlaneFunc);
    question.innerText = "as you are looking around the plane, you begin to have intense flashbacks. Your memory is beginning to come back of what has happened to you"
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; 
    } else {
        main.innerHTML = message;
    }
    ans1.innerText = "continue to recall these memories, maybe it can help you escape";
    // display msg of why they are going back to sq one?
    ans1.addEventListener("click", startQues);
    message = ""
    // ans2.addEventListener("click", func); // add function 
}


function exploreMirrorFunc(e) {
    clearButtons(exploreMirrorFunc);
    question.innerText = "you explore the boundless reflections as you lose track of time. You don't realize you've been searching for a way out for months, you see yourself and your past through the reflections in your prior life. You barely recognize your surroundings. Do you...";
    main.innerHTML = message;
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; // keep to reset message to empty string
    } else {
        main.innerHTML = message; // keep to reset message to empty string
    }
    document.body.style.background = "url('https://64.media.tumblr.com/f0712dbbacefa3c574fc4631ce60dae0/05c6db02f7a6a5ed-6b/s640x960/40581ba644beb13aea4bda20282f9da0178be8e7.gif')";
    document.body.style.backgroundSize = "cover"

    ans1.innerText = "break the mirror";
    ans2.innerText = "becomed filled with despair";
    ans1.addEventListener("click", breakMirrorFunc);
    message = "";
}

function breakMirrorFunc(e) {
    clearButtons(breakMirrorFunc);
    question.innerText = "you smash through and instantly are transported back to something familiar...my childhood home"
    main.innerHTML = message;
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message; // keep to reset message to empty string
    } else {
        main.innerHTML = message; // keep to reset message to empty string
    }
    document.body.style.background = "url('')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat"
    ans1.innerText = "this obviously isn't real";
    ans2.innerText = "I've finally awoken from this nightmare!"
    ans1.addEventListener("click", childHomeFunc);
    message = "";
}

function childHomeFunc(e) {
    clearButtons(childHomeFunc);
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
    // display msg of why they are going back to sq one?
    ans2.addEventListener("click", hideFunc);
    message = "";
}

function hideFunc(e) {
    clearButtons(hideFunc);
    question.innerText = "you hide underneath the coffee table as you observe a familiar pair of legs. You stay quiet as they plop onto the couch and turn the TV on. Your eyes scan up, you can't believe what you see"
    main.innerHTML = message;
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message;
    } else {
        main.innerHTML = message;
    }
    ans1.innerText = "yell out"
    ans2.innerText = "keep quiet!"
    ans1.addEventListener("click", yellOutFunc);
    ans2.addEventListener("click", keepQuietFunc);
    message = ""
}

function yellOutFunc(e) { //FINISH 
    clearButtons(yellOutFunc);
    question.innerText = "you yell out to your child self but there is no response. You go to grab yourself and you go right through. You are unseen. You think of other ways to get some attention."
    main.innerHTML = message;
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message;
    } else {
        main.innerHTML = message;
    }
    ans1.innerText = ""
}

function keepQuietFunc(e) {
    clearButtons(keepQuietFunc);
    question.innerText = "You decide to keep quiet and wait it out till you can continue to explore the house. Soon after, you venture outdoors into your backyard. "
    main.innerHTML = message;
    if (e.target.classList.contains("ans1")) {
        main.innerHTML = message;
    } else {
        main.innerHTML = message;
    }
    ans1.innerText = "dive into the pool"
    ans2.innerText = "jump on the trampoline"
    ans1.addEventListener("click", poolFunc);
    ans2.addEventListener("click", );
    // would like to include msg of why you jumped on trampoline brought u back to sq one
    message = "";
}


bothAns.forEach(btn => btn.addEventListener("click", startQues));



