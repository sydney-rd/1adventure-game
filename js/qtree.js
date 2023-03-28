// data structure
class Screen {
    constructor(title, text, url, a1, a2, bgSize, bgRepeat) {
        this.title = title;
        this.imgurl = url;
        this.text = text;
        this.ans1 = a1;
        this.ans2 = a2;
        this.backgroundSize = bgSize;
        this.backgroundRepeat = bgRepeat;

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
        "escape the labyrinth",
        "please enter coins",
        "https://start-game.carrd.co/assets/images/image01.gif?v=5aed0a9d",
        new Answer("cancel", 2),
        new Answer("start", 2),
        "cover",
    ),
    2 : new Screen(
        "LEVEL 1",
        "you find yourself walking towards a new city after a long night of exploration. stay the night or continue the journey", 
        "https://t4.ftcdn.net/jpg/02/32/93/59/360_F_232935902_fxUVHXwZzzRw9jUXQP3KKHPfGD1LRhGx.jpg",
        new Answer("stay", 3), 
        new Answer("journey", 3), // change num
        "cover",
    ),
    3 : new Screen(
        "LEVEL 2",
        "you walk through the streets and come across this ferris wheel. do you take the ride?",
        "https://wallpapers.com/images/hd/city-pixel-art-wkrsw6j3ogs1y29b.jpg",
        new Answer("yes", 4),
        new Answer("no", 4), // change number
        "cover",
    ),
    4 : new Screen(
        "LEVEL 3",
        "as you are enjoying the city skyline from atop of the ferris wheel, you notice that their is an alien invasion!",
        "https://i.pinimg.com/originals/3a/f1/d0/3af1d082c28a0cab1c62004d74258dd2.gif",
        new Answer("jump to escape", 2), // change number
        new Answer("hide in the ferris wheel", 5),
        "contain",
    ),
    5: new Screen(
        "LEVEL 4",
        "your hiding is no use! you are abducted and find yourself shooting in the sky ",
        "https://art.pixilart.com/9ec64f6f878fa26.gif",
        new Answer("go towards the warmth", 5),
        new Answer("go towards the cold", 5), // change number
        "100% 100%",
    ),
    6: new Screen(
        "LEVEL 5",
        "you follow and eventually find a calm, still hot spring. Do you go in?",
        "https://thumbs.gfycat.com/SpottedAcceptableImperialeagle-size_restricted.gif",
        new Answer("dive in", 6),
        new Answer("test the waters first", 6), // change number
        "cover",
    ),
    7: new Screen(
        "LEVEL 6",
        "you dive in and whoops, you've now entered another parallel, welcome! You now must escape the desert and its elements. After miles of exploration, you discover a plane. You understand there is someone else here.",
        "https://spacecoastdaily.com/wp-content/uploads/2018/06/Mars-Curiosity-Rover-580-8.gif",
        new Answer("hop on board", 7),
        new Answer("explore the desert", 7), // change number
        "cover",
    ),
    8: new Screen(
        "LEVEL 7",
        "as you are looking around the plane, you begin to have intense flashbacks. Your memory is beginning to come back of what has happened to you",
        "https://cdn.pixabay.com/photo/2016/07/09/13/53/aircraft-1506313__340.jpg",
        new Answer("continue recalling these memories", 2),
        "cover",
    ),
    9: new Screen(
        "Level 8",
        "you smash through and instantly are transported back to your childhood home",
        "",
        new Answer("keep your distance..", 9), // change number
        new Answer("enter cautiously", 9),
        "cover",
    ),
    10: new Screen(
        "Level 9",
        "You enter your home and observe. Fridge is full, looks lived in. You help yourself. At some point, you here a door open",
        "",
        new Answer("test"),
        new Answer("test")
    )

};

// execution

function displayScreen(screen_id) {
    const screen = tree[screen_id];
    // display main title

    let main_title = document.querySelector(".main_title");
    main_title.innerText = screen.title;
    main_title.style.fontSize = "5rem";

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
        main_title.style.color = 'black'
        main_title.style.textShadow = "5px 5px 5px purple"
    });

    // reset button two for the current screen
    let button2 = document.querySelector(".ans2");
    button2.innerText = screen.ans2.text;
    button2.addEventListener("click", () => {
        displayScreen(screen.ans2.screen_id);
        main_title.style.color = 'black'
        main_title.style.textShadow = "5px 5px 5px purple"

    });

    // Background size
    document.body.style.backgroundSize = screen.backgroundSize;
    // Background Repeat
    document.body.style.backgroundRepeat = screen.backgroundRepeat;
}

// starts at one always
displayScreen(1);