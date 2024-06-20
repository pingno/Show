import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me</h1>

      <div className="profile-picture">
        <img src="your-profile-pic-url" alt="Profile" />
      </div>

      <div className="personal-info">
        <div className="info-item">
          <strong>Email:</strong>{" "}
          <a href="mailto:pngo93@gmail.com">pngo93@gmail.com</a>
        </div>
        <div className="info-item">
          <strong>Location:</strong> Dallas, TX
        </div>
        <div className="info-item">
          <strong>Age:</strong> 30
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>

      <div className="resume-download">
        <a href="your-resume-url" target="_blank" rel="noopener noreferrer">
          Download My Resume
        </a>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.5448287752484!2d-96.77980948476117!3d32.78867618097027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea03711d86305%3A0x5d7b97bf14a159c6!2s4405%20Swiss%20Ave%2C%20Dallas%2C%20TX%2075210%2C%20USA!5e0!3m2!1sen!2sus!4v1628072920984!5m2!1sen!2sus"
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
