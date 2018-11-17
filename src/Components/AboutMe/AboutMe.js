import React, { Component } from "react";
import "./AboutMe.css";

export class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="my-picture-container">
          <img
            className="sunflower-img"
            src="https://res.cloudinary.com/dclawygaw/image/upload/v1542415818/sunflower.jpg"
            alt="sunflower"
          />
        </div>
        <div className="about-me-container">
          {/* <div className="profile-container"       > */}
          <h1 className="name">Kaylin Anderson</h1>
          {/* <div className="profile-picture" /> */}
          {/* </div> */}
          <p className="about-me-text">
            ABOUT ME : <br />
            <br />
            Hi! My name is Kaylin Anderson and I am a Web Developer with a
            passion for learning new, exciting technologies. I have recently
            graduated from DevMountain, a fully immersive Web Development
            boot-camp, and am excited to hit the ground running!
            <br />
            <br /> Prior to Web Development, I found a deep passion for the
            medical field. I spend three years working towards my Dental Hygiene
            degree, but soon realized what I loved most about the field was the
            knowledge aspect of going through school. I then decided to pivot
            towards an industry that truly encompasses continuous learning.
            <br />
            <br /> Please feel free to check out my projects below and message
            me if you have anything to talk about. I am sincerely passionate
            about everything I do, and my energetic personality is certainly
            contagious.
            <br />
            <br />
            Thank you for reading!
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
