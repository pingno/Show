import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-form-section">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="social-media-section">
        <h2 className="section-title">Follow Me</h2>
        <div className="social-media-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            Twitter
          </a>
        </div>
      </div>

      <div className="contact-info-section">
        <h2 className="section-title">Contact Info</h2>
        <p>Email: peang@example.com</p>
        <p>Location: Dallas, Texas</p>
      </div>
    </div>
  );
};

export default Contact;
