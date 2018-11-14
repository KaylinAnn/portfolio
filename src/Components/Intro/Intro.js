import React, { Component } from "react";
import "./Intro.css";

export class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h2>KAYLIN'S PORTFOLIO</h2>
        <div className="message-container">
          <h1>
            Hi there! I'm a Full-stack Web Developer who loves creating new and
            exciting sites.
          </h1>
        </div>
      </div>
    );
  }
}

export default Intro;
