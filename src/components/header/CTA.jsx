import React from 'react'
import CVSamirEN from "../../img/CV-Samir-EN.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CVSamirEN} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA