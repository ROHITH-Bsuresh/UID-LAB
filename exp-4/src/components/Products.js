// src/components/Products.js
import React from 'react';
import './Products.css';

const Products = ({ addToCart }) => { // Receiving addToCart as a prop

  const products = [
    { id: 1, name: 'Leather Chair', price: '$150', imgUrl: 'https://via.placeholder.com/150/92c952' },
    { id: 2, name: 'Classic Sofa', price: '$300', imgUrl: 'https://via.placeholder.com/150/771796' },
    { id: 3, name: 'Wooden Table', price: '$200', imgUrl: 'https://via.placeholder.com/150/24f355' },
    { id: 4, name: 'Modern Lamp', price: '$50', imgUrl: 'https://via.placeholder.com/150/d32776' }
  ];

  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="product-cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imgUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
