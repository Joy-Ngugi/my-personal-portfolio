import "../styles/styles.css";
import useReveal from "../hooks/useReveal";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaCode,
  FaServer,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";

const About = () => {
  const { ref, visible } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`section about-section reveal ${visible ? "is-visible" : ""}`}
    >
      <div className="about-text">
        <span className="eyebrow">About</span>
        <h2 className="about-title">
          Building software that actually works for people.
        </h2>

        <p className="about-description">
          I'm a <strong>Software Engineer</strong> focused on building practical
          digital solutions for both <strong>web and mobile</strong>. I work
          across the frontend and backend, turning ideas and real-world business
          needs into applications that are reliable, easy to use, and built to
          grow. My experience includes{" "}
          <span className="highlight">
            React.js, React Native, JavaScript, Python, Django, REST APIs,
            PostgreSQL, and Tailwind CSS.
          </span>
        </p>

        <p className="about-description">
          I enjoy working on projects where software needs to do more than simply
          look good — it needs to solve a problem and work reliably for the
          people using it. Whether I'm developing a{" "}
          <strong>
            mobile application, web application, or backend system
          </strong>
          , I focus on understanding how the product will actually be used and
          building it with that in mind. I'm continuously expanding my skills
          while turning what I learn into software that can be used in the real
          world.
        </p>

        <a href="#projects" className="btn-ghost" style={{ marginTop: "1rem" }}>
          View My Projects
        </a>
      </div>

      <div className="about-skills">
        <h3>Skills & Technologies</h3>

        <div className="skill-groups">
          <div className="skill-group">
            <h4>Frontend</h4>
            <ul className="skills-list">
              <li><FaReact color="#61DAFB" className="icons" /> React.js & Vite</li>
              <li><FaReact color="#61DAFB" className="icons" /> React Native & Expo</li>
              <li><SiJavascript color="#F7DF1E" className="icons" /> JavaScript (ES6+)</li>
              <li><SiTailwindcss color="#06B6D4" className="icons" /> Tailwind & NativeWind</li>
            </ul>
          </div>

          <div className="skill-group">
            <h4>Backend</h4>
            <ul className="skills-list">
              <li><FaPython color="#3776AB" className="icons" /> Python & Django</li>
              <li><SiDjango color="#092E20" className="icons" /> Django REST Framework</li>
              <li><FaCode color="#6C63FF" className="icons" /> REST APIs & JWT Auth</li>
              <li><SiPostgresql color="#4169E1" className="icons" /> PostgreSQL & SQLite</li>
            </ul>
          </div>

          <div className="skill-group">
            <h4>Tools & Deployment</h4>
            <ul className="skills-list">
              <li><FaGitAlt color="#F05032" className="icons" /> Git & GitHub</li>
              <li><FaServer color="#6B7280" className="icons" /> Deployment & Server Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;