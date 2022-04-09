import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiLinkedin} from "react-icons/fi"
import {AiOutlineGithub} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer___logo">VidwatK2022</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook" target="_blank"><FaFacebookF/></a>
        <a href="https://github.com/vidwatk" target="_blank"> <AiOutlineGithub /></a>
        <a href="https://www.linkedin.com/in/vidwatkanade/" target="_blank"><FiLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; VidwatKanade2022. Feel free to use this website or get in touch to claim</small>
      </div>
    </footer>
  )
}

export default Footer