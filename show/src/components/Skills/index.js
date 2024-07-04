import React from 'react';
import './Skills.css'; // Make sure to link your CSS file

const skillsData = [
  { name: 'JavaScript', description: 'Experienced with ES6+ syntax and modern frameworks like React.', icon: 'path/to/javascript-icon.png' },
  { name: 'CSS', description: 'Proficient in responsive design, Flexbox, and CSS Grid.', icon: 'path/to/css-icon.png' },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              <img src={skill.icon} alt={`${skill.name} Icon`} />
            </div>
            <h2 className="skill-title">{skill.name}</h2>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;