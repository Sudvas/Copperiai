const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');

// Hamburger toggle
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  const isActive = menu.classList.contains('active');
  menu.setAttribute('aria-hidden', !isActive);
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  menu.setAttribute('aria-hidden', 'true');
});

// Arrow functionality
const leftArrow = document.getElementById('arrowLeft');
const rightArrow = document.getElementById('arrowRight');
const hero = document.querySelector('.hero');

let bannerIndex = 0;
const banners = [
  "images/girl.png",
  "images/Laptop.png",
  "images/Mobile.png"
];

function updateBanner() {
  hero.style.background = `url('${banners[bannerIndex]}') center/cover no-repeat`;
}

leftArrow.addEventListener('click', () => {
  bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
  updateBanner();
});

rightArrow.addEventListener('click', () => {
  bannerIndex = (bannerIndex + 1) % banners.length;
  updateBanner();
});
