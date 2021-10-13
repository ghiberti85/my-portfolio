import React from "react";
import { projects } from "../data";
import "../components/style/projects.scss";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="projects-container">
        <div className="intro-text">
          <h1>Websites I've Built</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a href={project.link} key={project.image}>
              <div className="flex-relative">
                <img
                  alt="gallery"
                  className="project-image"
                  src={project.image}
                />
                <div className="project-text">
                  <h2 className="project-subtitle">{project.subtitle}</h2>
                  <h1 className="project-title">{project.title}</h1>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
