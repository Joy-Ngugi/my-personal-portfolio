// import React from "react";
import "../styles/styles.css";
// import aboutImage from "../assets/profile.jpeg"; // Add an image of yourself or a relevant graphic

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Left: Image */}
        {/* <div className="about-image-container">
          <img src={aboutImage} alt="About Me" className="about-image" />
        </div> */}

        {/* Right: Text */}
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Im a passionate <strong>Software Engineer</strong> specializing in building modern, 
            scalable, and user-friendly web applications. I have expertise in 
            <span className="highlight"> React.js, JavaScript, Python, Django, and Tailwind CSS.</span> 
            I love creating interactive and visually appealing digital experiences.
          </p>
          <p className="about-description">
            With a strong foundation in <strong>frontend and backend development</strong>, I focus on 
            building applications that are both functional and aesthetically pleasing. 
            I am constantly learning new technologies to stay ahead in the ever-evolving tech industry.
          </p>

          <div className="about-skills">
            <h3>Skills & Technologies:</h3>
            <ul className="skills-list">
              <li>💻 React.js & JavaScript (ES6+)</li>
              <li>🖥️ Python & Django</li>
              <li>🌐 HTML5, CSS3 & Tailwind</li>
              <li>⚙️ REST APIs & Database Management</li>
              <li>🛠️ Git, GitHub & Deployment</li>
            </ul>
          </div>

          <a href="#projects" className="btn">View My Projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;