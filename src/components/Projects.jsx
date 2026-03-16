import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>AI CV Analyzer</h3>
          <p>
            A full-stack web application that allows recruiters to create job
            postings, upload CVs, and analyze candidate qualifications based on
            job requirements.
          </p>

          <div className="tech">
            Python • Django • React • PostgreSQL • REST APIs
          </div>

          <div className="project-links">
            <a href="https://github.com/yandaThabethe/cv-analyzer" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            My personal portfolio built with React to showcase projects,
            technical skills, and professional experience.
          </p>

          <div className="tech">
            React • Vite • JavaScript • CSS
          </div>

          <div className="project-links">
            <a href="https://github.com/yandaThabethe/portfolio" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a
              href="https://portfolio-nine-sepia-28.vercel.app/"
              target="_blank"
              rel="noreferrer"
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