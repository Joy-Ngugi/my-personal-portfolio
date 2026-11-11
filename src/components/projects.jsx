import { useState } from "react";
import "../styles/styles.css";
import useReveal from "../hooks/useReveal";
import Lightbox from "./LightBox";

import proshule1 from "../assets/proshule1.png";
import proshule2 from "../assets/proshule2.png";
import proshule3 from "../assets/proshule3.png";
import proshule4 from "../assets/proshule4.png";
import proshule5 from "../assets/proshule5.png";
import proshule6 from "../assets/proshule6.png";
import proshule7 from "../assets/proshule7.png";
import proshule8 from "../assets/proshule8.png";
import proshule9 from "../assets/proshule9.png";
import proshule10 from "../assets/proshule10.png";
import proshule11 from "../assets/proshule11.png";
import proshule12 from "../assets/proshule12.png";
import proshule13 from "../assets/proshule13.png";
import proshule14 from "../assets/proshule14.png";
import proshule15 from "../assets/proshule15.png";
import proshule16 from "../assets/proshule16.png";
import proshule17 from "../assets/proshule17.png";
import proshule18 from "../assets/proshule18.png";
import proshule19 from "../assets/proshule19.png";
import proshule20 from "../assets/proshule20.png";
import proshule21 from "../assets/proshule21.png";
import proshule22 from "../assets/proshule22.png";
import proshule23 from "../assets/proshule23.png";
import proshule24 from "../assets/proshule24.png";
import proshule25 from "../assets/proshule25.png";
import proshule26 from "../assets/proshule26.png";
import proshule27 from "../assets/proshule27.png";
import proshule28 from "../assets/proshule28.png";
import proshule29 from "../assets/proshule29.png";
import proshule30 from "../assets/proshule30.png";
import proshule31 from "../assets/proshule31.png";
import proshule32 from "../assets/proshule32.png";
import proshule33 from "../assets/proshule33.png";
import proshule34 from "../assets/proshule34.png";

import wms1 from "../assets/wms1.png";
import wms2 from "../assets/wms2.png";
import wms3 from "../assets/wms3.png";
import wms4 from "../assets/wms4.png";
import wms5 from "../assets/wms5.png";
import wms6 from "../assets/wms6.png";
import wms7 from "../assets/wms7.png";
import wms8 from "../assets/wms8.png";
import wms9 from "../assets/wms9.png";
import wms10 from "../assets/wms10.png";
import wms11 from "../assets/wms11.png";
import wms12 from "../assets/wms12.png";
import wms13 from "../assets/wms13.png";
import wms14 from "../assets/wms14.png";
import wms15 from "../assets/wms15.png";

import pos1 from "../assets/POS1.png";
import pos2 from "../assets/POS2.png";
import pos3 from "../assets/POS3.png";
import pos4 from "../assets/POS4.png";
import pos5 from "../assets/POS5.png";
import pos6 from "../assets/POS6.png";
import pos7 from "../assets/POS7.png";
import pos8 from "../assets/POS8.png";
import pos9 from "../assets/POS9.png";
import pos10 from "../assets/POS10.png";
import pos11 from "../assets/POS11.png";
import pos12 from "../assets/POS12.png";
import pos13 from "../assets/POS13.png";
import pos14 from "../assets/POS14.png";
import pos15 from "../assets/POS15.png";
import pos16 from "../assets/POS16.png";
import pos17 from "../assets/POS17.png";
import pos18 from "../assets/POS18.png";
import pos19 from "../assets/POS19.png";
import pos20 from "../assets/POS20.png";
import pos21 from "../assets/POS21.png";
import pos22 from "../assets/POS22.png";
import pos23 from "../assets/POS23.png";
import pos24 from "../assets/POS24.png";
import pos25 from "../assets/POS25.png";

