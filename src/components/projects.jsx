import { useState } from "react";
import "../styles/styles.css";
import useReveal from "../hooks/useReveal";
import Lightbox from "./LightBox";
import mentalhealth1 from "../assets/1MentalHealth.png";
import mentalhealth2 from "../assets/2MentalHealth.png";
import mentalhealth3 from "../assets/3MentalHealth.png";
import mentalhealth4 from "../assets/4MentalHealth.png";
import mentalhealth5 from "../assets/5MentalHealth.png";
import mentalhealth6 from "../assets/6MentalHealth.png";

import vacation1 from "../assets/VacationFinder1.png";
import vacation2 from "../assets/VacationFinder2.png";
import vacation3 from "../assets/VacationFinder3.png";
import vacation4 from "../assets/VacationFinder4.png";
import vacation5 from "../assets/VacationFinder5.png";
import vacation6 from "../assets/VacationFinder6.png";
import vacation7 from "../assets/VacationFinder7.png";
import vacation8 from "../assets/VacationFinder8.png";
import vacation9 from "../assets/VacationFinder9.png";

import fashion1 from "../assets/Fashion1.png";
import fashion2 from "../assets/Fashion2.png";
import fashion3 from "../assets/Fashion3.png";
import fashion4 from "../assets/Fashion4.png";
import fashion5 from "../assets/Fashion5.png";

import calorie1 from "../assets/Calorie-Tracker1.png";
import calorie2 from "../assets/Calorie-Tracker2.png";
import calorie3 from "../assets/Calorie-Tracker3.png";
import calorie4 from "../assets/Calorie-Tracker4.png";

import socialMedia1 from "../assets/Social-Media1.png";
import socialMedia2 from "../assets/Social-Media2.png";
import socialMedia3 from "../assets/Social-Media3.png";
import socialMedia4 from "../assets/Social-Media4.png";
import socialMedia5 from "../assets/Social-Media5.png";
import socialMedia6 from "../assets/Social-Media6.png";
import socialMedia7 from "../assets/Social-Media7.png";

import Laundromat1 from "../assets/Laundromat1.png";
import Laundromat2 from "../assets/Laundromat2.png";
import Laundromat3 from "../assets/Laundromat3.png";
import Laundromat4 from "../assets/Laundromat4.png";
import Laundromat5 from "../assets/Laundromat5.png";
import Laundromat6 from "../assets/Laundromat6.png";
import Laundromat7 from "../assets/Laundromat7.png";
import Laundromat8 from "../assets/Laundromat8.png";
import Laundromat9 from "../assets/Laundromat9.png";
import Laundromat10 from "../assets/Laundromat10.png";
import Laundromat11 from "../assets/Laundromat11.png";

import Airbnb1 from "../assets/Airbnb1.png";
import Airbnb2 from "../assets/Airbnb2.png";
import Airbnb3 from "../assets/Airbnb3.png";
import Airbnb4 from "../assets/Airbnb4.png";
import Airbnb5 from "../assets/Airbnb5.png";
import Airbnb6 from "../assets/Airbnb6.png";
import Airbnb7 from "../assets/Airbnb7.png";
import Airbnb8 from "../assets/Airbnb8.png";
import Airbnb9 from "../assets/Airbnb9.png";

import portfolio1 from "../assets/NdichuPortfolio1.png";
import portfolio2 from "../assets/NdichuPortfolio2.png";
import portfolio3 from "../assets/NdichuPortfolio3.png";
import portfolio4 from "../assets/NdichuPortfolio4.png";
import portfolio5 from "../assets/NdichuPortfolio5.png";


