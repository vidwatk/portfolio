import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiLinkedin} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ge8trna', 'template_xh3c36i', form.current, 'ceQXFrrvFGM_li44Q')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vidwatk@gmail.com</h5>
            <a href="mailto:vidwatk@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FiLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Hallelujah</h5>
            <a href="https://www.linkedin.com/in/vidwatkanade/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+12312312312</h5>
            <a href="https://api.whatsapp.com/send?phone=+447746822594" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact