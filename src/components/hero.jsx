import { useRef } from "react";
import "../styles/styles.css";
import profilePic from "../assets/profile (2).jpeg";

const Hero = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = frameRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
  };

  const handleMouseLeave = () => {
    const el = frameRef.current;
    if (el) el.style.transform = "";
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-copy">
        <span className="eyebrow">Software Engineer · Nairobi</span>
        <h1>
          Hi, I'm <span className="highlight">Joy Ngugi</span>.
        </h1>
        <p>
          I build software that solves real problems — from mobile apps and APIs
          to complete business systems.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>

      <div
        className="hero-portrait"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="profile-frame" ref={frameRef}>
          <img src={profilePic} alt="Joy Ngugi" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;