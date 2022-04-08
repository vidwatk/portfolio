import React from 'react'
import "./Header.css"
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header> 
      <div className=".container header__container">
        <h5>Hello I'm</h5>
        <h1>Jesus</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={me} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header