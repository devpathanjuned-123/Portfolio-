import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Footer.css'
const Footer = () => {
  return (

    <footer className='footer'>
      <div className='footer-container'>
        <h2 className='footer-logo'>dev.juned</h2>
        <p className='footer-text'>
          Frontend Developer| HTML |CSS | JavaSCript | React

        </p>
        <div className='link'>
          
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="project">Projects</Link>
          <Link to="contact">Contact</Link>
        </div>
        <div className='footer-social'>

          <a href='https://github.com/devpathanjuned-123' target='_blank' rel='noreferrer'>GitHub</a>
          <a href='https://www.linkedin.com/in/juned-pathan-62b0833a3/' target='_blank' rel='noreferrer'>LinkedIn</a>
        </div>
        <p className='copyright'>
          ©{new Date().getFullYear()} dev.juned. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
