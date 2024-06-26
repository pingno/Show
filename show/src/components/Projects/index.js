import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project One',
    description: 'This is a brief description of Project One. It showcases ...',
    link: 'https://github.com/username/project-one',
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of Project Two. It focuses on ...',
    link: 'https://github.com/username/project-two',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;