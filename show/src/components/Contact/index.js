import React from 'react';
import './Contact.css'; // Importing the CSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="profile-picture">
        {/* You can replace this with an <img> tag if you have a profile picture */}
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
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default ContactPage;

