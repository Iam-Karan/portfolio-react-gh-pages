import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/home/Home";
import Skills from "./components/pages/skills/Skills";
import Projects from "./components/pages/projects/Projects";
import Experienc from "./components/pages/experience/Experienc";
import ContactMe from "./components/pages/contactMe/ContactMe";
import Rights from "./components/pages/rights/Rights";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home />
        <Experienc />
        <Skills />
        <Projects />
        <ContactMe />
        <Rights />
      </Router>
    </>
  );
}

export default App;
