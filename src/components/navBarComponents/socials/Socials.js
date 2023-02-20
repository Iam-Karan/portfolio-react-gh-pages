import React, { Component } from "react";
import "./Socials.css";
import Resume from "../../../resume/KARANPATEL-RESUME.pdf";

class Socials extends Component {
  render() {
    return (
      <div className="socials">
        <ul className="socialLists">
          <li className="socialIcon">
            <a href="https://www.linkedin.com/in/karan-patel-681a6810a/">
              {" "}
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li className="socialIcon">
            <a href="https://github.com/Iam-Karan">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="socialIcon">
            <a href={Resume} download="KARANPATEL-RESUME.pdf">
              <i class="fa-solid fa-file-pdf"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Socials;
