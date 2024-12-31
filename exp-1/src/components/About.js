import React from 'react'; // You can replace this with an image related to Apple
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Apple</h2>
        <p>
          At Apple, we are driven by the pursuit of innovation, creating groundbreaking products that have transformed the way people live and work. Since our founding, we have been committed to pushing the boundaries of technology, design, and customer experience.
        </p>
        <p>
          From the revolutionary iPhone to the powerful Mac and intuitive iPad, our mission is to design products that enrich people's lives. We believe in making the world better by empowering individuals through technology.
        </p>
        <p>Our core values include:</p>
        <ul>
          <li><span className="highlight">Innovation:</span> Constantly reimagining what technology can do for people.</li>
          <li><span className="highlight">User Experience:</span> Delivering products that combine simplicity, power, and elegance.</li>
          <li><span className="highlight">Sustainability:</span> Committed to reducing our environmental footprint and advancing renewable energy.</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
