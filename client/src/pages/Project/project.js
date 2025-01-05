import React from "react";
import "./project.css";
import Footer from "../../components/footer";
import Navbar from "../../components/navBar";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const projects = [
  {
    title: "LeaseNow",
    duration: "Sept 2024 – Oct 2024",
    description: [
      "Designed and implemented a responsive platform for renters to search and reserve apartments.",
      "Built the front end with React.js and Vite.js, achieving cross-browser compatibility and dynamic UI functionality.",
      "Developed backend APIs with Node.js and Express.js, reducing response times by 30%.",
      "Optimized database performance with PostgreSQL and secured authentication with JWT and bcrypt.",
    ],
    tools: [
      "TypeScript",
      "React.js",
      "Vite.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Bcrypt",
    ],
    githubLink: "https://github.com/Jalennorris/leaseNow",
  },
  {
    title: "Wellness Horizons Clinic",
    duration: "Aug 2024 – Sep 2024",
    description: [
      "Developed a responsive website for booking appointments and managing patient care.",
      "Enhanced patient engagement and bookings by 20% through a seamless UI using React.js.",
      "Reduced server response times by 30% with efficient backend architecture using Node.js and Express.js.",
      "Ensured secure data storage and query optimization with PostgreSQL.",
    ],
    tools: ["React.js", "Node.js", "Express.js", "PostgreSQL", "HTML", "CSS"],
    githubLink: "https://github.com/Jalennorris/Wellness-Horizon-Clinic",
  },
  {
    title: "Messenger App",
    duration: "May 2024 – July 2024",
    description: [
      "Developed a real-time messaging app for user communication.",
      "Built the front end with React.js, HTML, and CSS for an intuitive interface.",
      "Implemented real-time messaging with Node.js and Express, reducing delivery time by 40%.",
    ],
    tools: ["React.js", "Node.js", "Express.js", "HTML", "CSS"],
    githubLink: "https://github.com/Jalennorris/chat-app",
  },
  {
    title: "Platter",
    duration: "Dec 2024 – Present",
    description: [
      "Led full-stack development for a mobile app offering real-time posts, messaging, and notifications.",
      "Built the front end with React Native and TypeScript, and the back end with Spring Boot and Java.",
      "Optimized performance and scalability, targeting a user base of 50,000+ users.",
    ],
    tools: [
      "React Native",
      "TypeScript",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "JavaScript",
    ],
    githubLink: "https://github.com/Jalennorris/Platter",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <Navbar />
      <div className="projects-container">
        <section className="projects" aria-label="Projects Section">
          <h1>My Projects</h1>
          <div className="project-list">
            {projects.map((project, index) => (
              <div
                className={`project-card project-${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={index}
              >
                <h2>{project.title}</h2>
                <p>
                  <strong>{project.duration}</strong>
                </p>
                <ul>
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="tools-section">
                  <h3>Tools & Frameworks</h3>
                  <ul className="tools-list">
                    {project.tools.map((tool, idx) => (
                      <li key={idx}>{tool}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub size={20} /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
