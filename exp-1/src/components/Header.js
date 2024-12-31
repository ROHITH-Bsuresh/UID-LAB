import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png'; // Replace with an Apple logo

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Apple Logo" className="logo-image" />
        <h1>Apple</h1>
      </div>
      <div className="header-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
