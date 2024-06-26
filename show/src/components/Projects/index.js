import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project One',
    description: 'This is a detailed description of Project One. It includes features like ...',
    image: 'path/to/image1.jpg',
    link: 'https://github.com/username/project-one',
  },
  {
    title: 'Project Two',
    description: 'This is a detailed description of Project Two. It involves technologies such as ...',
    image: 'path/to/image2.jpg',
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
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
