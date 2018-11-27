import React, { Component } from "react";
import "./Experience.css";
import ImageGallery from "react-image-gallery";

export class Experience extends Component {
  render() {
    const kaylinsKitchenImages = [
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542652254/kaylins-kitchen-login.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542652257/kaylins-kitchen-auth0.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542652256/kaylins-kitchen-home1.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542652256/kaylins-kitchen-home2.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542652255/kaylins-kitchen-pantry1.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542652254/kaylins-kitchen-pantry2.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542652257/kaylins-kitchen-profile1.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542652254/kaylins-kitchen-profile2.jpg"
      }
    ];

    const airBnBCloneImages = [
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542661292/airbb-home.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542661291/airbb-search-page.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542661289/airbb-search-date-selector.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542661289/airbb-one-home.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542661289/airbb-one-home-stripe-googlemaps.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1542661289/airbb-become-host.jpg"
      }
    ];
    return (
      <div className="experience">
        <div className="experience-container">
          <div className="eperience-skills">
            <h1 className="experience-text">Experience</h1>
            {/* <div className="skills-container">
              <h2 className="skills-title">Skills</h2>
              <h3 className="skills-text">
                React.js | Node.js | Javascript | Redux.js | SASS | Express.js |
                PostgreSQL | Digital Ocean | AWS elastic Beanstalk
              </h3>
            </div> */}
          </div>
          <div />
          <div className="projects-container">
            <div className="project-container">
              <h1 className="project-title">Kaylin's Kitchen</h1>
              <p className="project-description">
                Kaylin's kitchen is a recipe search based website. A user can
                make an account and add ingredients they have on-hand. The user
                will be shown and be able to save full recipes according to what
                ingredients the user has.
                Visit the site&nbsp;
                <a href="https://kaylinskitchen.ninja" rel="noopener noreferrer" target="_blank">
                  here!
                </a>
                <br />
                <br /> Tech Used:
                <br /> React.js | Node.js | Javascript | Redux.js | Express.js |
                PostgreSQL | CircleCi | AWS Elastic Beanstalk
              </p>
              <ImageGallery
                className="image-gallery"
                items={kaylinsKitchenImages}
                showFullscreenButton={true}
                showPlayButton={false}
                showThumbnails={false}
              />
            </div>
            <div className="project-container">
              <h1 className="project-title">AirBnB Clone</h1>
              <p className="project-description">
                AirBnB Clone is a website that connect hosts and guests. Hosts
                can list their homes for rent.
                <br />
                Guests can find and book homes based on dates and destination.
                Visit the site&nbsp;
                <a href="https://www.airbnb.com/" rel="noopener noreferrer" target="_blank">
                  here!
                </a>
                <br />
                <br /> Tech Used:
                <br /> React.js | Node.js | Javascript | Redux.js | Express.js |
                PostgreSQL | SASS | Digital Ocean
              </p>
              <ImageGallery
                className="image-gallery"
                items={airBnBCloneImages}
                showFullscreenButton={true}
                showPlayButton={false}
                showThumbnails={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
