let button1 = document.getElementById("ans1");
let button2 = document.querySelector("#ans2");
let screen_id = 1;

// data structure
class Screen {
  constructor(title, text, url, a1, a2, bgSize) {
    this.title = title;
    this.imgurl = url;
    this.text = text;
    this.ans1 = a1;
    this.ans2 = a2;
    this.backgroundSize = bgSize;
  }
}

class Answer {
  constructor(text, screen_id) {
    this.text = text;
    this.screen_id = screen_id;
  }
}

const tree = {
  1: new Screen(
    "escape the labyrinth",
    "you can no longer escape",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/starterIMG.gif",
    new Answer("cancel", 1),
    new Answer("start", 2),
    "cover"
  ),
  2: new Screen(
    "LEVEL 1",
    "you find yourself walking towards a new city after a long night of exploration. stay the night or continue the journey",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/starterIMG.gif",
    new Answer("stay", 3),
    new Answer("journey", 17),
    "cover"
  ),
  3: new Screen(
    "LEVEL 2",
    "you walk through the streets and come across a ferris wheel. do you take the ride?",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level2IMG.gif",
    new Answer("yes", 4),
    new Answer("no", 13),
    "cover"
  ),
  4: new Screen(
    "LEVEL 3",
    "as you are enjoying the city and its views, you notice that there is an alien invasion!",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level3IMG.gif",
    new Answer("jump to escape", 16), // new story
    new Answer("hide in the ferris wheel", 5),
    "contain"
  ),
  5: new Screen(
    "LEVEL 4",
    "your hiding is no use! you are abducted and find yourself shooting in the sky with the aliens. do you befriend them?",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level4IMG.gif",
    new Answer("best friends", 6),
    new Answer("enemies", 16), // change number, floating in space
    "100% 100%"
  ),
  6: new Screen(
    "LEVEL 5",
    "because you are kind to other life forces, they allow you to choose which planet you will be dropped off in",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level5IMG.gif",
    new Answer("neptune", 7),
    new Answer("jupiter", 6), // change number
    "contain"
  ),
  7: new Screen(
    "LEVEL 6",
    "you have arrived in neptune, the bluest planet of all. i hope you know how to swim VERY well...",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level6IMG.gif",
    new Answer("Im a great swimmer", 8),
    new Answer("Not the best swimmer", 9), // change number
    "cover"
  ),
  8: new Screen(
    "LEVEL 7",
    "thank goodness you are a great swimmer, they say. get ready for your space walk!",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level7IMG.gif",
    new Answer("dive in", 2),
    new Answer("dive in cautiously", 9),
    "cover"
  ),
  9: new Screen(
    "Level 8",
    "you put your ego aside and slowly leave the ship. you notice the raging waters. you ask your friends for help...",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level8IMG.gif",
    new Answer("take a submarine", 10), // go to same storyline
    new Answer("grab scuba gear", 10), // go to same storyline
    "100% 100%"
  ),
  10: new Screen(
    "Level 9",
    "whoops! something sucked you into another parallel and you ended up in an underwater world!",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level9IMG.gif",
    new Answer("swim to the top!", 2), // restart
    new Answer("succumb", 11),
    "cover"
  ),
  11: new Screen(
    "Level 10",
    "you say your goodbyes as 60s pass. inevitably, you breathe in. wait... you can breathe underwater. you now can live your best life",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level10IMG.gif",
    new Answer("restart", 1), // restarts game
    new Answer("escape", 12),
    "100% 110%"
  ),
  12: new Screen(
    "\n",
    "\n",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/GameOver.gif",
    new Answer("high scores"),
    new Answer("restart", 1),
    "100% 100%"
  ),
  13: new Screen( // new story from begining
    "Level 3",
    "you're afraid of heights. but not afraid of psychics. you pop in to get your future read. she suspects an alien abduction is in your cards",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level3BIMG.gif",
    new Answer("hide in the big ferris wheel", 5),
    new Answer("don't take it seriously", 14),
    "100% 110%"
  ),
  14: new Screen(
    "Level 4",
    "you abandon this crazy city and head for your final destinaton. But you get lost!",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level4BIMG.gif",
    new Answer("hitch a ride", 15),
    new Answer("keep walking", 15),
    "100% 110%"
  ),
  15: new Screen(
    "Level 5",
    "oh no! you've been kidnapped. you shouldn't of trusted this part of town...",
    "",
    new Answer("hi"),
    new Answer("hi")
  ),
  16: new Screen(
    "Level 5",
    "you now have enemies! they kick you out of the ship",
    "https://i.gifer.com/LEk6.gif",
    new Answer("hi"),
    new Answer("hi"),
    "100% 110%"
  ),
  17: new Screen(
    "Level 2",
    "you continue your journey. you need to get to your destination. it's dark and your light source runs out.",
    "https://i.gifer.com/LEk6.gif",
    new Answer("turn around, go back to the city and explore", 3),
    new Answer("hi"),
    "100% 110%"
  ),
};

// execution
x = document.querySelector("#ans1");
y = document.querySelector("#ans2");

// init score as 0 to start
let score = 0;

function displayScreen(screen_id) {
  const screen = tree[screen_id];

  // display main title
  let main_title = document.querySelector(".main_title");
  main_title.innerText = screen.title;
  main_title.style.fontSize = "5rem";

  // display score
  let user_score = document.querySelector(".score");
  user_score.innerText = `score:${score}`;

  if (screen_id != 1) {
    main_title.style.color = "black";
    main_title.style.textShadow = "5px 5px 5px purple";
  }

  // reset the question the question text for the current screen
  let question_text_element = document.querySelector(".text");
  question_text_element.innerText = screen.text;

  // reset the image url for the current screen
  document.body.style.background = "url(" + screen.imgurl + ")";

  // reset button one for the current screen
  let button1 = document.querySelector("#ans1");
  button1.innerText = screen.ans1.text;

  button1.dataset.screen_id = screen.ans1.screen_id;

  // reset button two for the current screen
  let button2 = document.querySelector("#ans2");
  button2.innerText = screen.ans2.text;
  button2.dataset.screen_id = screen.ans2.screen_id;

  document.body.style.backgroundSize = screen.backgroundSize;
}

displayScreen(screen_id);

button1.addEventListener("click", (e) => {
  if (button1.innerText == "cancel") {
    document.body.classList.add("glitch");
    setTimeout(() => {
      document.body.classList.remove("glitch");
    }, 1000);
    score = 0;
  } else {
    displayScreen(e.target.dataset.screen_id);
    score += 1;
  }
});

button2.addEventListener("click", (e) => {
  displayScreen(e.target.dataset.screen_id);
  score += 1;
});
