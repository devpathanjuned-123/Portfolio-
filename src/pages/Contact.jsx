import React from "react";
import "../Style/Contact.css";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-container">

        <h1 className="contact-title">Contact Me</h1>

        <p className="contact-text">
          If you have any project or opportunity, feel free to contact me.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

        <div className="contact-social">

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;