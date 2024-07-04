import React, { useState } from 'react';
import './Skills.css';

const skillsData = [
  { id: 'skill1', name: 'JavaScript', description: 'Experienced with ES6+ syntax and modern frameworks like React.', icon: 'path/to/javascript-icon.png' },
  { id: 'skill2', name: 'CSS', description: 'Proficient in responsive design, Flexbox, and CSS Grid.', icon: 'path/to/css-icon.png' },
  // Add more skills as needed
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skillsData.map(skill => (
          <div className="skill-card" key={skill.id} onClick={() => openModal(skill)}>
            <div className="skill-icon">
              <img src={skill.icon} alt={`${skill.name} Icon`} />
            </div>
            <h2 className="skill-title">{skill.name}</h2>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2 className="modal-skill-title">{selectedSkill.name}</h2>
            <p className="modal-skill-description">{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;