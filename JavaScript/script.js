// === GLOBAL CART STATE & FUNCTION ===
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

  // Remove item from cart
  document.querySelectorAll("#cart-items button").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      cart.splice(index, 1);
      updateCart();
    });
  });
}

// === CARD CAROUSEL ===
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let index = 0;

function updateCarousel() {
  const cardWidth = cards[0].getBoundingClientRect().width + 40;
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

// === CART LOGIC ===
document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-now1");
  const cartToggle = document.getElementById("cart-toggle");
  const cartDropdown = document.getElementById("cart-dropdown");

  buyButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const card = button.closest(".card");
      const itemName = card.querySelector("h3").textContent;
      const itemPrice = card.querySelector(".price").textContent;

      const item = { name: itemName, price: itemPrice };
      cart.push(item);
      updateCart();

      alert(`${itemName} added to cart!`);
    });
  });

  cartToggle.addEventListener("click", (e) => {
    e.preventDefault();
    cartDropdown.classList.toggle("hidden");
  });
});

// === SEARCH BAR ===
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const searchResults = document.querySelector(".search-results");
  const cards = document.querySelectorAll(".card");

  function searchItems() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (!query) {
      searchResults.classList.add("hidden");
      return;
    }

    let found = 0;
    cards.forEach(card => {
      const title = card.querySelector("h3").textContent;
      const price = card.querySelector(".price")?.textContent || "";
      if (title.toLowerCase().includes(query)) {
        const resultItem = document.createElement("div");
        resultItem.textContent = `${title} - ${price}`;

        // === ADD TO CART ON CLICK (NO SCROLL) ===
        resultItem.addEventListener("click", () => {
          const itemName = title;
          const itemPrice = price;

          const item = { name: itemName, price: itemPrice };
          cart.push(item);
          updateCart();

          alert(`${itemName} added to cart!`);
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
  }

  searchInput.addEventListener("input", searchItems);

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-area")) {
      searchResults.classList.add("hidden");
    }
  });
});



const langDropdown = document.getElementById('langDropdown');

const flags = {
  "English": "images/flag-uk.png",
  "Deutsch": "images/flag-germany.png",
  "Français": "images/flag-france.png"
};

function updateFlag() {
  const selectedLang = langDropdown.value;
  const flagUrl = flags[selectedLang] || flags["English"];

  langDropdown.style.backgroundImage = `url('${flagUrl}'), url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`;
}

langDropdown.addEventListener('change', updateFlag);
window.addEventListener('DOMContentLoaded', updateFlag);

