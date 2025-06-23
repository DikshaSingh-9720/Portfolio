import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./SkillCircle.css";

export default function SkillCircle({ skill, percentage, color }) {
  return (
    <div className="skill-circle">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: "#fff",
          trailColor: "#1e293b",
          textSize: "16px",
        })}
      />
      <p className="skill-label">{skill}</p>
    </div>
  );
}
