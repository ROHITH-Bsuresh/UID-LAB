// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setUserId(null);
    navigate('/login');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="home">
      {/* Auth Buttons Container (Below Navbar) */}
      <div className="auth-buttons-container">
        {userId ? (
          <div className="auth-buttons">
            <span>Welcome, {userId}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Royal Seats E-Commerce</h1>
        <p>Discover exclusive products at unbeatable prices!</p>
      </div>

      {/* About Us Section */}
      <div className="intro">
        <h2>About Us</h2>
        <p>At Royal Seats, we offer a curated selection of high-quality products just for you.</p>
      </div>
    </div>
  );
};

export default Home;
