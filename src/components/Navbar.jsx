import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Nav = styled.nav`
  display: flex;
  background-color: #0f172a;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
`;

const Left = styled.div`
  font-size: 2.3rem;
  font-family: ${(props) => props.$font};
  text-shadow: 0 1px 0 #0ea5e9, 0 2px 5px rgba(14, 165, 233, 0.3);
  transform: perspective(800px) rotateX(5deg);
  transition: font-family 0.5s ease-in-out;
`;

const Center = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.5rem 0.75rem;
    position: relative;
    transition: all 0.3s ease;
    border-radius: 6px;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 2px 10px rgba(59, 130, 246, 0.4);
      transform: scale(1.05) translateZ(2px);
      color: #38bdf8;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, #0ea5e9, #22d3ee);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 998;
  width: 100%;
  background: rgba(15, 23, 42, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  a {
    margin: 1rem 0;
    color: #e2e8f0;
    font-size: 1.1rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #38bdf8;
    }
  }
`;

const fonts = [
  "Grandslang Roman",
  "Palatino Linotype",
  "sans-serif",
  "Orbitron",
];

export default function Navbar() {
  const [font, setFont] = useState("Orbitron");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      setFont(randomFont);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Nav>
        <Left $font={font}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Diksha Singh
          </Link>
        </Left>

        <Center>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a> {/* if added */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Center>

        <Right>
          <i
            className="fa-solid fa-bars"
            onClick={toggleMenu}
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          />
        </Right>
      </Nav>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
            <Link to="/projects" onClick={toggleMenu}>
              Projects
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}
