// ContactForm.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qw7b817", "template_m6e7g6o", form.current, {
        publicKey: "N6inSyRsgag0utrD3",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset(); // reset the form after sending
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <>
      <div
        style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <motion.div className="contact-container">
          <h1>Let's Chat</h1>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2>Contact Me</h2>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />
            <button type="submit">Send</button>
          </form>

          {/* Move footer inside this block */}
          <footer className="footer">
            <div className="left">
              <i>© {new Date().getFullYear()} Diksha Singh</i>
            </div>

            <div className="right">
              <a
                href="https://github.com/DikshaSingh-9720"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/diksha-singh-406890260/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-file"></i>
              </a>
            </div>
          </footer>
        </motion.div>
      </div>
    </>
  );
};

export default ContactForm;
