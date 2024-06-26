/* 
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione
 del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

 Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima 
e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa 
per l'ultima miniatura se l'utente clicca la freccia verso il basso.
*/


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let activeItem = 0;

// Per ogni immagine nell'array prendo il contenitore delle immagini
// e gli aggiungo la singola immagine

const imagesContainer = document.querySelector('.images-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');

for(let i = 0; i < images.length; i++) {
    const thisPath = images[i];



    const newImage =`
    <div class="image">
        <img src="${thisPath.image}" alt="spider-man">
        <div class="description">
            <div class="title">${thisPath.title}</div>
            <div class="text">${thisPath.text}</div>
        </div>
    </div>
    `;

    imagesContainer.innerHTML += newImage;

    const newThumbnails = `
    <div class="thumbnail">
        <img src="${thisPath.image}">
    </div>
    `;

    thumbnailsContainer.innerHTML += newThumbnails;
}

// Aggiungere classe active alla prima immagine

const allImages = document.querySelectorAll('.image');
allImages[activeItem].classList.add('active');
const allThumbnails = document.querySelectorAll('.thumbnail');
allThumbnails[activeItem].classList.add('active');

// selezionare la freccia in basso 
const nextArrow = document.querySelector('.arrow.next');
nextArrow.addEventListener('click', function(){
    // rimuovere classe active dall'elemento corrente
    // incrementiamo activeItem di 1
    // aggiungiamo active al nuovo activeItem
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');

    if(activeItem < allImages.length - 1) {
        activeItem++;
    } else {
        activeItem = 0;
    }

    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');
});

// selezionare la freccia in alto

const previousArrow = document.querySelector('.arrow.previous');
previousArrow.addEventListener('click', function() {
    // rimuovere classe active dall'elemento corrente
    // decrementare activeItem di 1
    // aggiungere classe active al nuovo activeItem
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');

    if(activeItem > 0) {
        activeItem--;
    } else {
        activeItem = allImages.length - 1;
    }

    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');

});