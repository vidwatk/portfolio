import React from 'react'
import {AiOutlineLinkedin} from "react-icons/ai"
import {FaGithub} from "react-icons/fa"
import {AiOutlineYoutube} from "react-icons/ai"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vidwatkanade/" target={'_blank'}> <AiOutlineLinkedin />  Linkedin</a>
        <a href="https://github.com/vidwatk" target={'_blank'}><FaGithub />  GitHub</a>
        <a href="https://mazesp.in/" target={'_blank'}><AiOutlineYoutube />  HAHA</a>
    </div>
  )
}

export default HeaderSocials