let button1 = document.getElementById("ans1");
let button2 = document.querySelector("#ans2");


// move screen_id to the global scope (also changed in the first function call to displayScreen
let screen_id = 1


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
    1 : new Screen(
        "escape the labyrinth",
        "please enter coins",
        "https://start-game.carrd.co/assets/images/image01.gif?v=5aed0a9d",
        new Answer("cancel", 1),
        new Answer("start", 2),
        "cover",
    ),
    2 : new Screen(
        "LEVEL 1",
        "you find yourself walking towards a new city after a long night of exploration. stay the night or continue the journey", 
        "https://i.pinimg.com/originals/68/31/45/6831454cf213ed7ffa541fe666fa9cf8.gif",
        new Answer("stay", 3), 
        new Answer("journey", 3), // new story change num
        "cover",
    ),
    3 : new Screen(
        "LEVEL 2",
        "you walk through the streets and come across this ferris wheel. do you take the ride?",
        "https://giffiles.alphacoders.com/200/200557.gif",
        new Answer("yes", 4),
        new Answer("no", 13),
        "cover",
    ),
    4 : new Screen(
        "LEVEL 3",
        "as you are enjoying the city and its views, you notice that there is an alien invasion!",
        "https://i.pinimg.com/originals/3a/f1/d0/3af1d082c28a0cab1c62004d74258dd2.gif",
        new Answer("jump to escape", 16), // new story
        new Answer("hide in the ferris wheel", 5),
        "contain",
    ),
    5: new Screen(
        "LEVEL 4",
        "your hiding is no use! you are abducted and find yourself shooting in the sky with the aliens. do you befriend them?",
        "https://art.pixilart.com/f1d0006f2eb0807.gif",
        new Answer("best friends", 6),
        new Answer("enemies", 16), // change number, floating in space
        "100% 100%",
    ),
    6: new Screen(
        "LEVEL 5",
        "because you are kind to other life forces, they allow you to choose which planet you will be dropped off in",
        "https://i.pinimg.com/originals/ef/e9/26/efe926ee0e98525d7d1567a54ad3e39f.gif",
        new Answer("neptune", 7),
        new Answer("jupiter", 6), // change number
        "contain",
    ),
    7: new Screen(
        "LEVEL 6",
        "you have arrived in neptune, the bluest planet of all. i hope you know how to swim VERY well...",
        "https://media.tenor.com/rE3oG2nBCOgAAAAd/neptune-planet.gif",
        new Answer("Im a great swimmer", 8),
        new Answer("Not the best swimmer", 9), // change number
        "cover",
    ),
    8: new Screen(
        "LEVEL 7",
        "thank goodness you are a great swimmer, they say. get ready for your space walk!",
        "https://i.pinimg.com/originals/71/b0/21/71b021d18cbe5b9f6bbf9f2b8f000d59.gif",
        new Answer("dive in", 2),
        new Answer("dive in cautiously", 9),
        "cover",
    ),
    9: new Screen(
        "Level 8",
        "you put your ego aside and slowly leave the ship. you notice the raging waters. you ask your friends for help...",
        "https://cdnb.artstation.com/p/assets/images/images/009/761/481/original/adrian-de-palma-aa1-adrian-de-palma-mockup-pixel-art.gif?1520772604",
        new Answer("take a submarine", 10), // go to same storyline
        new Answer("grab scuba gear", 10), // go to same storyline
        "100% 100%",
    ),
    10: new Screen(
        "Level 9",
        "whoops! something sucked you into another parallel and you ended up in an underwater world!",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/52cf024e-4cc2-4480-aa9b-192e14e46400/d9icbyp-154b18c4-7427-452c-924d-e13f6ea182f4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyY2YwMjRlLTRjYzItNDQ4MC1hYTliLTE5MmUxNGU0NjQwMFwvZDlpY2J5cC0xNTRiMThjNC03NDI3LTQ1MmMtOTI0ZC1lMTNmNmVhMTgyZjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I_C8zTZm9bYCNIWUHuqc-IATW2MJE62OMyGyI16zQAQ",
        new Answer("swim to the top!", 2), // restart
        new Answer("succumb", 11),
        "cover",
    ),
    11: new Screen(
        "Level 10",
        "you say your goodbyes as 60s pass, you allow yourself to float. inevitably, you breathe in. wait huh? you can breathe underwater. you now can live your best life",
        "https://media1.giphy.com/media/JPRruav6eMqd6uBIqr/giphy.gif?cid=6c09b952e6aedb8a96929752e599beb3973e774369401760&rid=giphy.gif&ct=g",
        new Answer("restart", 1), // restarts game 
        new Answer("escape", 12),
        "100% 110%",
    ),
    12: new Screen(
        "\n",
        "\n",
        "https://i.gifer.com/OEJZ.gif",
        new Answer("high scores"),
        new Answer("restart", 1),
        "100% 100%",

    ),
    13: new Screen( // new story from begining
        "Level 3",
        "you're afraid of heights. but not afraid of psychics. you pop in to get your future read. she suspects an alien abduction is in your cards",
        "https://www.rookiemag.com/wp-content/uploads/2016/03/1456846171belton1tarot.gif",
        new Answer("hide in the big ferris wheel", 5),
        new Answer("don't take it seriously", 14),
        "100% 110%"
    ),
    14: new Screen( 
        "Level 4",
        "you abandon this crazy city and head for your final destinaton. But you get lost!",
        "https://64.media.tumblr.com/bde3235822097c8cdbabb2c962bf4ba7/c84f4ff8ff8aed05-31/s500x750/11c5919cb92987e16dc8d685bd4239cdaf4f77a6.gif",
        new Answer("hitch a ride", 15),
        new Answer("keep walking", 15),
        "100% 110%",  
    ),
    15: new Screen(
        "Level 5",
        "oh no! you've been kidnapped. you shouldn't of trusted this part of town...",
        "",
        new Answer("hi"),
        new Answer("hi"),
    ),
    16: new Screen(
        "Level 5",
        "you now have enemies! they kick you out of the ship",
        "https://i.gifer.com/LEk6.gif",
        new Answer("hi"),
        new Answer("hi"),
        "100% 110%"
        
    )
};

