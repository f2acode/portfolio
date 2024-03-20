/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import "./About.css";

import tech from "../images/tech-animation.gif";

const imageAltText = "purple and blue abstract background";

const description =
  "Computer scientist 👨‍🔬 and Master in modeling complex systems (USP). Self-taught with experience in front end, back end, mobile and data engineering.";

const skillsList = [
  "Team management",
  "Software development",
  "Data engineering",
  "Software architecture",
  "Software design",
  "Entrepreneurship",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={tech} alt={imageAltText} />
      <div className="about-container">
        <h2>Hi, I&apos;m Felipe Augusto!</h2>
        <h3>Software/Data professional & Entrepreneur</h3>
        <hr />
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="detail">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
