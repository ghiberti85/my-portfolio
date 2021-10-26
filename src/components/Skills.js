import React from "react";
import { skills } from "../data";
import "../components/style/skills.scss";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="intro">
          <h1>Skills &amp; Technologies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="list">
          {skills.map((skill) => (
            <div key={skill} className="list-item">
              <div className="item">
                <span>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
