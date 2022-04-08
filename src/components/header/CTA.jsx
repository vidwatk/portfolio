import React from 'react'
import CVK from "../../assets/CVK.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CVK} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Get in touch</a>
    </div>
  )
}

export default CTA