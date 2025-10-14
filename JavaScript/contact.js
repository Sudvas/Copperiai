if (menu && hamburger) {
  window.addEventListener('click', (e) => {
    if (menu.classList.contains('active') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('active');
      menu.setAttribute('aria-hidden', 'true');
      sideArrows.style.display = '';
      hamburger.style.display = 'flex';
    }
  });
}

if (loginModal) {
  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
      loginError.textContent = "";
    }
  });
}
