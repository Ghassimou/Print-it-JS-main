// Function to show the current slide
function showSlide(index) {
  const slide = slides[index];
  const slideHTML = `
	  <img src="${slide.image}" alt="Slide ${index + 1}">
	  <p>${slide.tagLine}</p>
	`;

  showSlide.innerHTML = slideHTML;
}
