import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-text">
                    Portfolio by Peang Ngo
                </div>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/peang-ngo-840860112/" className="footer-link">
                        <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/pingno" className="footer-link">
                        <i className="fa-brands fa-github"></i> GitHub
                    </a>
                    {/* Uncomment if needed
                    <a href="https://github.com/pingno/Capstone-Project" className="footer-link">
                        <i className="fa-solid fa-code-commit"></i> Repo
                    </a>
                    */}
                </div>
            </div>
        </div>
    );
}

export default Footer;