import React from 'react'
import './nav.styles.scss'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-categories'>
          <li>
            ABOUT
          </li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      {/* <div className='nav-logo'>
          Yan Dartau
          (web dev)
      </div> */}
    </>
  )
}

export default Nav