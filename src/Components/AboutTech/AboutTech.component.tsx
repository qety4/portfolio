import React from 'react'
import './aboutTech.styles.scss'

const AboutTech = () => {
  return (
    <div className='about-tech-container'>
      <div className='about-prof'>
        <p className='prof'>Web Developer</p>
        <p className='prof-variations-container'>
          <div className='prof-variations'>
            <p className='prof-variation'>Full Stack</p>
            <p className='prof-variation'>Front-End</p>
            <p className='prof-variation'>Back-End</p>
          </div>
          <div className='prof-variations'>
            <p className='prof-variation'>Full Stack</p>
            <p className='prof-variation'>Front-End</p>
            <p className='prof-variation'>Back-End</p>
          </div>
        </p>
      </div>

      <div className='cv-download-container'>
          <a href="assets/wink.jpg" className='cv-download' download>Download</a>
      </div>
    </div>
  )
}

export default AboutTech