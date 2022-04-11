import React from 'react'
import "./Services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Back-End Engineer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Built a Keylogger in python with email service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Built an image identifier with TensorFlow and Keras in python</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Built a restful api service back end for the eshop using mongodb</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed a crypto tracking service with data analytics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed an automatic stock tracker with purchasing and selling ability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed a website for a school for blind and mentally challenged children with a .NET backend</p>
            </li>
          </ul>
        </article>
        {/* END OF BACK END */}
        <article className="service">
          <div className="service__head">
            <h3>Front End Tech</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Built a fully functional ecomm in ASP.net</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Built an uber eats clone from scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed an EShop app in react-native (Android and iOS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloned the tesla website in React and 'Styled'</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Built a fully functional ecomm in ASP.net</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Built front end for a hotel management system (POS)</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Chilled in life too</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Loved chilling in Thailand for 2 weeks in 2018</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Chilled at home for years</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Love chilling outside</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Not a fan of hot beer (or dogs)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Loved chilling at school and Uni</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Life is not bad</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services