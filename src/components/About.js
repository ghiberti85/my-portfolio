import React from "react";
import "../components/style/about.scss";
import coding from "../images/coding.svg";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="text-module">
          <h1>
            Hi, I'm Fernando.
            <br />
            And I love to build amazing Websites.
          </h1>
          <p>
            Web developer, with 4 years of experience in HTML5, CSS3 and
            JavaScript languages. Through JavaScript, I deepened my knowledge in
            technologies such as ReacJS, jQuery, Ajax, TypeScript, Node.js, and
            React Native. <br />
          </p>
          <p>
            Other technologies like Wordpress, Yarn/NPM, Git / GitHub, Visual
            Studio Code, Nodemon, Insomnia and Express integrate my hard skills.
            The soft skills, interpersonal relationships, autonomy, problem
            solving and vision systemic make up my professional profile.
          </p>
          <div className="anchor">
            <a className="contact" href="#contact">
              Work With Me
            </a>
            <a className="projects" href="#projects">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="image">
          <img alt="hero" src={coding} />
        </div>
      </div>
    </section>
  );
}
