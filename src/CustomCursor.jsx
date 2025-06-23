import React, { useEffect, useState } from "react";
import "./App.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const addHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);
    addHoverEvents();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`cursor ${hovered ? "hovered" : ""}`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    ></div>
  );
}
