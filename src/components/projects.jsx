// import React from "react";
import "../styles/styles.css";
import project1 from "../assets/mental.JPG";  // Add screenshots of your projects
import project2 from "../assets/safiri.JPG";
import project3 from "../assets/fashion.JPG";
import project4 from "../assets/calo.png";
import project5 from "../assets/chat.png";

const projects = [
  {
    id: 1,
    title: "Mental Health Awareness App",
    description:
      "A web application that helps users browse different mental disorders and read more about them, track mental health symptoms and get related WHO resources.",
    image: project1,
    technologies: ["HTML5", "Custom CSS", "Javascript"],
    link: "https://mental-health-three.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Mental-Health",
  },
  {
    id: 2,
    title: "Safiri Central Kenya",
    description:
      "An interactive app with search and filters. that displays places you can visit around central kenya , thier directions, budget and booking functionalities.",
    image: project2,
    technologies: ["React.js(frontend)", "API Integration", "Django(Backend)", "Tailwind Css"],
    link: "https://django-vacation-finder-capstone.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Django-vacation-finder-capstone",
  },
  {
    id: 3,
    title: "Fashion Store Web Application",
    description:
      "An e-commerce platform for browsing different appralels according to categories, adding to cart, ordering, and tracking fashion apparel.",
    image: project3,
    technologies: ["HTML5", "JavaScript", "Custom CSS"],
    link: "https://javascript-capstone.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Fashion-E-Commerce",
  },
  {
    id: 4,
    title: "Calorie Tracker",
    description:
      "A Calorie Tracker app that allows you to add food, calculate calories, and gives you advice on how to go forward depending on the total number of calories",
    image: project4,
    technologies: ["Django", "Python", "Tailwind CSS"],
    link: "https://django-calorie-tracker.vercel.app/",
    github: "https://github.com/Joy-Ngugi/django-calorie-tracker",
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "A platform for users to create posts, comment, like, and follow others similar to instagram, Telegram or Tiktok. Easy to navigate and Use",
    image: project5,
    technologies: ["Django", "React.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/Joy-Ngugi/socialmedia-django",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        Here are some of my recent projects showcasing my skills and creativity.
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="tech-item">{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
