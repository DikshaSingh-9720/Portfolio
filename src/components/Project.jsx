import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <div className="main">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Projects Showcase *
        </motion.h1>

        <p className="project-intro-text">
          Real-world web apps I've built with creativity and code 🚀
        </p>

        <motion.div className="hover-container">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`card-row ${i % 2 === 0 ? "left" : "right"}`}
            >
              <Card {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
function Card({ image, title, description, link1, link2, techStack }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // Adjust tilt strength
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      className="hover-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.2s ease" }}
    >
      <div className="image-container">
        <img src={image} alt={title} className="card-img" />
        <div className="overlay-content">
          <h3>{title}</h3>
        </div>
      </div>

      <div className="card-details">
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="links">
          <a
            href={link1}
            className="link1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="view-btn" aria-label="View Project">
              View Project
            </button>
          </a>
          <a
            href={link2}
            className="link2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-btn" aria-label="GitHub Link">
              GitHub
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    image: "/waybnb.png",
    title: "Waybnb",
    description:
      "Waybnb is a dynamic booking platform inspired by Airbnb, enabling users to explore, list, and reserve rental properties. The platform includes secure authentication, detailed listing pages, and a smooth booking experience with a focus on usability and responsiveness..",
    techStack: ["HTML", "CSS", "JavaScript", "Nodejs", "ExpressJs", "MongoDB"],
    link1: "https://major-project-3-lpf9.onrender.com/listings",
    link2: "https://github.com/DikshaSingh-9720/Waybnb",
  },
  {
    image: "/chatrx.png",
    title: "Chatrx",
    description:
      "Chatrx is a real-time video conferencing application offering features like video/audio calls, screen sharing, and live chat. It mimics the functionality of Zoom, providing a user-friendly interface for seamless virtual communication and collaboration.",
    techStack: ["React", "CSS", "Nodejs", "ExpressJs", "MongoDB"],
    link1: "https://chatrxzoomfontend.onrender.com/",
    link2: "https://github.com/DikshaSingh-9720/Chatrx",
  },
  {
    image: "/zerodha.png",
    title: "Zerodha",
    description:
      "This project is a feature-rich clone of the Zerodha stock trading interface. It provides users with an intuitive dashboard, and interactive trading simulations, designed to mirror the real-world trading experience with clean and modern UI/UX design.",
    techStack: ["React", "TailwindCss", "Nodejs", "ExpressJs", "MongoDB"],
    link1: "https://zerodha-clone-kappa-ivory.vercel.app/",
    link2: "https://github.com/DikshaSingh-9720/Zerodha-Clone",
  },
];
