// Cart functionality
let cart = [];

// Function to add a book to the cart
function addToCart(book) {
    const existingItem = cart.find(item => item.id === book.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...book, quantity: 1 });
    }

    updateCartCount();
}

// Function to update the cart count in the header
function updateCartCount() {
    const cartLink = document.getElementById('cart-link');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartLink.textContent = `Cart (${totalItems})`;
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const bookCard = event.target.closest('.book-card');
        const book = {
            id: bookCard.dataset.id,
            title: bookCard.dataset.title,
            price: parseFloat(bookCard.dataset.price),
        };

        addToCart(book);
        alert(`${book.title} has been added to your cart!`);
    });
});
