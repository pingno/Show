import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Hi, I'm Peang, a passionate full stack developer with experience in
        building web applications using the latest technologies. I specialize in
        JavaScript, React, Node.js, and have a keen interest in UX/UI design. I
        love solving complex problems and constantly strive to learn and grow as
        a developer.
      </p>

      <p className="about-values">
        My values have always aligned with building a skillset where I could
        help people, whether that's in business development, creative work, or
        personal growth.
      </p>

      <div className="about-section">
        <h3 className="section-title">Education</h3>
        <ul className="education-list">
          <li>High School - School of Business and Management at Yvonne A. Ewell Townview Center</li>
          <li>College - Associates degree in Liberal Arts</li>
          <li>App Academy - Full Stack Web Development</li>
        </ul>
      </div>

      <div className="about-section">
        <h3 className="section-title">Experience</h3>
        <ul className="experience-list">
          <li>8+ years in customer service/hospitality positions</li>
          <li>8+ years of involvement with the Dallas Dance Community</li>
        </ul>
      </div>

      <div className="about-section">
        <h3 className="section-title">Background</h3>
        <p>From Dallas, Texas, born and raised. One of my favorite things to do was dance. I started breakdancing with a group of friends in high school which led me to opportunities with my local dance community. There I spent 8 years involved with a non-profit dance organization where I held various roles ranging from student, student director, youth coordinator, adult team director, and social media coordinator.</p>
      </div>

      <div className="about-section">
        <h3 className="section-title">Hobbies & Interests</h3>
        <p className="about-hobbies">
          In my spare time, I love exploring new technologies, participating in hackathons, and contributing to open-source projects. I'm also an avid gamer and enjoy playing Valorant and League of Legends.
        </p>
      </div>

      <div>
        <h3>Timeline</h3>
        Dallas, Texas
        30 years old
        Chinese American

        Breakdancer
      </div>
    </div>
  );
};

export default About;
