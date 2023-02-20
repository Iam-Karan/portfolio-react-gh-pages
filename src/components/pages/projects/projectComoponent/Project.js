import React from "react";
import "./Project.css";

const Project = (props) => {
  const projectData = props.project;

  const links = (
    <div class="product-bottom-details">
      <div class="product-price">Github Links:</div>
      <div class="product-links">
        {projectData.githubLink.map((link) => {
          return <a href={link.link}>{link.tech}</a>;
        })}
      </div>
    </div>
  );

  return (
    <>
      <div class="product-card">
        <div class="product-tumb">
          <img src={projectData.image} alt="" />
        </div>
        <div class="product-details">
          <span class="product-catagory">{projectData.type}</span>
          <h4>{projectData.name}</h4>
          <p>{projectData.description}</p>
          {projectData.githubLink.length > 0 ? links : <></>}
        </div>
      </div>
    </>
  );
};

export default Project;
