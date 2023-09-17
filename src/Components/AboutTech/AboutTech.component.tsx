
import { motion } from 'framer-motion'
import TechStack from '../TechStack/TechStack.component'
import VariationsContainer from '../VariationsContainer/VariationsContainer'
import WebDevContainer from '../WebDevContainer/WebDevContainer'
import CvLinks from './CvLinks'
import './aboutTech.styles.scss'

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

        <CvLinks />


      </motion.div>

      <TechStack bg={true} />

    </div>

  )
}

export default AboutTech