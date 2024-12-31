import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="intro">
        <h2>Innovating the Future, One Product at a Time</h2>
        <p>At Apple, we are passionate about creating products that redefine the way you connect, create, and live. From the revolutionary iPhone to the powerful Mac, our cutting-edge technology continues to shape the world.</p>
      </div>

      <div className="cta">
        <h3>Discover the Next Generation of Innovation</h3>
        <p>Explore our latest products and services, or get personalized support for all your Apple devices. Experience the future of technology today.</p>
        <a href="#contact" className="cta-button">Learn More</a>
      </div>
    </section>
  );
}

export default Home;
