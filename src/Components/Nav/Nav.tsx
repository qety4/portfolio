import React from 'react'
import './nav.styles.scss'

const Nav = () => {
  return (
    <>
      <div className='nav'>
        <ul className='nav-categories'>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACTS</li>
        </ul>
      </div>
      {/* <div className='nav-logo'>
          Yan Dartau
          (web dev)
      </div> */}
    </>
  )
}

export default Nav