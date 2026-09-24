import { useState } from "react";
import "../styles/styles.css";
import useReveal from "../hooks/useReveal";
import Lightbox from "./LightBox";

import project1 from "../assets/mental.JPG";
import project2 from "../assets/safiri.JPG";
import project3 from "../assets/fashion.JPG";
import project4 from "../assets/calo.png";
import project5 from "../assets/chat.png";
import project6 from "../assets/gist.JPG";
import project7 from "../assets/tranquil1.JPG";

const projects = [
  {
    id: 1,
    title: "Mental Health Awareness App",
    description:
      "A web application that helps users browse different mental disorders and read more about them, track mental health symptoms and get related WHO resources.",
    images: [project1, project2],
    technologies: ["HTML5", "Custom CSS", "JavaScript"],
    link: "https://mental-health-three.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Mental-Health",
  },
  {
    id: 2,
    title: "Safiri Central Kenya",
    description:
      "An interactive app with search and filters that displays places you can visit around central Kenya, their directions, budget and booking functionalities.",
    images: [project2],
    technologies: ["React.js", "API Integration", "Django", "Tailwind CSS"],
    link: "https://django-vacation-finder-capstone.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Django-vacation-finder-capstone",
  },
  {
    id: 3,
    title: "Fashion Store Web Application",
    description:
      "An e-commerce platform for browsing different apparels according to categories, adding to cart, ordering, and tracking fashion apparel.",
    images: [project3],
    technologies: ["HTML5", "JavaScript", "Custom CSS"],
    link: "https://javascript-capstone.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Fashion-E-Commerce",
  },
  {
    id: 4,
    title: "Calorie Tracker",
    description:
      "A Calorie Tracker app that allows you to add food, calculate calories, and gives you advice on how to go forward depending on the total number of calories.",
    images: [project4],
    technologies: ["Django", "Python", "Tailwind CSS"],
    link: "https://django-calorie-tracker-sxmp.onrender.com/",
    github: "https://github.com/Joy-Ngugi/django-calorie-tracker",
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "A platform for users to create posts, comment, like, and follow others — similar to Instagram, Telegram or TikTok. Easy to navigate and use.",
    images: [project5],
    technologies: ["Django", "React.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/Joy-Ngugi/socialmedia-django",
  },
  {
    id: 6,
    title: "GitHub Gist Tracker",
    description:
      "A full-stack GitHub Gist Tracker allowing users to authenticate, view, create, and manage their Gists with a clean, responsive UI.",
    images: [project6],
    technologies: ["NextAuth", "Next.js", "MongoDB"],
    link: "https://gist-tracker.netlify.app/",
    github: "https://github.com/Joy-Ngugi/github-gist-tracker",
  },
  {
    id: 7,
    title: "Lounging Site — Tranquil Stays",
    description:
      "A fully responsive Airbnb-style booking website with dynamic forms, mobile-friendly navigation, background slideshows, and interactive features.",
    images: [project7],
    technologies: ["HTML5", "CSS", "JavaScript"],
    link: "https://air-bnb-six-pink.vercel.app/",
    github: "https://github.com/Joy-Ngugi/AirBnb",
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