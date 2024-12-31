// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => { // Receiving cartItems as prop
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start shopping to add items!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
