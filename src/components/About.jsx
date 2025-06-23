import React from "react";
import "./About.css";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <>
      <div className="mainContainer">
        <div className="profile-wrapper">
          {/* Yellow background that fades in */}
          <motion.div
            className="yellow-bg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Profile image with delay after yellow bg */}
          <motion.img
            src="diksha.jpg"
            alt="Diksha Profile"
            className="profile-img"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="aboutContainer">
          <p className="h2"> Diksha</p>
          <img
            src="https://cdn.prod.website-files.com/63bf33f53bdbf7d93dc43b4a/63d45f41a930eef582683fa8_icon-star.svg"
            className="image2"
          />
          <span className="h2 role">Frontend Developer</span>
          <p className="h2">
            {" "}
            is currently building the foundation of something new .....
          </p>
          <p className="aboutme">
            I didn’t just stumble into tech — I built my path here, line by
            line. What started with styling buttons turned into building
            scalable frontends, real-time apps, and meaningful digital
            experiences.
          </p>

          <div className="cta-buttons" style={{ zIndex: "1000" }}>
            <a href="#about" className="aboutlink">
              Get to know me <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="#projects" className="aboutlink secondary">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
