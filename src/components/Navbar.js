import React from "react";
import "../components/style/navbar.scss";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#about" id="about" className="menu-item">
            About
          </a>
          <a href="#projects" id="projects" className="menu-item">
            Past Work
          </a>
          <a href="#skills" id="skills" className="menu-item">
            Skills
          </a>
          <a href="#testimonials" id="testimonials" className="menu-item">
            Testimonials
          </a>
        </nav>
        <a href="#contact" id="contact" className="menu-item">
          Hire Me
        </a>
      </div>
    </header>
  );
}
