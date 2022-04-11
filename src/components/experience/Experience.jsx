import React from 'react'
import "./Experience.css"
import {RiAwardFill} from "react-icons/ri"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skillss</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>HTML CSS JS</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>ReactJS</h4>
                <small className='text-light'>Very Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>React-Native</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>Tail wind</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>Kotlin</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT END */}
        <div className="experience__backend">
        <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>Node</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>RESTful</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>AWS</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <RiAwardFill className='experience__details-icon'/>
                <div>
                  <h4>SQL, NoSQL(Mongo)</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience