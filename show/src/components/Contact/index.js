import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me</h1>
      
      <div className="profile-picture">
        <img src="your-profile-pic-url" alt="Profile" />
      </div>
      
      <div className="personal-info">
        <div className="info-item">
          <strong>Email:</strong> <a href="mailto:pngo93@gmail.com">pngo93@gmail.com</a>
        </div>
        <div className="info-item">
          <strong>Location:</strong> Dallas, TX
        </div>
        <div className="info-item">
          <strong>Age:</strong> 30
        </div>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      
      <div className="resume-download">
        <a href="your-resume-url" target="_blank" rel="noopener noreferrer">Download My Resume</a>
      </div>
      
      <form className="contact-form">
        <h2>Send Me a Message</h2>
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
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      
      <div className="map-location">
        <h2>My Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.7778939454684!2d-96.80889362476436!3d32.7762711809797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99587cdd4387%3A0x24346d38282f4cf1!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1670000000000!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
