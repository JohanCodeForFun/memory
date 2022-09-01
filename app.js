// Grab a couple of things
const section = document.querySelector('section');
const div = document.querySelector('div');
const playerLivesCount = document.querySelector('span');
let playerLives = 16;

// link text
playerLivesCount.textContent = playerLives;

// generate the data
const getData = () => [
    { imgSrc: "./images/dario-bronnimann-Pk5Y0gkICDw-unsplash.png", name: "Dario Brönnimann" },
    { imgSrc: "./images/dario-bronnimann-8fHbjlmMSDY-unsplash.png", name: "Dario Brönnimann" },
    { imgSrc: "./images/pete-alexopoulos-DuhfNThAz2A-unsplash-2.png", name: "Pete Alexopoulos" },
    { imgSrc: "./images/maxime-gilbert-WZ31bFoqPHg-unsplash.png", name: "Maxime Gilbert" },
    { imgSrc: "./images/photo-is-beauty-to-u-m2y-eByFnvc-unsplash.png", name: "photo is beauty" },
    { imgSrc: "./images/philipp--hvC60Fen7I-unsplash.png", name: "Philipp" },
    { imgSrc: "./images/ryan-ancill-KNnj1-uUwow-unsplash.png", name: "Ryan Ancill" },
    { imgSrc: "./images/craig-manners-8qOh0vBS5B8-unsplash.png", name: "Craig Manners" },
    { imgSrc: "./images/dario-bronnimann-Pk5Y0gkICDw-unsplash.png", name: "Dario Brönnimann" },
    { imgSrc: "./images/dario-bronnimann-8fHbjlmMSDY-unsplash.png", name: "Dario Brönnimann" },
    { imgSrc: "./images/pete-alexopoulos-DuhfNThAz2A-unsplash-2.png", name: "Pete Alexopoulos" },
    { imgSrc: "./images/maxime-gilbert-WZ31bFoqPHg-unsplash.png", name: "Maxime Gilbert" },
    { imgSrc: "./images/photo-is-beauty-to-u-m2y-eByFnvc-unsplash.png", name: "photo is beauty" },
    { imgSrc: "./images/philipp--hvC60Fen7I-unsplash.png", name: "Philipp" },
    { imgSrc: "./images/ryan-ancill-KNnj1-uUwow-unsplash.png", name: "Ryan Ancill" },
    { imgSrc: "./images/craig-manners-8qOh0vBS5B8-unsplash.png", name: "Craig Manners" }
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
                console.log('match');
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
    playerLives = 16;
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

function onLoadStyle() {
    section.style.display = '';
    div.style.display = 'none';
    h2.style.display = '';
}

function myFunction(imgs) {
    let expandImg = document.getElementById('expandedImg');
    let imgText = document.getElementById('imgtext');
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = 'block';
}


// Ljud
// let toggleSound = document.querySelector('#toggleSound')

// toggleSound.addEventListener('click', () => {
//     if (toggleSound.innerText === 'Ljud AV') {
//         toggleSound.innerText = 'Ljud PÅ';
//     } else {
//         toggleSound.innerText = 'Ljud AV'
//     }
// });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides (slideIndex += n);
}

function currentSlide(n) {
    showSlides (slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('demo');
    let captionText = document.getElementById('caption');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
    captionText.innerHTML = dots[slideIndex-1].alt;
}