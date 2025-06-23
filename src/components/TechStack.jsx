import React from "react";
import "./TechStack.css";
import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";

const techs = [
  { name: "HTML", logo: "/logos/html.png" },
  { name: "CSS", logo: "/logos/css.png" },
  { name: "JavaScript", logo: "/logos/js.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Node.js", logo: "/logos/nodejs.png" },
  { name: "ExpressJs", logo: "/logos/expressjs.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "Tailwind", logo: "/logos/Tailwind.png" },
  { name: "Bootstrap", logo: "/logos/bootstrap.png" },
  { name: "GitHub", logo: "/logos/Github.png" },
];

const TechStack = () => {
  return (
    <section className="tech-rotate-container">
      <ThreeBackground />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="techstack-title"
      >
        ⚙️ My Tech Stack
      </motion.h1>

      <p className="techstack-subtext">
        I have worked with the following technologies throughout my development
        journey. Most of them were used while building real-world projects
        during the <strong>Delta Batch (MERN Stack Development)</strong> by{" "}
        <strong>Shradha Khapra ma'am</strong> at <strong>Apna College</strong>.
      </p>

      {/* Certificate download button */}
      <a href="/certificate.pdf" download className="download-btn">
        🎓 Download Certificate
      </a>

      <div className="scrolling-wrapper">
        <div className="scrolling-track">
          {[...techs, ...techs].map((tech, index) => (
            <div className="rotating-tech" key={index}>
              <img src={tech.logo} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
