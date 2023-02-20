import React from "react";
import "./projects.css";
import Project from "./projectComoponent/Project";
import ListOfProjects from "./ListOfProjects.js";

const Projects = () => {
  return (
    <section id="projects">
    <div className="title">
      <h1>Projects</h1>
      <div className="projects">
        {ListOfProjects.map((project, index) => {
          return <Project key={index} project={project} />;
        })}
      </div>
    </div>
    </section>
  );
};

export default Projects;
