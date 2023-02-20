import React, { Component } from "react";
import './HeaderText.css';

class HeaderText extends Component {
  render() {
    return (
      <div className="harderText">
        <h1>
          Hi, I'm <span>Karan.</span>
        </h1>
        <h3>I am &lt;Developer/&gt;;</h3>
      </div>
    );
  }
}

export default HeaderText;
