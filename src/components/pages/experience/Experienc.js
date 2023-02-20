import React from "react";
import "./Experienc.css";
import ListOfExperience from "./ListOfExperience.js";
import ListOfEductions from "./ListOfEductions.js";
const Experienc = () => {
  return (
    <section id="experienc">
      <div className="title">
        <h1>Professional Experience</h1>
      </div>
      <div className="experienc">
        <div class="timeline">
          <div class="outer">
            {ListOfExperience.map((experience, index) => {
              return (
                <>
                  <div class="card">
                    <div class="info">
                      <div>
                        <h3 class="position">{experience.title}</h3>
                        <h4 class="dates">
                          {experience.startDate} - {experience.endDate}
                        </h4>
                      </div>
                      <h4 class="place">{experience.place}</h4>
                      <h5 class="location">{experience.location}</h5>
                      <ul>
                        {experience.description.map((list, index) => {
                          return <li>{list}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <h1 class="title">Eductions</h1>
          <div class="outer">
            {ListOfEductions.map((eduction, index) => {
              return (
                <>
                  <div class="card">
                    <div class="info">
                      <div>
                        <h3 class="position">
                          {eduction.course} - {eduction.title}
                        </h3>
                        <h4 class="dates">
                          {eduction.startYear} - {eduction.endYear}
                        </h4>
                      </div>
                      <h4 class="place">{eduction.institution}</h4>
                      <h5 class="location">{eduction.location}</h5>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experienc;
