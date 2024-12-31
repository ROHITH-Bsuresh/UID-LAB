import React, { useState } from 'react';
import './list.css';

function AddItemForm() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [stock, setStock] = useState('');

  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newItem = {
      productName,
      productDescription,
      stock: Number(stock),
    };

    setItems([...items, newItem]);
    setProductName('');
    setProductDescription('');
    setStock('');
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Product Description:</label>
          <input 
            type="text" 
            value={productDescription} 
            onChange={(e) => setProductDescription(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Prize:</label>
          <input 
            type="number" 
            value={stock} 
            onChange={(e) => setStock(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-btn">Add Product</button>
      </form>

      <h3>Product List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">
            <div className="item-details">
              <span className="item-name">{item.productName}</span>
              <span className="item-description">{item.productDescription}</span>
            </div>
            <span className="item-stock">Prize: {item.stock}</span>
            <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddItemForm;