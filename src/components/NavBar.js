import React, { useState } from "react";
import "./NavBar.css";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../images/klogo.png";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div id="header">
        <nav className="navbar">
          <div className="navContainer">
            <Link exact to="/" className="navLogo">
              <div className="logo">
                <img type="image/png" src={Logo} alt="" />
              </div>
            </Link>

            <ul className={click ? "navMenu active" : "navMenu"}>
              <li className="navItem">
                <Link
                  smooth
                  to="/#home"
                  activeClassName="active"
                  className="navLinks"
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
              <li className="navItem">
                <Link
                  smooth
                  to="/#experienc"
                  activeClassName="active"
                  className="navLinks"
                  onClick={handleClick}
                >
                  Experience
                </Link>
              </li>

              <li className="navItem">
                <Link
                  smooth
                  to="/#experienc"
                  activeClassName="active"
                  className="navLinks"
                  onClick={handleClick}
                >
                  Eduction
                </Link>
              </li>
              <li className="navItem">
                <Link
                  smooth
                  to="/#skills"
                  activeClassName="active"
                  className="navLinks"
                  onClick={handleClick}
                >
                  Skills
                </Link>
              </li>
              <li className="navItem">
                <Link
                  smooth
                  to="/#projects"
                  activeClassName="active"
                  className="navLinks"
                  onClick={handleClick}
                >
                  Projects
                </Link>
              </li>
              <li className="navItem">
                <Link
                  smooth
                  to="/#ContactMe"
                  activeClassName="active"
                  className="navLinks"
                  onClick={handleClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="navIcon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
