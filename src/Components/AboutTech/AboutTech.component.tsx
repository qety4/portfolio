import React from 'react'
import './aboutTech.styles.scss'
import TechStack from '../TechStack/TechStack.component'
import png from '../../assets/svg/png.svg'
import VariationsContainer from '../VariationsContainer/VariationsContainer'
import WebDevContainer from '../WebDevContainer/WebDevContainer'
import { motion } from 'framer-motion'
import cv from '../../assets/CV.png'
const AboutTech = () => {
  return (

    <div className='about-tech'>


      <motion.div className='about-tech__header'
        variants={{
          hidden: { opacity: 0, y: 8, x: 0 },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 1.8, delay: 0.3, }}

      >
        <div className='about-tech__prof'>
          <WebDevContainer />
          <VariationsContainer />
        </div>

        <div className='about-tech__text-container'>
          <p className='about-tech__text'>
            I focus on creating highly functional, visually appealing web applications. Taking projects from onset, to complete functionality, with consistent key communication at every step !
          </p>
        </div>

        <div className='cv-links'>

          <motion.div className='cv-download-container'
           variants={{
            hidden: { opacity: 0, y: 3, x: 0 },
            visible: { opacity: 1, y: 0, x: 0 },
          }}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1.3, delay: 1.5, }}
          >
            <a href={cv} className='cv-download__btn' download>
              <div className='cv-download__text'>
                <p>Download my CV !
                </p>
                <img className="cv-download__img" src={png} alt="" />
              </div>
            </a>
          </motion.div>
          <a className="github-link" href="https://github.com/qety4" target='_blank'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" className='github-img' alt="" />
          </a>

        </div>


      </motion.div>

      <TechStack bg={true} />

    </div>

  )
}

export default AboutTech