import hris1 from "../assets/hris1.png";
import hris2 from "../assets/hris2.png";
import hris3 from "../assets/hris3.png";
import hris4 from "../assets/hris4.png";
import hris5 from "../assets/hris5.png";
import hris6 from "../assets/hris6.png";
import hris7 from "../assets/hris7.png";
import hris8 from "../assets/hris8.png";
import hris9 from "../assets/hris9.png";
import hris10 from "../assets/hris10.png";
import hris11 from "../assets/hris11.png";
import hris12 from "../assets/hris12.png";
import hris13 from "../assets/hris13.png";
import hris14 from "../assets/hris14.png";
import hris15 from "../assets/hris15.png";
import hris16 from "../assets/hris16.png";
import hris17 from "../assets/hris17.png";
import hris18 from "../assets/hris18.png";
import hris19 from "../assets/hris19.png";
import hris20 from "../assets/hris20.png";
import hris21 from "../assets/hris21.png";
import hris22 from "../assets/hris22.png";
import hris23 from "../assets/hris23.png";
import hris24 from "../assets/hris24.png";
import hris25 from "../assets/hris25.png";
import hris26 from "../assets/hris26.png";
import hris27 from "../assets/hris27.png";
import hris28 from "../assets/hris28.png";
import hris29 from "../assets/hris29.png";
import hris30 from "../assets/hris30.png";
import hris31 from "../assets/hris31.png";
import hris32 from "../assets/hris32.png";
import hris33 from "../assets/hris33.png";
import hris34 from "../assets/hris34.png";
import hris35 from "../assets/hris35.png";
import hris36 from "../assets/hris36.png";
import hris37 from "../assets/hris37.png";
import hris38 from "../assets/hris38.png";
import hris39 from "../assets/hris39.png";
import hris40 from "../assets/hris40.png";
import hris41 from "../assets/hris41.png";
import hris42 from "../assets/hris42.png";
import hris43 from "../assets/hris43.png";
import hris44 from "../assets/hris44.png";
import hris45 from "../assets/hris45.png";
import hris46 from "../assets/hris46.png";
import hris47 from "../assets/hris47.png";
import hris48 from "../assets/hris48.png";
import hris49 from "../assets/hris49.png";

