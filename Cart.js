// Sample cart functionality
let cart = [];
const books = [
  { id: 1, title: "Book Title 1", price: 10.99 },
  { id: 2, title: "Book Title 2", price: 12.99 },
  { id: 3, title: "Book Title 3", price: 8.99 }
];

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItems = document.querySelector(".cart-items");
  const totalPriceElement = document.querySelector(".total-price");

  addToCartButtons.forEach((button) =>
    button.addEventListener("click", () => {
      const bookId = button.closest(".book-card").getAttribute("data-id");
      const book = books.find((b) => b.id === parseInt(bookId));
      cart.push(book);
      renderCart();
    })
  );

  function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      total += item.price;
      const cartItem = document.createElement("div");
      cartItem.textContent = `${item.title} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(cartItem);
    });

    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
  }
});
