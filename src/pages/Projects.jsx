import React from "react";
import '../Style/Project.css'
import { useNavigate } from "react-router-dom";
import project from '../assets/Image/port-proimg.jpg'
const Projects = () => {

  const getGithub = () => {
    window.open("https://github.com/devpathanjuned-123", "_blank");
  }
  return (





    <section className="project">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>My Portfolio Website</h3>
        <img src={project} alt="" />
        <p>My Portfolio Website build with react</p>
        <button className="button" onClick={getGithub}>GitHub</button>
      </div>
    </section>

  );
};

export default Projects;