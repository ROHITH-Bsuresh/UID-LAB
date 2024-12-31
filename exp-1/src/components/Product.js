import React from 'react';
 // Import the CSS for styling
import '../styles/Product.css';
function Product({ image, title, description, price, onAddToCart }) {
  return (
    <div id="products" className="product">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="add-to-cart-button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
