import React from 'react'
import './aboutName.styles.scss'

const AboutName = () => {
  return (
    <div className='about-name' >
      <div className='about-name__text'>

        <p className='about-name__name'>Hi👋, I'm <b>Yan</b></p>

        <div className='about-name__about'>
          Inspired by challenges, motivated by learning.
          <br />Always learning and improving !
        </div>

        <p className='web-dev-text'>
          <b>Web Developer</b>
        </p>

      </div>

      <div className='about-name__image'>
        <img className='about__image' src='' />
      </div>
      
    </div>
  )
}

export default AboutName