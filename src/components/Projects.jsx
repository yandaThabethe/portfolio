import React, { useState } from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <h3>Login System</h3>
          <p>
            A full-stack login and authentication system built with React and
            Java.
          </p>

          <div className="tech">React • Java • REST API</div>

          <div className="project-links">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Task Manager</h3>
          <p>A web application for managing tasks and tracking productivity.</p>

          <div className="tech">React • Node.js • PostgreSQL</div>

          <div className="project-links">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            My personal portfolio built with React to showcase my projects and
            skills.
          </p>

          <div className="tech">React • CSS • JavaScript</div>

          <div className="project-links">
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
