import React from 'react'
import './sides.styles.scss'

function Sides() {
    return (
        <div className='sides'>
            {/* <ul className='sides__redirects'>
                <li>
                    <a className='sides__contact__method' href='/' target='_blank' >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="" className='sides__img' />
                    </a>
                </li>
                <li>
                    <a className='sides__contact__method' href="" target='_blank' >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png" alt="" className='sides__img' />
                    </a>
                </li>
                <li>
                    <a className='sides__contact__method' href='' target='_blank' >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="" className='sides__img' />
                    </a>
                </li>
            </ul> */}
            <div className='sides__email'>
                <p className='sides__email__text'>
                    yan.dartau.dev@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Sides