import React from 'react'
import './aboutName.styles.scss'

const AboutName = () => {
  return (
    <div className='about-name__container' >
      <div className='about-name__text'>
        <p className='about-name__name'>Hi👋, I'm <b>Yan</b></p>
        <p className='about-name__about'>
          Inspired by learning and motivated by challenges, focusing on creating highly functional and visually appealing web applications, taking projects from onset, to complete functionality, with consistent key communication at every step !
        </p>
      </div>
      <div className='about-name__image'>
        <img className='about__image' src='' />
      </div>
    </div>
  )
}

export default AboutName