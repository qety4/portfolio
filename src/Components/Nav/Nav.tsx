
import { useMotionValueEvent, useScroll } from 'framer-motion'
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
      <nav className='nav'
      >
        <ul className={`nav-categories ${hidden ? 'hidden' : ''}`}>
          <Link to='about'
            className='nav-link'
            smooth={true}
            offset={-1000}
            duration={800}
          >
            <p className='nav-link__text'>
              ABOUT
            </p>
          </Link>
          <Link to='projects'
            className='nav-link'
            smooth={true}
            duration={800}
          >
            <p className='nav-link__text'>
              PROJECTS
            </p>
          </Link>
          <Link to='contact'
            className='nav-link'
            smooth={true}
            offset={-100}
            duration={800}
          >
            <p className='nav-link__text'>
              CONTACT
            </p>
          </Link>
        </ul>
      </nav>
      <Sides hidden={hidden} />
    </>
  )
}

export default Nav