const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');
const body = document.body;
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('menu-active');
  const isActive = menu.classList.contains('active');
  menu.setAttribute('aria-hidden', !isActive);
});

menuClose.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
  body.classList.remove('menu-active');
  menu.setAttribute('aria-hidden', 'true');
});

document.addEventListener('click', (event) => {
  if (menu.classList.contains('active') && !menu.contains(event.target) && !hamburger.contains(event.target)) {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('menu-active');
    menu.setAttribute('aria-hidden', 'true');
  }
});

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    errorMsg.textContent = "Please fill in both fields.";
  } else {
    errorMsg.textContent = "";
    alert("Login successful!");
    loginModal.style.display = 'none';
  }
});
