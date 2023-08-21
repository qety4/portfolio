import React from 'react'

function TechLogo({url}:{url:string}) {
  return (
    <div className='tech-logo'>
        <img className='tech-logo__img'src={url} alt="" />
    </div>
  )
}

export default TechLogo