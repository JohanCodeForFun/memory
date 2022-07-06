// Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

// link text
playerLivesCount.textContent = playerLives;

// generate the data

const getData = () => [
    { imgSrc: "./images/IMG_2392.jpeg", name: "cafe" },
    { imgSrc: "./images/IMG_4070.jpeg", name: "swings" },
    { imgSrc: "./images/IMG_5836.jpeg", name: "sofa" },
    { imgSrc: "./images/IMG_5855.jpeg", name: "hill" },
    { imgSrc: "./images/IMG_6141.jpeg", name: "focus" },
    { imgSrc: "./images/IMG_8070.jpeg", name: "yeah" },
    { imgSrc: "./images/IMG_8352.jpeg", name: "adventure" },
    { imgSrc: "./images/IMG_8569.jpeg", name: "happy" },
    { imgSrc: "./images/IMG_2392.jpeg", name: "cafe" },
    { imgSrc: "./images/IMG_4070.jpeg", name: "swings" },
    { imgSrc: "./images/IMG_5836.jpeg", name: "sofa" },
    { imgSrc: "./images/IMG_5855.jpeg", name: "hill" },
    { imgSrc: "./images/IMG_6141.jpeg", name: "focus" },
    { imgSrc: "./images/IMG_8070.jpeg", name: "yeah" },
    { imgSrc: "./images/IMG_8352.jpeg", name: "adventure" },
    { imgSrc: "./images/IMG_8569.jpeg", name: "happy" }
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//Card generator function
const cardGenerator = () => {
    const cardData = randomize();
    // Generate the HTML 
    cardData.forEach((item) => {
        const card = document.createElement('DIV');
        const face = document.createElement('IMG');
        const back = document.createElement('DIV');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //Attach the info to the cards
        face.src = item.imgSrc;
        //Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
};
//Check Cards
const checkCards = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard);
    // at 30:00 minutes in.
}

cardGenerator();