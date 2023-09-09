import React from 'react'
import './aboutTech.styles.scss'
import TechStack from '../TechStack/TechStack.component'
import png from '../../assets/svg/png.svg'
import VariationsContainer from '../VariationsContainer/VariationsContainer'

const AboutTech = () => {
  return (

    <div className='about-tech'>


      <div className='about-tech__header'>
        <div className='about-tech__prof'>
          <p className='prof'>Web Developer</p>
          <VariationsContainer />
        </div>

        <div className='about-tech__text-container'>
          <p className='about-tech__text'>
            I focus on creating highly functional, visually appealing web applications. Taking projects from onset, to complete functionality, with consistent key communication at every step !
          </p>
        </div>

        <div className='cv-links'>

          <div className='cv-download-container'>
            <a href="assets/wink.jpg" className='cv-download__btn' download>
              <div className='cv-download__text'>
                <p>Download my CV !
                </p>
                <img className="cv-download__img" src={png} alt="" />
              </div>
            </a>
          </div>
          <a className="github-link" href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" className='github-img' alt="" />
          </a>

        </div>


      </div>

      <TechStack />

    </div>

  )
}

export default AboutTech