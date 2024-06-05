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

      <p>
        My values have always aligned with building a skillset where I could
        help people, whether that's in business development, creative work, or
        personal growth.
      </p>

      <div>My Journey</div>

      <p>
        High School - School of Business and Management at Yvonne E. Ewell
        Townview Center
      </p>
      <p>College - Associates degree in Liberal Arts</p>

      <p>App Academy - Full Stack Web Development </p>
    </div>
  );
};

export default About;
