
import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">

        {/* AI CV Analyzer */}
        <div className="project-card">
          <h3>AI CV Analyzer</h3>

          <p>
            A full-stack recruitment application designed to help
            recruiters manage job postings, upload candidate CVs,
            and evaluate candidate qualifications against job
            requirements.
          </p>

          <h4>Key Features</h4>

          <ul>
            <li>Job posting creation and management</li>
            <li>Candidate CV uploading and parsing</li>
            <li>Candidate qualification and skill matching</li>
            <li>RESTful API integration</li>
            <li>Recruitment management dashboard</li>
          </ul>

          <div className="tech">
            Python • Django • React • PostgreSQL • REST APIs
          </div>

          <div className="project-links">
            <a
              href="https://github.com/yandaThabethe/cv-analyzer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Portfolio Website */}
        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p>
            A responsive personal portfolio developed using React
            and Vite to showcase my software engineering experience,
            technical skills, professional background, and projects.
          </p>

          <h4>Key Features</h4>

          <ul>
            <li>Responsive interface for desktop and mobile</li>
            <li>Modern glassmorphism design</li>
            <li>Professional experience and skills showcase</li>
            <li>Interactive navigation and contact links</li>
            <li>Deployment using Vercel</li>
          </ul>

          <div className="tech">
            React • Vite • JavaScript • HTML • CSS
          </div>

          <div className="project-links">
            <a
              href="https://github.com/yandaThabethe/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://portfolio-nine-sepia-28.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;