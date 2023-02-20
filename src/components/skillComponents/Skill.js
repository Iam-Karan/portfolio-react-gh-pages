import React from "react";
import "./Skill.css";

const Skill = (props) => {
  const images = props.images;
  const names = props.names;
  return (
    <div className="skillsList">
      {images.map((skillImage, index) => {
        return (
          <div className="skill">
            <img src={skillImage} alt="skillImage" />
            <h3>{names[index]}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
