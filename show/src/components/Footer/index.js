import React from 'react';
import './Footer.css'
import { Link } from "react-router-dom";

function Footer(){


    return (
        <>
        
        <div className="footer-container">

            <div style={{paddingBottom: "15px"}}>
                Portfolio by Peang Ngo
                </div>

<div>
            <a href="https://www.linkedin.com/in/peang-ngo-840860112/" className="footer-link">
             <i className="fa-brands fa-linkedin"></i>
             Linkedin
            </a>
            
             <a href="https://github.com/pingno" className="footer-link" style={{paddingLeft: "25px"}}>
             <i className="fa-brands fa-github"></i>
                Github
             </a>

             {/* <a href="https://github.com/pingno/Capstone-Project" className="footer-link" style={{paddingLeft: "25px"}}>
             <i class="fa-solid fa-code-commit"></i>
                Repo
             </a> */}


</div>
            
        </div>
        
        </>
    )

}

export default Footer