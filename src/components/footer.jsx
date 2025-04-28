import React from 'react';
import githubIcon from '../assets/github (1).png';
import linkedinIcon from '../assets/LinkedIn_icon.svg.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Joy Ngugi</h2>
          <h2>Software Developer</h2>
        </div>
        <div className="footer-nav">
          <ul>
            <li><a href="#about">About</a></li>
            
            <li><a href="#projects">Projects</a></li>
           
            <li><a href="#contact">Contact</a></li>
            <li><a href="#hero">Back To top</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://github.com/Joy-Ngugi" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a> 
          <a href="https://www.linkedin.com/in/joy-ngugi-72b9432a0/"  target="_blank" className="social-icon" rel="noopener noreferrer" ><img src={linkedinIcon} alt="GitHub" /></a> 
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Personal Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
