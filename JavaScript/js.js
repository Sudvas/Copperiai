const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');
const sideArrows = document.querySelector('.side-arrows');

// 🔹 Open menu
hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  menu.setAttribute('aria-hidden', 'false');
  sideArrows.style.display = 'none';

  // Hide the hamburger while menu is open
  hamburger.style.display = 'none';
});

// 🔹 Close menu
menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  menu.setAttribute('aria-hidden', 'true');
  sideArrows.style.display = '';

  // Show hamburger again
  hamburger.style.display = 'flex';
});

// Optional: close if clicking outside the menu (overlay behavior)
window.addEventListener('click', (e) => {
  if (menu.classList.contains('active') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    sideArrows.style.display = '';
    hamburger.style.display = 'flex';
  }
});

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

