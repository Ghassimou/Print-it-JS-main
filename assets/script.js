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

// Selecting the banner ID to display the slide
const banner = document.getElementById("banner");

// Selecting the class banner image to display the slide
const image = document.querySelector(".banner-img");

// Point class selection
const dots = document.querySelectorAll(".dots .dot");

//initializing the counter to zero in the index with the currenceIndex variable
let dotSelecred = 0;

//Create a bulleted array
const nbDots = dots.length;

// Selecting the P selector
const paragraph = document.querySelector("#banner p");

//initializing the counter to zero in the index with the currenceIndex variable
let currentIndex = 0;

//Function to display images and taglines in the index
function showSlide(index) {
  const slide = slides[index];
  image.src = `./assets/images/slideshow/${slide.image}`;
  paragraph.innerHTML = slide.tagLine;
}

// Left arrow selection
const arrow_left = document.querySelector(".arrow_left");

// Right arrow selection
const arrow_right = document.querySelector(".arrow_right");

// Add left mouse click
arrow_left.addEventListener("click", function (e) {
  //Image scrolling function
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);

  // Bullet display function
  // I remove the dot_selected class on the chip from the previous dot class
  dots[dotSelecred].classList.remove("dot_selected");
  dotSelecred -= 1;
  if (dotSelecred < 0) {
    dotSelecred = dots.length - 1;
  }
  //I add the dot_selected class on the following dot class chip
  dots[dotSelecred].classList.add("dot_selected");
  console.log(dotSelecred);
});

// Adding Right Mouse Click
arrow_right.addEventListener("click", function (e) {
  //Image scrolling function
  currentIndex = currentIndex + 1;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);

  // Bullet display function
  // I remove the dot_selected class on the chip from the previous dot class
  dots[dotSelecred].classList.remove("dot_selected");
  dotSelecred += 1;
  if (dotSelecred >= dots.length) {
    dotSelecred = 0;
  }

  //I add the dot_selected class on the following dot class chip
  dots[dotSelecred].classList.add("dot_selected");
  console.log(dotSelecred);
});
