// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]); // Cart state

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <header>
        <nav className="navbar">
          <div className="logo">Royal Seats</div>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/products" className="nav-link">Products</Link></li>
            <li><Link to="/cart" className="nav-link">Cart ({cart.length})</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
