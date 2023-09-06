import React from 'react'
import './contact.styles.scss'


function Contact() {
    return (
        <div className='contact'>
            <h3 className='contact__title'>Contact Me</h3>
            <form className='contact__form'>
                <input className='contact__form__email' type="text" placeholder='Your email' />
                <textarea className="contact__form__text" placeholder="your message" name="" id="" />
                <div className='contact__methods'>
                    <div className='contact__method'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Gmail_2020.png" alt="" className='contact__method__img' />
                    </div>
                    <div className='contact__method'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png'
                        // "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" 
                        alt="" className='contact__method__img' />
                    </div>
                    <div className='contact__method'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="" className='contact__method__img' />
                    </div>
                </div>
                <button className='contact__form__btn'>
                    connect !
                </button>
            </form>
        </div>
    )
}

export default Contact