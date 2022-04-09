import React from 'react'
import "./Portfolio.css"
import Img1 from "../../assets/img1.jpg"
import Img2 from "../../assets/img2.jpg"
import Img3 from "../../assets/img3.jpg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
          <h3>Ecomm Shop React-Native</h3>
          <div  className='portfolio__item-cta' >
            <a href="https://github.com/vidwatk/shoppecomm" className="btn" target="_blank">GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img2} alt="" />
          </div>
          <h3>Uber-Eats clone</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/vidwatk/uber-eats" className="btn" target="_blank">GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img3} alt="" />
          </div>
          <h3>Restful Backend</h3>
          <div className='portfolio__item-cta' >
            <a href="https://github.com/vidwatk/backend" className="btn" target="_blank">GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio