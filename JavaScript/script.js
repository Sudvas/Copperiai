const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let index = 0;
 
function updateCarousel() {
  const cardWidth = cards[0].getBoundingClientRect().width + 40; // account for padding/margin
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}
 
prevButton.addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
});
 
nextButton.addEventListener('click', () => {
  index = (index + 1) % cards.length;
  updateCarousel();
});