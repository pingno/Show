import React from 'react';
import './Experience.css';

const experiences = [
  {
    year: '2018',
    title: 'Software Engineer at XYZ Corp',
    description: 'Developed web applications using React and Node.js. Collaborated on large-scale projects, improving efficiency by 30%.'
  },
  {
    year: '2020',
    title: 'Senior Developer at ABC Inc.',
    description: 'Led a team of 5 developers in creating a new e-commerce platform. Implemented CI/CD pipelines and increased deployment speed by 50%.'
  },
  {
    year: '2022',
    title: 'Technical Lead at Tech Solutions',
    description: 'Managed technical strategy and development for enterprise software solutions. Oversaw the migration to cloud services, reducing costs by 20%.'
  }
  // Add more experiences here
];

const Experience = () => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">My Experience</h1>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-point" data-year={experience.year}></div>
            <div className="timeline-content">
              <h2>{experience.year}</h2>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
