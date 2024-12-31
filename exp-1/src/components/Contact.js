import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Apple</h2>
        <p>Have questions about our products, need technical support, or looking for more information? We're here to help. Reach out to us through the form below or our contact details, and one of our experts will assist you.</p>
        
        <div className="contact-info">
          <h3>Our Contact Information</h3>
          <p><strong>Email:</strong> support@apple.com</p>
          <p><strong>Phone (Global Support):</strong> +1 800-MY-APPLE</p>
          <p><strong>Address:</strong> Apple Inc., Cupertino, CA 95014, USA</p>
        </div>
        
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
