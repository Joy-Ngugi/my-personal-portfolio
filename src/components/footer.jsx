import "../styles/styles.css";
import githubIcon from "../assets/github (1).png";
import linkedinIcon from "../assets/LinkedIn_icon.svg.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Joy Ngugi</h2>
          <h2>Software & Mobile Developer</h2>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#hero">Back to top</a></li>
          </ul>
        </nav>

        <div className="footer-social">
          <a
            href="https://github.com/Joy-Ngugi"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/joy-ngugi-72b9432a0/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Ngugi Joy Personal Portfolio. All rights reserved.</p>
        <p>Built with React · Nairobi, Kenya</p>
      </div>
    </footer>
  );
};

export default Footer;