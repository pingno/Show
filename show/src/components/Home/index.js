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
        <p>I'm a software engineer, fullstack developer, and a jack-of-all trades!</p>
        <p>My background is pretty diverse</p>

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