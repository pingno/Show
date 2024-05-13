import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="left-column">
        {/* You can place your logo or site name here */}
        <Link to="/" className="logo">Logo</Link>
      </div>
      <div className="middle-column"></div>
      <div className="right-column">
        {/* Main navigation links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            {/* Example of a dropdown menu */}
            <div className="dropdown">
              <button className="dropdown-toggle">Projects</button>
              <div className="dropdown-menu">
                <Link to="/projects/project1" className="dropdown-item">Project 1</Link>
                <Link to="/projects/project2" className="dropdown-item">Project 2</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link">Experience</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;