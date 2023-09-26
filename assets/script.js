const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection de l'ID banner pour afficher la diapotive
const banner = document.getElementById("banner");

// Sélection de la class banner image pour afficher la diapotive
const image = document.querySelector(".banner-img");

// Sélection de la class dots pour afficher la diapotive
const dots = document.querySelectorAll(".dots .dot");

//initialisation du compteur à zéro dans l'index avec la variable currenceIndex
let dotSelecred = 0;

//Création tableau bullet point
const nbDots = dots.length;

// Sélection du selecteur P  pour afficher la diapotive
const paragraph = document.querySelector("#banner p");

//initialisation du compteur à zéro dans l'index avec la variable currenceIndex
let currentIndex = 0;

// Fonction pour afficher les image et tagline dans l'index
function showSlide(index) {
  const slide = slides[index];
  image.src = `./assets/images/slideshow/${slide.image}`;
  paragraph.innerHTML = slide.tagLine;
}

// Sélection de la fleche de gauche
const arrow_left = document.querySelector(".arrow_left");

// Sélection de la fleche de droite
const arrow_right = document.querySelector(".arrow_right");

// Ajout click fléche de gauche de la souris
arrow_left.addEventListener("click", function (e) {
  //Fonction défilement des images
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);

  // Fonction d'affichage des bullets points
  // j'enleve la class dot_selected sur le bullet point de la classe dot précedente
  dots[dotSelecred].classList.remove("dot_selected");
  dotSelecred -= 1;
  if (dotSelecred < 0) {
    dotSelecred = dots.length - 1;
  }
  //j'ajoute la class dot_selected sur le bullet point de la classe dot suivente
  dots[dotSelecred].classList.add("dot_selected");
  console.log(dotSelecred);
});

// Ajout click fléche de droite de la souris
arrow_right.addEventListener("click", function (e) {
  //Fonction défilement des images
  currentIndex = currentIndex + 1;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);

  // Fonction d'affichage des bullets points
  // J'enleve la classe dot_selected sur le bullet point de la classe dot précedente
  dots[dotSelecred].classList.remove("dot_selected");
  dotSelecred += 1;
  if (dotSelecred >= dots.length) {
    dotSelecred = 0;
  }

  //J'ajoute la classe dot_selected sur le bullet point de la classe dot suivente
  dots[dotSelecred].classList.add("dot_selected");
  console.log(dotSelecred);
});
