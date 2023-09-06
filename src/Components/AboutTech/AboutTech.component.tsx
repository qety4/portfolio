import React from 'react'
import './aboutTech.styles.scss'
import TechStack from '../TechStack/TechStack.component'
import png from '../../assets/svg/png.svg'
const AboutTech = () => {
  return (
    <div className='about-tech-container'>


      <div className='about-tech__header'>
          <div className='about-tech__prof'>
            <p className='prof'>Web Developer</p>
            <div className='prof-variations-container'>
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
            </div>
          </div>

          <div className='about-tech__text-container'>
            <p className='about-tech__text'>
              I focus on creating highly functional, visually appealing web applications. Taking projects from onset, to complete functionality, with consistent key communication at every step !
            </p>
          </div>

          <div className='cv-download-container'>
            <a href="assets/wink.jpg" className='cv-download__btn' download>
              <div className='cv-download__text'>
                <p>Download my CV !
                </p>
                <img className="cv-download__img" src={png} alt="" />
              </div>
            </a>
          </div>
      </div>


      <div className='about-tech__stack'>
        <TechStack />
      </div>


    </div>
  )
}

export default AboutTech