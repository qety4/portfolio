
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import './nav.styles.scss'
import { Link } from 'react-scroll'
import { useState } from 'react'
import Sides from '../Sides/Sides'

const Nav = () => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (Number(latest) > previous && latest > 10) {
      setHidden(true)
    }
    else {
      setHidden(false)
    }
  })


  return (
    <>
      <motion.nav className='nav'
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' }
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.23, ease: 'easeIn' }}
      >
        <ul className='nav-categories'>
          <li>
            <Link to='about'
              smooth={true}
              offset={-300}
              duration={800}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link to='projects'
              smooth={true}
              duration={800}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to='contact'
              smooth={true}
              offset={-100}
              duration={800}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </motion.nav>
        <Sides hidden={hidden} />
    </>
  )
}

export default Nav