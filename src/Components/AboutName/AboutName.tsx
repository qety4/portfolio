
import './aboutName.styles.scss'
import { motion } from 'framer-motion'
import PersonalPhoto from '../../assets/projectImg/personal-photo.png'


const AboutName = () => {
  return (
    <div className='about-name' >

      <div className='about-name__image-container'>
        <motion.div className='about-name__image'
          variants={{
            hidden: { opacity: 0, y: 9, x: 0.3 },
            visible: { opacity: 1, y: 0, x: 0 },
          }}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1, delay: 0.3, }}
        >
          <img className='about__image' src={PersonalPhoto} />
        </motion.div>
      </div>

      <div className='about-name__text-container'>
        <motion.div className='about-name__text'
          variants={{
            hidden: { opacity: 0, y: 9, x: -0.3 },
            visible: { opacity: 1, y: 0, x: 0 },
          }}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1, delay: 0.3, }}
        >

          <p id="about" className='about-name__name'>Hi, I'm <b>Yan</b></p>

          <div className='about-name__about'>
            <b>
              learning and improving 💫
            </b>
          </div>
          <div className='web-dev-text'>
            <p>WEB DEVELOPER</p>
          </div>

        </motion.div>
      </div>


    </div>
  )
}

export default AboutName