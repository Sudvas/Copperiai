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

document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-now1");
  const cartToggle = document.getElementById("cart-toggle");
  const cartDropdown = document.getElementById("cart-dropdown");
  const cartItemsList = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const emptyCartMsg = document.getElementById("empty-cart");

  let cart = [];

  // Add to cart
  buyButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const card = button.closest(".card");
      const itemName = card.querySelector("h3").textContent;
      const itemPrice = card.querySelector(".price").textContent;

      const item = { name: itemName, price: itemPrice };
      cart.push(item);
      updateCart();
    });
  });

  cartToggle.addEventListener("click", (e) => {
    e.preventDefault();
    cartDropdown.classList.toggle("hidden");
  });

  function updateCart() {
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
});
