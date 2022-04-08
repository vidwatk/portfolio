import React, {useState  } from 'react'
import "./Nav.css"
import {GoHome} from "react-icons/go"
import {SiAboutdotme} from "react-icons/si"
import {HiOutlineDesktopComputer} from "react-icons/hi" 
import {FaServicestack} from "react-icons/fa"
import {MdContactMail} from "react-icons/md"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("# ")
  return (
    <nav>
      <a href="#" className={activeNav ==="#" ? "active" : ""} onClick={() => setActiveNav("#")}><GoHome /></a>
      <a href="#about" className={activeNav ==="#" ? "about" : ""} onClick={() => setActiveNav("#about")} ><SiAboutdotme /></a>
      <a href="#experience" className={activeNav ==="#" ? "experience" : ""} onClick={() => setActiveNav("#experience")} ><HiOutlineDesktopComputer /></a>
      <a href="#services"  className={activeNav ==="#" ? "services" : ""} onClick={() => setActiveNav("#services")}><FaServicestack /></a>
      <a href="#contact"  className={activeNav ==="#" ? "contact" : ""} onClick={() => setActiveNav("#contact")}><MdContactMail /></a>
    </nav>
  )
}

export default Nav