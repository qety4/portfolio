
import { motion } from 'framer-motion'
import './techLogo.styles.scss'

function TechLogo({url}:{url:string}) {
  return (

    <motion.div className='tech-logo'
    variants={{
      hidden: { opacity: 0, y: 0 },
      visible: { opacity: 1, y: 0 },
  }}
  initial='hidden'
  whileInView='visible'
  transition={{ duration: 0.8, delay: 0 }}
  >
        <img className='tech-logo__img' src={url} alt="" />
    </motion.div>
  )
}

export default TechLogo