// src/components/Skills/index.js

import React from 'react';
import './Skills.css';
import skillsData from './skillsData';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skillsData.map(skill => (
          <div className="skill-card" key={skill.id}>
            <div className="skill-icon">
              <img src={skill.icon} alt={`${skill.name} Icon`} />
            </div>
            <h2 className="skill-name">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;