import ticketyetu1 from "../assets/ticketyetu1.png";
import ticketyetu2 from "../assets/ticketyetu2.png";
import ticketyetu3 from "../assets/ticketyetu3.png";
import ticketyetu4 from "../assets/ticketyetu4.png";
import ticketyetu5 from "../assets/ticketyetu5.png";
import ticketyetu6 from "../assets/ticketyetu6.png";
import ticketyetu7 from "../assets/ticketyetu7.png";
import ticketyetu8 from "../assets/ticketyetu8.png";
import ticketyetu9 from "../assets/ticketyetu9.png";
import ticketyetu10 from "../assets/ticketyetu10.png";
import ticketyetu11 from "../assets/ticketyetu11.png";
import ticketyetu12 from "../assets/ticketyetu12.png";
import ticketyetu13 from "../assets/ticketyetu13.png";

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
    title: "Warehouse Management System",
    description:
      "WMS is a warehouse management system designed to streamline inventory, warehouse operations, purchase orders, and order fulfillment across main, regional, and branch warehouses. Developed collaboratively as a company project, I contributed to both web and mobile application development, including dashboards, warehouse workflows, and API integrations.",
    images: [wms1, wms2, wms3, wms4, wms5, wms6, wms7, wms8, wms9, wms10, wms11, wms12, wms13, wms14, wms15],
    technologies: ["React.js", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL", "REST APIs", "Git & GitHub"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Point Of Sale system (POS)",
    description:
      "A company POS and self-checkout system designed to streamline retail transactions, inventory management, and M-Pesa payments across stores. I contributed to the development and integration of features across the web and backend systems while collaborating with other developers.",
    images: [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10, pos11, pos12, pos13, pos14, pos15, pos16, pos17, pos18, pos19, pos20, pos21, pos22, pos23, pos24, pos25],
    technologies: ["React.js", "React Native", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL", "REST APIs"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Human Resource Information System",
    description:
      "HRIS (Human Resource Information System) is a web-based platform designed to streamline employee management, recruitment, leave, payroll, HR operations, and other human resource processes. Developed collaboratively as a company project, I contributed to building and improving various modules and user interfaces alongside other developers.",
    images: [hris1, hris2, hris3, hris4, hris5, hris6, hris7, hris8, hris9, hris10, hris11, hris12, hris13, hris14, hris15, hris16, hris17, hris18, hris19, hris20, hris21, hris22, hris23, hris24, hris25, hris26, hris27, hris28, hris29, hris30, hris31, hris32, hris33, hris34, hris35, hris36, hris37, hris38, hris39, hris40, hris41, hris42, hris43, hris44, hris45, hris46, hris47, hris48, hris49],
    technologies: ["React.js", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL", "REST APIs", "Git & GitHub"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "School Management System - Prosule",
    description:
      "Proshule is a comprehensive school management system designed to streamline academic, administrative, and operational processes for educational institutions. Developed collaboratively as part of a company project, I contributed to the development and enhancement of its web-based features alongside other developers.",
    images: [proshule1, proshule2, proshule3, proshule4, proshule5, proshule6, proshule7, proshule8, proshule9, proshule10, proshule11, proshule12, proshule13, proshule14, proshule15, proshule16, proshule17, proshule18, proshule19, proshule20, proshule21, proshule22, proshule23, proshule24, proshule25, proshule26, proshule27, proshule28, proshule29, proshule30, proshule31, proshule32, proshule33, proshule34],
    technologies: ["React js", "Tailwind CSS", "Django", "Django REST Framework (DRF)", "PostgreSQL", "Git & GitHub"],
    link: "#",
    github: "#",
  },

  {
    id: 5,
    title: "Ticket Yetu",
    description:
      "Ticket Yetu is an event ticketing and access control platform that enables event staff to verify attendee entry through QR code scanning and monitor access to designated event rooms through RFID reader integration, ensuring attendees access the rooms included in their purchased tickets.",
    images: [ticketyetu1, ticketyetu2, ticketyetu3, ticketyetu4, ticketyetu5, ticketyetu6, ticketyetu7, ticketyetu8, ticketyetu9, ticketyetu10, ticketyetu11, ticketyetu12, ticketyetu13],
    technologies: ["React.js", "React Native", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL", "Git & GitHub"],
    link: "#",
    github: "#",
  },



  {
    id: 6,
    title: "Safiri Central Kenya",
    description:
      "An interactive app with search and filters that displays places you can visit around central Kenya, their directions, budget and booking functionalities.",
    images: [vacation1, vacation2, vacation3, vacation4, vacation5, vacation6, vacation7, vacation8, vacation9],
    technologies: ["React.js", "API Integration", "Django", "Tailwind CSS"],
    link: "https://kenya-vacation-finder.vercel.app",
    github: "https://github.com/Joy-Ngugi/Vacation-finder",
  },
  {
    id: 7,
    title: "Fashion Store Web Application",
    description:
      "An e-commerce platform for browsing different apparels according to categories, adding to cart, ordering, and tracking fashion apparel.",
    images: [fashion1, fashion2, fashion3, fashion4, fashion5],
    technologies: ["HTML5", "JavaScript", "Custom CSS"],
    link: "https://fashione-commerce.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Fashion-E-Commerce",
  },
  {
    id: 8,
    title: "Spin Bar Laundromat",
    description:
      "A modern laundromat web application that lets customers book washing and drying machines, schedule pickup and delivery, and track their laundry from drop-off to ready-for-collection.",
    images: [Laundromat1, Laundromat2, Laundromat3, Laundromat4, Laundromat5, Laundromat6, Laundromat7, Laundromat8, Laundromat9, Laundromat10, Laundromat11],
    technologies: ["HTML5", "CSS", "JavaScript"],
    link: "https://spin-bar-laundry.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Spin-Bar-Laundry",
  },
  {
    id: 9,
    title: "Lounging Site — Tranquil Stays",
    description:
      "A fully responsive Airbnb-style booking website with dynamic forms, mobile-friendly navigation, background slideshows, and interactive features.",
    images: [Airbnb1, Airbnb2, Airbnb3, Airbnb4, Airbnb5, Airbnb6, Airbnb7, Airbnb8, Airbnb9],
    technologies: ["HTML5", "CSS", "JavaScript"],
    link: "https://air-bnb-six-pink.vercel.app/",
    github: "https://github.com/Joy-Ngugi/AirBnb",
  },
  {
    id: 10,
    title: "Personal Portfolio Website for Francis Ndichu Kamau",
    description:
      "A responsive React portfolio website showcasing Francis Ndichu Kamau's graphic design and video editing work, experience, and contact details.",
    images: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
    technologies: ["React js", "Tailwind CSS", "JavaScript"],
    link: "https://ndichu-graphic-designer-website.vercel.app/",
    github: "https://github.com/Joy-Ngugi/ndichu-graphic-designer-website",
  },
  {
    id: 11,
    title: "SereniMind — Mental Health Awareness",
    description:
      "Learn about mental health disorders, take a self-assessment, and track your wellbeing.",
    images: [mentalhealth1, mentalhealth2, mentalhealth3, mentalhealth4, mentalhealth5, mentalhealth6],
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://mentalhealth-six.vercel.app/",
    github: "https://github.com/Joy-Ngugi/Mental-Health",
  },
  {
    id: 12,
    title: "Calorie Tracker",
    description:
      "A Calorie Tracker app that allows you to add food, calculate calories, and gives you advice on how to go forward depending on the total number of calories.",
    images: [calorie1, calorie2, calorie3, calorie4],
    technologies: ["Django", "Python", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/Joy-Ngugi/django-calorie-tracker",
  },
  {
    id: 13,
    title: "Social Media App",
    description:
      "A platform for users to create posts, comment, like, and follow others — similar to Instagram, Telegram or TikTok. Easy to navigate and use.",
    images: [socialMedia1, socialMedia2, socialMedia3, socialMedia4, socialMedia5, socialMedia6, socialMedia7],
    technologies: ["Django", "React.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/Joy-Ngugi/socialmedia-django",
  },
];

const featured = projects.slice(0, 5);
const rest = projects.slice(5);

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