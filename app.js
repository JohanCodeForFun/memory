// Grab a couple of things
const section = document.querySelector('section');
const div = document.querySelector('div');
const playerLivesCount = document.querySelector('span');
let playerLives = 12;

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
        card.setAttribute('name', item.name);
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
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    //Logic
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") ===
        flippedCards[1].getAttribute("name")) {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart('Försök igen');
            }
        }
    }
    //Run a check to see if we won the game
    if (toggleCard.length === 16) {
        restart('Bra jobbat!');
    }
};

//Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        //Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
        }, 1000);

    });
    playerLives = 10;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();

// Gallery function
//   - Toggle gallery/game plan
//   - create a slideshow
//   - use minitarues at bottom?
//   

let toggleBtn = document.querySelector('#toggleBtn');
let h2 = document.querySelector('h2');

toggleBtn.addEventListener('click', () => {
    if(section.style.display === 'none') {
        section.style.display = '';
        div.style.display = 'none';
        h2.style.display = '';
    } else {
        section.style.display = 'none';
        div.style.display = '';
        h2.style.display = 'none';
    }

    // ädra vad knappen visar
    if (toggleBtn.innerText === "Visa Bilder") {
        toggleBtn.innerText = "Spela Memory";
    } else {
        toggleBtn.innerText = "Visa Bilder";
    }
});