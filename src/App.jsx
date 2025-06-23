import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import TechStack from "./components/TechStack";
import SkillCircle from "./components/SkillCircle";
import Services from "./components/Services";
import CustomCursor from "./CustomCursor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CustomCursor />
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <Navbar />

      <section id="about">
        <About />
      </section>

      <section className="soft-skills-section">
        <h2 className="soft-skills-title">Professional Skills</h2>
        <div className="skill-circle-container">
          <SkillCircle skill="Communication" percentage={85} color="#facc15" />
          <SkillCircle
            skill="Problem-solving"
            percentage={50}
            color="#34d399"
          />
          <SkillCircle skill="Curiosity" percentage={100} color="#60a5fa" />
        </div>
      </section>

      <section id="techstack">
        <Services />
      </section>
      <section id="techstack">
        <TechStack />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}

export default App;
