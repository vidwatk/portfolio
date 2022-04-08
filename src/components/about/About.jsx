import React from 'react'
import "./About.css"
import abtME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {RiUserStarFill} from "react-icons/ri"
import {GrProjects} from "react-icons/gr"

const About = () => {
  return (
    <section id='about'>
       <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={abtME } alt="About Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Not much, but just enough</small>
              </article>
              <article className="about__card">
                <RiUserStarFill className='about__icon'/>
                <h5>Hi</h5>
                <small>3 look better than 2</small>
              </article>
              <article className="about__card">
                <GrProjects className='about__icon'/>
                <h5>Projects</h5>
                <small>Many. Visit my GitHub</small>
              </article>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#contact" className='btn btn-primary'>Lets Talk </a>
        </div>
      </div> 
    </section>
  )
}

export default About