// execution
// these are here to quickly check getEventListeners in the console and should be deleted
x = document.querySelector('#ans1')
y = document.querySelector('#ans2')

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

    // a single conditional to set the color instead of the two lines that reset the color on every page but the intro.

    // performance could be improved by changing it to check and see if the screen_id IS 1, then applying the red styling to that and leaving purple as the default in the CSS
    if ( screen_id != 1) {
        main_title.style.color = 'black'
        main_title.style.textShadow = "5px 5px 5px purple"
    }

    // reset the question the question text for the current screen
    let question_text_element = document.querySelector(".text");
    question_text_element.innerText = screen.text;

    // reset the image url for the current screen
    document.body.style.background = "url(" + screen.imgurl + ")";

    // reset button one for the current screen
    let button1 = document.querySelector("#ans1");
    button1.innerText = screen.ans1.text;

    // uses the html data-* attribute to create a custom key-value pair on the DOM element that stores the screen_id (see this for more details https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
    button1.dataset.screen_id = screen.ans1.screen_id

    // reset button two for the current screen
    let button2 = document.querySelector("#ans2");
    button2.innerText = screen.ans2.text;
    // same dataset thing as with button 1 above
    button2.dataset.screen_id = screen.ans2.screen_id

    // Background size
    document.body.style.backgroundSize = screen.backgroundSize;
}

// starts at one always
displayScreen(screen_id);

// Add event listeners to each button once when the page loads (this could be condensed into a single function that works on both buttons)
button1.addEventListener('click', (e) => {
    if (button1.innerText == "cancel") {
        document.body.classList.add('glitch');
        setTimeout(() => {
            document.body.classList.remove('glitch');
        }, 1000);
        score = 0;
    } else {
        // displayScreen now pulls the screen_id from the DOM element itself, which is set on line 149 for button 1, 156 for button 2
        displayScreen(e.target.dataset.screen_id)
        score += 1;
    }

});

button2.addEventListener('click', (e) => {
    displayScreen(e.target.dataset.screen_id)
    score+= 1;
})

// Now, every time displayScreen is run, it takes the appropriate number from the tree[screen_id].ans1 and ans2 and adds that number to the buttons as the "data-screen_id" attribute. The JS then accesses that number to plug into displayScreen when the button is clicked and moves to the right screen.





