import React from "react";
import "./Slider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const leftArrow = <FontAwesomeIcon icon="fa-solid fa-chevron-left" />;
const rightArrow = <FontAwesomeIcon icon="fa-solid fa-chevron-right" />;

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >

      <i class={direction === "next" ? "fa-solid fa-chevron-right" : "fa-solid fa-chevron-left" }></i>
      {/* { direction === "next" ? rightArrow : leftArrow } */}
    </button>
  );
}