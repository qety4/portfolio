import React from 'react'
import './aboutName.styles.scss'
import { motion } from 'framer-motion'

const AboutName = () => {
  return (
    <div className='about-name' >
      <motion.div className='about-name__text'
        variants={{
          hidden: { opacity: 0, y: 13, x: -3 },
          visible: { opacity: 1, y: 0,x:0 },
      }}
      viewport={{once:true}}
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 1, delay: 0.3,  }}
      >

        <p className='about-name__name'>Hi👋, I'm <b>Yan</b></p>

        <div className='about-name__about'>
          Inspired by challenges, motivated by learning.
          <br />Always learning and improving !
        </div>

        <p className='web-dev-text'>
          <b>Web Developer</b>
        </p>

      </motion.div>

      <motion.div className='about-name__image'
        variants={{
          hidden: { opacity: 0, y: 13,x:3 },
          visible: { opacity: 1, y: 0, x:0 },
          exit:{opacity:0}
      }}
      viewport={{once:true}}
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 1, delay: 0.3 }}
      >
        <img className='about__image' src='' />
      </motion.div>
      
    </div>
  )
}

export default AboutName