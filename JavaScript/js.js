// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');
const sideArrows = document.querySelector('.side-arrows');

hamburger.addEventListener('click', () => {
  const isActive = menu.classList.toggle('active');
  menu.setAttribute('aria-hidden', !isActive);

  // Hide other parts while open menu
  sideArrows.style.display = isActive ? 'none' : '';
  hamburger.style.display = isActive ? 'none' : 'flex';
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  menu.setAttribute('aria-hidden', 'true');
  sideArrows.style.display = '';
  hamburger.style.display = 'flex';
});

// Close menu if clicking outside it
window.addEventListener('click', (e) => {
  if (
    menu.classList.contains('active') &&
    !menu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    sideArrows.style.display = '';
    hamburger.style.display = 'flex';
  }
});

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

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");
const submitLogin = document.getElementById("submitLogin");
const loginError = document.getElementById("loginError");


loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "block";
});


closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
  loginError.textContent = "";
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
    loginError.textContent = "";
  }
});

submitLogin.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    loginError.textContent = "⚠️ Please fill in both fields.";
    return;
  }

  loginError.style.color = "limegreen";
  loginError.textContent = "✅ Login successful!";
  setTimeout(() => {
    loginModal.style.display = "none";
    loginError.textContent = "";
    loginError.style.color = "red";
  }, 1500);
});

