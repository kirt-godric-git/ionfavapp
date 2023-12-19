import { Ibook } from "./interfaces/ibook";
import { Isong } from "./interfaces/isong";

export let booksArray: Ibook[] = [
    { id: 1, title: "Rich Dad Poor Dad", subtitle: "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!", 
        author: ["Robert Kiyosaki", "Sharon L. Lechter"],
        genre: "Personal Finance Advice", 
        bookDetails: `Explodes the myth that you need to earn a high income to be rich, challenges the belief that your house is an asset, shows parents why they can't rely on the school system to teach their kids about money and tells you what to teach your children about money.`
        +` An overnight, word-of-mouth bestselling personal finance book phenomenon for millions of readers hoping to become masters of their money and create sustaining wealth for themselves and their families.`
        +`\n\nPersonal-finance author and lecturer Robert T. Kiyosaki developed his unique economic perspective from two very different influences—his two fathers. One father (Robert's real father) was a highly educated man but fiscally poor. The other father was the father of Robert's best friend—that Dad was an eighth-grade dropout who became a self-made multimillionaire.`,
        logoimg: "../assets/rich-dad-logo-purple.svg",
        bookimg: "../assets/richdadpoordad.jpg"
    },
    { id: 2, title: "The 7 Habits of Highly Effective People", subtitle: "Powerful Lessons in Personal Change", 
        author: ["Stephen R. Covey"],
        genre: "Personal Development", 
        bookDetails: "Covey defines effectiveness as the balance of obtaining desirable results with caring for that which produces those results. He illustrates this by referring to the fable of the goose that laid the golden eggs. He claims that effectiveness can be expressed in terms of the P/PC ratio, where P refers to getting desired results and PC is caring for that which produces the results."
        +"\n\nCovey argues against what he calls the personality ethic, that he sees as prevalent in many modern self-help books. He promotes what he labels the character ethic: aligning one's values with what he claims to be universal and timeless principles. In doing this, Covey distinguishes principles and values. He sees principles as external natural laws, while values remain internal and subjective. He says that values govern people's behavior, while principles ultimately determine the consequences. Covey presents his teachings in a series of seven habits, organized as a progression from dependence through independence on to interdependence.",
        logoimg: "../assets/franklin-covey-logo-new.png",
        bookimg: "../assets/the7habitsofhighlyeffectivepeople.jpg"
    },
];

export let songArray1:string[] =  [ 
    "1. Little Drummer Boy",
    "2. Silent Night",
    "3. Hark the Hearld Angels Sing",
    "4. Joy to the World",
    "5. Oh Come All Ye Faithful",
    "6. Jingle Bells",
    "7. When a Child Is Born"
];


export let songArray2:Isong[] =  [ 
    {id: 1, title: "Little Drummer Boy", artist: "Boney M.", genre: "Christmas", icon:"snow", iconsrc:"../../assets/icon/christmas-tree.svg"},
    {id: 2, title: "Silent Night", artist: "Boney M.", genre: "Christmas", icon:"snow", iconsrc:"../../assets/icon/christmas-tree.svg"},
    {id: 3, title: "Hark the Hearld Angels Sing", artist: "Boney M.", genre: "Christmas", icon:"snow", iconsrc:"../../assets/icon/christmas-tree.svg"},
    {id: 4, title: "Always", artist: "Erasure", genre: "Dance", icon:"walk", iconsrc:"../../assets/icon/person-running-solid.svg"},
    {id: 5, title: "All of Me", artist: "John Legend", genre: "Blues", icon:"musical-notes", iconsrc:"../../assets/icon/guitar-solid.svg"},
    {id: 6, title: "My Sacrifice", artist: "Creed", genre: "Rock", icon:"skull", iconsrc:"../../assets/icon/rock-gesture.svg"},
    {id: 7, title: "Lead Me To The Cross", artist: "Hillsong United", genre: "Christian", icon:"add", iconsrc:"../../assets/icon/cross-solid.svg"},
];