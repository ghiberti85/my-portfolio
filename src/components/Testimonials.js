import React from "react";
import { testimonials } from "../data";
import "../components/style/testimonials.scss";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="title">
        <h1 className="">Client Testimonials</h1>
        <div className="list">
          {testimonials.map((testimonial) => (
            <div className="container">
              <div className="quote">
                <p className="">{testimonial.quote}</p>
                <div className="image">
                  <img alt="testimonial" src={testimonial.image} className="" />
                  <span className="info-container">
                    <span className="name">{testimonial.name}</span>
                    <span className="company">{testimonial.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
