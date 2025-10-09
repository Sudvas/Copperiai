document.addEventListener("DOMContentLoaded", () => {
  // === CART FUNCTIONALITY ===
  const cartToggle = document.getElementById("cart-toggle");
  const cartDropdown = document.getElementById("cart-dropdown");
  const checkoutBtn = document.getElementById("checkout-btn");
  let cart = [];

  function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const emptyCartMsg = document.getElementById("empty-cart");

    cartItemsList.innerHTML = "";

    if (cart.length === 0) {
      emptyCartMsg.style.display = "block";
    } else {
      emptyCartMsg.style.display = "none";
      cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.name} - ${item.price}
          <button data-index="${index}">X</button>
        `;
        cartItemsList.appendChild(li);
      });
    }

    cartCount.textContent = cart.length;

    document.querySelectorAll("#cart-items button").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = btn.getAttribute("data-index");
        cart.splice(index, 1);
        updateCart();
      });
    });
  }

  document.querySelectorAll(".buy-now1").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const card = button.closest(".card");
      const itemName = card.querySelector("h3").textContent;
      const itemPrice = card.querySelector(".price").textContent;

      cart.push({ name: itemName, price: itemPrice });
      updateCart();
      alert(`${itemName} added to cart!`);
    });
  });

  cartToggle.addEventListener("click", (e) => {
    e.preventDefault();
    cartDropdown.classList.toggle("hidden");
  });

  checkoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty. Please add some items before checking out.");
    } else {
      alert("Purchase succesful!");
      cart = [];
      updateCart();
    }
  })

  // === SCROLLING CAROUSEL FUNCTIONALITY ===
  document.querySelectorAll(".carousel-container").forEach(container => {
    const track = container.querySelector(".carousel-track");
    const prev = container.nextElementSibling?.querySelector("#prev");
    const next = container.nextElementSibling?.querySelector("#next");

    const card = track.querySelector(".card");
    const cardStyle = window.getComputedStyle(card);
    const gap = parseInt(cardStyle.marginRight || 24); // default gap between cards
    const scrollAmount = card.offsetWidth + gap;

    if (next) {
      next.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    }

    if (prev) {
      prev.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }
  });

  // === SEARCH FUNCTIONALITY ===
  const searchInput = document.querySelector(".search-input");
  const searchResults = document.querySelector(".search-results");
  const cards = document.querySelectorAll(".card");

  searchInput?.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (!query) {
      searchResults.classList.add("hidden");
      return;
    }

    let found = 0;
    cards.forEach(card => {
      const title = card.querySelector("h3").textContent;
      const price = card.querySelector(".price").textContent;

      if (title.toLowerCase().includes(query)) {
        const resultItem = document.createElement("div");
        resultItem.textContent = `${title} - ${price}`;

        resultItem.addEventListener("click", () => {
          cart.push({ name: title, price: price });
          updateCart();
          alert(`${title} added to cart!`);
          searchResults.classList.add("hidden");
        });

        searchResults.appendChild(resultItem);
        found++;
      }
    });

    if (found > 0) {
      searchResults.classList.remove("hidden");
    } else {
      searchResults.classList.add("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-area")) {
      searchResults.classList.add("hidden");
    }
  });
});

// See more card
document.addEventListener('DOMContentLoaded', () => {
    const seeMoreButtons = document.querySelectorAll('.see-more');
    const seeLessButtons = document.querySelectorAll('.see-less');

    seeMoreButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.card');
        card.classList.add('flipped');
      });
    });

    seeLessButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.card');
        card.classList.remove('flipped');
      });
    });
  });

// language flag dropdown
const dropdown = document.getElementById('customLangDropdown');
const selected = dropdown.querySelector('.selected-option');
const optionsContainer = dropdown.querySelector('.dropdown-options');
const options = dropdown.querySelectorAll('.option');

// Toggle options visibility
selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('hidden');
});

// Handle option click
options.forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.getAttribute('data-lang');
    const flag = option.getAttribute('data-flag');

    // Update selected
    selected.innerHTML = `<img src="${flag}" class="flag-icon" alt="${lang}"> <span>${lang}</span>`;

    // Hide dropdown
    optionsContainer.classList.add('hidden');
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    optionsContainer.classList.add('hidden');
  }
});

//Category dropdown page yeah yeah
document.getElementById("categoryDropdown").addEventListener("change", function() {
  const selectedPage = this.value;
  if (selectedPage) {
    window.location.href = selectedPage;
  }
})