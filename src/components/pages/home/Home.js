import React from "react";
import "./Home.css";
import Socials from "../../navBarComponents/socials/Socials";
import HeaderText from "../../navBarComponents/headerText/HeaderText";

const Home = () => {
  return (
    <section id="home">
      <div className="home">
        <div className="home-child">
          <HeaderText />
          <Socials />
        </div>
        <div className="home-child background">
        
        </div>
        
      </div>
    </section>
  );
};

export default Home;
