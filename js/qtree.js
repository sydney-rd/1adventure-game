// data structure
class Screen {
    constructor(text, url, a1, a2, bgSize) {
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

// data
const tree = {
    1 : new Screen(
        "blah blah dreaming idk  ", 
        "https://media.tenor.com/0uja_yM8uAEAAAAC/rat-in-a-maze-oxygen.gif",
        new Answer("I am having a nightmare", 2), 
        new Answer("This is reality", 2),
        "cover",
    ),
    2 : new Screen(
        "You are floating in space. Are you floating towards the light or the dark?",
        "https://www.spitzer.caltech.edu/system/articles/images/618/medium/hubble_waterworlds_stsci-01ggtf6gyh3pbetsdy77g7tvvy.png?1671131838",
        new Answer("light", 3),
        new Answer("dark", 3),
        "cover",
    ),
    3 : new Screen(
        "you veer towards the first speck of light in the vast darkness and render unconcious, you awake in a seemingly different dimension. You find yourself in a room full of mirrors. Do you...",
        "https://imgprd19.hobbylobby.com/9/02/68/902685335f4d58a40c9d73c1799f6bf5fb0ecf06/1400Wx1400H-1970565-0621-px.jpg",
        new Answer("explore", 1),
        new Answer("escape", 1),
        "contain",
    )
};

// execution

function displayScreen(screen_id) {
    const screen = tree[screen_id];

    // reset the question the question text for the current screen
    let question_text_element = document.querySelector(".text");
    question_text_element.innerText = screen.text;

    // reset the image url for the current screen
    document.body.style.background = "url(" + screen.imgurl + ")";

    // reset button one for the current screen
    let button1 = document.querySelector(".ans1");
    button1.innerText = screen.ans1.text;
    button1.addEventListener("click", () => {
        displayScreen(screen.ans1.screen_id);
    });

    // reset button two for the current screen
    let button2 = document.querySelector(".ans2");
    button2.innerText = screen.ans2.text;
    button2.addEventListener("click", () => {
        displayScreen(screen.ans2.screen_id);
    });

    // Background size
    document.body.style.backgroundSize = screen.backgroundSize;
}

// starts at one always
displayScreen(1);