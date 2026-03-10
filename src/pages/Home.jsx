import React from "react";
import { useNavigate } from "react-router-dom";
import '../Style/Home.css'
import profile from "../assets/Image/profile.png"

const Home = () => {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate("/portfolio")
  }
  const contactMe =()=>{
    navigate("/contact")
  }
  return (
    <section className="home">

      <div className="home-left">

        <p className="welcome">HELLO THERE, WELCOME TO MY SITE</p>

        <h1>
          I'm <span> Juned Pathan</span>
        </h1>

        <h2>
          Frontend Developer
        </h2>

        <h3>& UI/UX Designer</h3>

        <div className="buttons">
          <button className="portfolio-btn" onClick={goToPortfolio}>  View My Work</button>
          <button className="contact-btn" onClick={contactMe}>Contact Me</button>
        </div>

      </div>

      <div className="home-right">
        <img src={profile} alt="profile" />
      </div>

    </section>
  );
};

export default Home;