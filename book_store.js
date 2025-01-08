import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your-public-key-from-stripe');

function App() {
  const handleCheckout = async (book) => {
    const { data: session } = await axios.post('http://localhost:5000/create-checkout-session', {
      items: [{ title: book.title, price: book.price }]
    });

    const stripe = await stripePromise;
    stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="App">
      <h1>Book Store</h1>
      <div className="book-list">
        {books.map((book) => (
          <div className="book-item" key={book._id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>{book.description}</p>
            <p>${book.price}</p>
            <button onClick={() => handleCheckout(book)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