const projects = [
  {
    id: 1,
    title: "Mental Health Awareness App",
    description:
      "A web application that helps users browse different mental disorders and read more about them, track mental health symptoms and get related WHO resources.",
    images: [mentalhealth1, mentalhealth2, mentalhealth3, mentalhealth4, mentalhealth5, mentalhealth6],
    technologies: ["HTML5", "Custom CSS", "JavaScript"],
    link: "https://mentalhealth-six.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Mental-Health",
  },
  {
    id: 2,
    title: "Safiri Central Kenya",
    description:
      "An interactive app with search and filters that displays places you can visit around central Kenya, their directions, budget and booking functionalities.",
    images: [vacation1, vacation2, vacation3, vacation4, vacation5, vacation6, vacation7, vacation8, vacation9],
    technologies: ["React.js", "API Integration", "Django", "Tailwind CSS"],
    link: "https://kenya-vacation-finder.vercel.app",
    github: "https://github.com/Joy-Ngugi/Vacation-finder",
  },
  {
    id: 3,
    title: "Fashion Store Web Application",
    description:
      "An e-commerce platform for browsing different apparels according to categories, adding to cart, ordering, and tracking fashion apparel.",
    images: [fashion1, fashion2, fashion3, fashion4, fashion5],
    technologies: ["HTML5", "JavaScript", "Custom CSS"],
    link: "https://fashione-commerce.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Fashion-E-Commerce",
  },
  {
    id: 4,
    title: "Calorie Tracker",
    description:
      "A Calorie Tracker app that allows you to add food, calculate calories, and gives you advice on how to go forward depending on the total number of calories.",
    images: [calorie1, calorie2, calorie3, calorie4],
    technologies: ["Django", "Python", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/Joy-Ngugi/django-calorie-tracker",
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "A platform for users to create posts, comment, like, and follow others — similar to Instagram, Telegram or TikTok. Easy to navigate and use.",
    images: [socialMedia1, socialMedia2, socialMedia3, socialMedia4, socialMedia5, socialMedia6, socialMedia7],
    technologies: ["Django", "React.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/Joy-Ngugi/socialmedia-django",
  },

  {
    id: 6,
    title: "Spin Bar Laundromat",
    description:
      "A modern laundromat web application that lets customers book washing and drying machines, schedule pickup and delivery, and track their laundry from drop-off to ready-for-collection.",
    images: [Laundromat1, Laundromat2, Laundromat3, Laundromat4, Laundromat5, Laundromat6, Laundromat7, Laundromat8, Laundromat9, Laundromat10, Laundromat11],
    technologies: ["HTML5", "CSS", "JavaScript"],
    link: "https://spin-bar-laundry.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Spin-Bar-Laundry",
  },

  {
    id: 7,
    title: "Lounging Site — Tranquil Stays",
    description:
      "A fully responsive Airbnb-style booking website with dynamic forms, mobile-friendly navigation, background slideshows, and interactive features.",
    images: [Airbnb1, Airbnb2, Airbnb3, Airbnb4, Airbnb5, Airbnb6, Airbnb7, Airbnb8, Airbnb9],
    technologies: ["HTML5", "CSS", "JavaScript"],
    link: "https://air-bnb-six-pink.vercel.app/",
    github: "https://github.com/Joy-Ngugi/AirBnb",
  },
   {
    id: 8,
    title: "Personal Portfolio Website for Francis Ndichu Kamau",
    description:
      "A responsive React portfolio website showcasing Francis Ndichu Kamau's graphic design and video editing work, experience, and contact details.",
    images: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
    technologies: ["React js", "Tailwind CSS", "JavaScript"],
    link: "https://ndichu-graphic-designer-website.vercel.app/",
    github: "https://github.com/Joy-Ngugi/ndichu-graphic-designer-website",
  },
];

const featured = projects.slice(0, 3);
const rest = projects.slice(3);

const ProjectLinks = ({ project }) => (
  <div className="project-links">
    {project.link && project.link !== "#" && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Live Demo
      </a>
    )}
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-secondary"
    >
      GitHub
    </a>
  </div>
);

/* Thumbnail wrapper with the hover gallery icon */
const ProjectThumbnail = ({ project, onOpen }) => {
  const hasGallery = project.images.length > 1;

  return (
    <div
      className={`project-thumb ${hasGallery ? "has-gallery" : ""}`}
      onClick={hasGallery ? () => onOpen(project) : undefined}
      role={hasGallery ? "button" : undefined}
      tabIndex={hasGallery ? 0 : undefined}
      onKeyDown={
        hasGallery
          ? (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpen(project);
            }
          }
          : undefined
      }
      aria-label={hasGallery ? `View ${project.images.length} images of ${project.title}` : undefined}
    >
      <img
        src={project.images[0]}
        alt={project.title}
        className="project-image"
      />

      {hasGallery && (
        <span className="gallery-badge" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="14" height="14" rx="2" />
            <path d="M21 7v12a2 2 0 0 1-2 2H7" />
          </svg>
          <span>{project.images.length}</span>
        </span>
      )}

      {hasGallery && (
        <span className="gallery-hint" aria-hidden="true">
          View gallery
        </span>
      )}
    </div>
  );
};

const Projects = () => {
  const { ref, visible } = useReveal({ threshold: 0.05 });
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className={`section projects-section reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="projects-header">
          <span className="eyebrow">Portfolio</span>
          <h2 className="projects-title">Selected Projects</h2>
          <p className="projects-subtitle">
            A curated selection of recent work showcasing full-stack development,
            API integration, and clean UI craft.
          </p>
        </div>

        <div className="featured-label">Featured Work</div>

        <div className="featured-projects reveal-stagger">
          {featured.map((project) => (
            <article key={project.id} className="project-featured">
              <ProjectThumbnail
                project={project}
                onOpen={setActiveProject}
              />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="tech-item">{tech}</li>
                  ))}
                </ul>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>

        <div className="featured-label">More Work</div>

        <div className="projects-grid reveal-stagger">
          {rest.map((project) => (
            <article key={project.id} className="project-card">
              <ProjectThumbnail
                project={project}
                onOpen={setActiveProject}
              />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="tech-item">{tech}</li>
                  ))}
                </ul>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeProject && (
        <Lightbox
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};

export default Projects;