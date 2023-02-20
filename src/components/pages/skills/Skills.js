import React from "react";
import "./Skills.css";
import ListOfSkills from "./ListOfSkills.js";
import Slider from "../../Slider/Slider";

const Skills = () => {
  return (
    <section id="skills">
    <div className="skills">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <Slider data={ListOfSkills} />  
    </div>
    
    </section>
  );
};

export default Skills;
