import React from 'react';
import './Home.css';

// Add imports for other tech stack images as needed

const Home = () => {
  return (
    <div className="home-container">
      {/* Centered column */}
      <div className="center-column">
        {/* Circle image of you */}
        {/* <img src={profileImage} alt="Profile" className="profile-image" /> */}

        {/* Text description */}
        <p className="description">Hi there, My name is Peang Ngo!</p>
        <div>"I'm going to become king of the pirates!"</div>

        <p>Thanks for stopping by my page.</p>
        <p>Here's a glimpse into my journey:</p>
        
        <p>These are the tech-stacks I've learned during my coding bootcamp:</p>
        <p>I'm currently learning about TypeScript, Angular, and Vue!</p>

        <p>Let's connect!</p>

        {/* Tech stacks */}
        <div className="tech-stacks">
          {/* <img src={htmlIcon} alt="HTML" className="tech-stack-icon" />
          <img src={cssIcon} alt="CSS" className="tech-stack-icon" />
          <img src={jsIcon} alt="JavaScript" className="tech-stack-icon" /> */}
          {/* Add more tech stack images here */}
        </div>

        {/* Add the resume button */}
        <a href="/path/to/your/resume.pdf" download className="resume-button">Download Resume</a>
      </div>
    </div>
  );
};

export default Home;
