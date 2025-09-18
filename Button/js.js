// JavaScript for toggling the hamburger and menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // Toggle hamburger animation
  menu.classList.toggle('active');     // Toggle menu visibility
});
