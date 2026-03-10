import React from "react";
import "../Style/About.css";
// import dev from "../assets/dev.png";

const About = () => {
  return (
    <section className="about">
{/* 
      <div className="about-img">
        <img src={dev} alt="developer" />
      </div> */}

      <div className="about-content">

        <h1>About Me</h1>

        <h2>Frontend Developer</h2>

        <p>
          Hello! I'm Juned Pathan, a passionate Frontend Developer.
          I enjoy building modern, responsive and user-friendly
          websites using HTML, CSS, JavaScript and React JS.
        </p>

        <p>
          I focus on creating clean UI designs and smooth user
          experiences. I love learning new technologies and
          improving my development skills.
        </p>

        <button>Download CV</button>

      </div>

    </section>
  );
};

export default About;