
import './nav.styles.scss'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
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
        {/* <div className='nav-logo'>
          Yan Dartau
          (web dev)
        </div> */}
      </nav>
    </>
  )
}

export default Nav