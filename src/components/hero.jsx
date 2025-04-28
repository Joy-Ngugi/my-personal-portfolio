// import React from "react";
import "../styles/styles.css";
import profilePic from "../assets/profile (2).jpeg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
    <div className="overlay"></div>
    <div className="hero-content">
    <div className="profile-frame">
          <img src={profilePic} alt="Your Name" className="profile-pic" />
        </div>
      <h2 className="fade-in">
        Hi, I am <span className="highlight">Joy Ngugi</span>
      </h2>
      <p className="fade-in">
        A passionate <strong>Software Engineer</strong> crafting modern web experiences.
      </p>
      <a href="#projects" className="btn slide-in">View My Work</a>
    </div>
  </section>
  );
};

export default Hero;