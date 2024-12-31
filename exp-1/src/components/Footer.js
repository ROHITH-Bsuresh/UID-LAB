import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Apple Inc. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#product">Products</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
