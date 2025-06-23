import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Services.css";

const services = [
  {
    title: "Backend Development",
    description:
      "Creating robust server-side logic, APIs, and integration using Node.js and Express with MongoDB or SQL.",
    icon: "fa-solid fa-server",
  },
  {
    title: "Frontend Development",
    description:
      "Building dynamic and fast frontend experiences using React, Tailwind, and modern tools.",
    icon: "fa-solid fa-code",
  },
  {
    title: "MERN Stack Development",
    description:
      "Creating full-stack applications with MongoDB, Express, React, and Node.js.",
    icon: "fa-solid fa-layer-group",
  },
  {
    title: "Java Development",
    description:
      "Building scalable applications and backend services with Java, Spring Boot, and object-oriented design.",
    icon: "fa-brands fa-java",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-heading">What I Offer</h2>

      <div className="typing-role-box">
        <TypeAnimation
          sequence={[
            "Frontend Development",
            1500,
            "React Application Building",
            1500,
            "MERN Stack Development",
            1500,
            "Responsive UI/UX Design",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="animated-role"
        />
      </div>

      <p className="services-desc">
        I craft user-centric digital experiences with clean, maintainable code —
        from sleek UI designs to full-stack applications.
      </p>

      <div className="services-card-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={service.icon + " service-icon"}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
