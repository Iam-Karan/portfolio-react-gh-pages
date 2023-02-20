import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import Skill from "../skillComponents/Skill";

export default function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(1);
  const dataSlider = props.data;
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  
  return (
    <div className="container-slider">
      {dataSlider.map((skills, index) => {
        return (
          <div
            key={skills.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            {/* <img src={product.image} alt="sliderImage" /> */}
            <h3>{skills.name}</h3>
            <Skill images = {skills.image} names = {skills.nameOfImage} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
