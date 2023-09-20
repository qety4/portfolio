import { motion } from 'framer-motion'
import cv from '../../assets/cv.png'
import png from '../../assets/svg/png.svg'

function CvLinks() {
  return (
    <div className='cv-links'>

    <motion.div className='cv-download-container'
     variants={{
      hidden: { opacity: 0, y: 1.8, x: 0 },
      visible: { opacity: 1, y: 0, x: 0 },
    }}
    viewport={{ once: true }}
    initial='hidden'
    whileInView='visible'
    transition={{ duration: 1.3, delay: 1.3, }}
    >
      <a href={cv} className='cv-download__btn' download="yan.dartau-cv.png">
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
  )
}

export default CvLinks