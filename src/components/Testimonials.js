import React from "react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="">
        <h1 className="">Client Testimonials</h1>
        <div className="">
          {testimonials.map((testimonial) => (
            <div className="">
              <div className="">
                <p className="">{testimonial.quote}</p>
                <div className="">
                  <img alt="testimonial" src={testimonial.image} className="" />
                  <span className="">
                    <span className="">{testimonial.name}</span>
                    <span className="">{testimonial.company}</span>
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
