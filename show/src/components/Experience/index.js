import React, { useState } from 'react';
import './Experience.css'; // Assuming you're using a CSS file for styling

const experiences = [
  { type: 'school', startAge: 18, endAge: 22, description: 'Bachelor\'s Degree in Computer Science' },
  { type: 'job', startAge: 23, endAge: 27, description: 'Software Engineer at XYZ Corp' },
  { type: 'volunteer', startAge: 25, endAge: 26, description: 'Volunteer at ABC Nonprofit' },
  // Add more experiences as needed
];

const Experience = () => {
    const currentAge = 30; // You can dynamically calculate this if needed
    const ageRange = currentAge - 18;
    const [hoveredExp, setHoveredExp] = useState(null);
  
    const getFlagColor = (type) => {
      switch(type) {
        case 'school':
          return 'red';
        case 'job':
          return 'blue';
        case 'volunteer':
          return 'green';
        default:
          return 'gray';
      }
    };
  
    return (
      <div className="timeline-container">
        <div className="timeline-bar">
          {Array.from({ length: ageRange + 1 }, (_, i) => 18 + i).map((age, index) => (
            <div key={index} className="timeline-marker" style={{ left: `${(index / ageRange) * 100}%` }}>
              <span className="timeline-age">{age}</span>
            </div>
          ))}
          {experiences.map((exp, index) => {
            const startPercent = ((exp.startAge - 18) / ageRange) * 100;
            const endPercent = ((exp.endAge - 18) / ageRange) * 100;
  
            return (
              <div
                key={index}
                className="experience-flag"
                style={{
                  left: `${startPercent}%`,
                  width: `${endPercent - startPercent}%`,
                  backgroundColor: getFlagColor(exp.type)
                }}
                onMouseEnter={() => setHoveredExp(index)}
                onMouseLeave={() => setHoveredExp(null)}
              >
                {hoveredExp === index && (
                  <div className="experience-description">
                    {exp.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="legend">
          <div className="legend-item">
            <div className="legend-color red"></div>
            <span>School</span>
          </div>
          <div className="legend-item">
            <div className="legend-color blue"></div>
            <span>Job</span>
          </div>
          <div className="legend-item">
            <div className="legend-color green"></div>
            <span>Volunteer</span>
          </div>
        </div>
      </div>
    );
  };
  

export default Experience;
