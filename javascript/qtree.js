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
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level1IMG.gif",
    new Answer("stay", 3),
    new Answer("journey", 17),
    "cover"
  ),
  3: new Screen(
    "LEVEL 2",
    "you walk through the city streets and come across a ferris wheel. do you take the ride?",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level2IMG.gif",
    new Answer("yes", 4),
    new Answer("no", 13),
    "cover"
  ),
  4: new Screen(
    "LEVEL 3",
    "you suddenly notice an alien invasion!",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level3IMG.gif",
    new Answer("jump to escape", 2),
    new Answer("hide!", 5),
    "contain"
  ),
  5: new Screen(
    "LEVEL 4",
    "aliens abduct you and you are shooting in the sky. do you befriend them?",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level4IMG.gif",
    new Answer("best friends", 6),
    new Answer("enemies", 16),
    "100% 100%"
  ),
  6: new Screen(
    "LEVEL 5",
    "because you are kind to other life forces, they allow you to choose which planet you will be dropped off in",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level5IMG.gif",
    new Answer("neptune", 7),
    new Answer("earth", 18),
    "contain"
  ),
  7: new Screen(
    "LEVEL 6",
    "you have arrived in neptune, the bluest planet of all. i hope you know how to swim VERY well...",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level6IMG.gif",
    new Answer("Im a great swimmer", 8),
    new Answer("Not the best swimmer", 2),
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
    new Answer("take a submarine", 10),
    new Answer("grab scuba gear", 10),
    "100% 100%"
  ),
  10: new Screen(
    "Level 9",
    "whoops! you are sucked into another parallel and you ended up in an underwater world!",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level9IMG.gif",
    new Answer("swim to the top!", 2),
    new Answer("succumb", 11),
    "cover"
  ),
  11: new Screen(
    "Level 10",
    "you say your goodbyes as 60s pass. inevitably, you breathe in. wait... you can breathe underwater. you now can live your best life",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level10IMG.gif",
    new Answer("You Escaped"),
    new Answer("Thanks for Playing"),
    "100% 110%"
  ),
  13: new Screen(
    "Level 3",
    "you're afraid of heights. but not afraid of psychics. you pop in to get your future read. she suspects an alien abduction is in your cards",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level3BIMG.gif",
    new Answer("hide in the ferris wheel", 5),
    new Answer("skip town", 14),
    "100% 110%"
  ),
  14: new Screen(
    "Level 4",
    "you abandon this crazy city and arrive in a new, safe town but notice some strange folk",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level4BIMG.gif",
    new Answer("keep to yourself", 15),
    new Answer("introduce yourself", 15),
    "100% 110%"
  ),
  15: new Screen(
    "Level 5",
    "before you make your next move, a woman comes up to you. she invites you into her home for dinner",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game-javascript/main/assets/bgImages/Level5BIMG.gif",
    new Answer("no thanks", 1),
    new Answer("i am hungry...", 19),
    "cover"
  ),
  16: new Screen(
    "Level 5",
    "you now have enemies! they kick you out of the ship and you land in an earth city. do you grab earth food next or buy new clothes?",
    "https://i.gifer.com/LEk6.gif",
    new Answer("clothes", 18),
    new Answer("food", 18),
    "100% 110%"
  ),
  17: new Screen(
    "Level 2",
    "as you walk, you notice a sudden aura, walk towards it or escape and jump off the cliff",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game/main/assets/bgImages/Level18IMG.gif",
    new Answer("JUMP!", 2),
    new Answer("walk towards", 4),
    "cover"
  ),
  18: new Screen(
    "Level 6",
    "you walk through this earth city and meet a strange woman. do you go with her or keep exploring?",
    "https://e0.pxfuel.com/wallpapers/589/540/desktop-wallpaper-a-city-at-night-pixel-art-edition-1920-%C3%97-1080-thumbnail.jpg",
    new Answer("woman", 20),
    new Answer("explore", 22),
    "cover"
  ),
  19: new Screen(
    "Level 6",
    "she lets you stay over but you decide to sneak out. uh-oh, you are too noisy and she wakes up...and she's not happy",
    "https://raw.githubusercontent.com/sydney-rd/text-adventure-game-javascript/main/assets/bgImages/Level6Bimg.gif",
    new Answer("be honest", 2),
    new Answer("using the bathroom!", 20),
    "cover"
  ),
  20: new Screen(
    "Level 7",
    "you befriend this woman and find a home here, but want something new, you go searching for portals, do you go towards the mountains or volcanos",
    "https://i.pinimg.com/originals/48/8a/94/488a947b11a00c4768ab84938bec1598.gif",
    new Answer("mountains", 21),
    new Answer("volcano's", 21),
    "cover"
  ),
  21: new Screen(
    "Level 8",
    "after sometime you come across two portals, a blue, breezy portal, and a red, fiery portal. which do you take",
    "https://cdnb.artstation.com/p/assets/images/images/047/517/381/original/inkpendude-portal-calm.gif?1647794880",
    new Answer("red portal", 2),
    new Answer("blue portal", 10),
    "cover"
  ),
  22: new Screen(
    "Level 7",
    "you continue to walk through the city and decide if you should search for portals to try and get back to space",
    "https://i.pinimg.com/originals/3e/c8/69/3ec869e51eef38eac2d159030ecf1784.gif",
    new Answer("stay here", 23),
    new Answer("find a portal", 21),
    "cover"
  ),
  23: new Screen(
    "Level 8",
    "you decide to make a new home for yourself in this new city, cherishing your memories. as months pass you become lonely, lets get adopt a pet! will you choose a dog or an exotic pet",
    "https://thumbs.gfycat.com/AgileHiddenAfricanhornbill-max-1mb.gif",
    new Answer("dog", 24),
    new Answer("exotic pet", 2),
    "cover"
  ),
  24: new Screen(
    "Level 9",
    "congratulations! you and your dog live happily ever after together in your new home",
    "https://i.pinimg.com/736x/d4/3f/a5/d43fa5669ad2f105c18f1eeddf94297e--gifs-anim%C3%A9s-animated-gifs.jpg",
    new Answer("You Escaped"),
    new Answer("Thanks for Playing"),
    "cover"
  ),
};

// execution
x = document.querySelector("#ans1");
y = document.querySelector("#ans2");

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

  // reset buttons
  let button1 = document.querySelector("#ans1");
  button1.innerText = screen.ans1.text;
  button1.dataset.screen_id = screen.ans1.screen_id;

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
