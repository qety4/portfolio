import React, { useRef } from 'react'
import './contact.styles.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { contactValidator } from '../../validators/contactValidator'


type FormData = z.infer<typeof contactValidator>

function Contact() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1 1']
    })
    const scaleProgress = useTransform(scrollYProgress,[0, 1],[0.78, 1])

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(contactValidator),
    })

    const sendEmail = async (email:string,emailBody:string)=>{
        
    }

    const submit = async (formData:FormData)=>{
        await sendEmail(formData.email,formData.emailBody)
        reset()
    }
    

    return (
        <motion.section
        ref={ref}
        className='contact'
        style={
            {
                scale:scaleProgress,
            }
        }
        >
            <h3 className='contact__title' id='contact'>Contact Me</h3>
            <form className='contact__form' action='' onSubmit={handleSubmit(submit)}>

                <input className='contact__form__email' type="email" 
                {...register('email')}
                placeholder='your email...' />
                <textarea className="contact__form__text" 
                {...register('emailBody')}
                placeholder="your message..." id="" />

                <div className='contact__methods'>
                    <a className='contact__method' href="mailto:yan.datau.dev@gmail.com" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Gmail_2020.png" alt="" className='contact__method__img' />
                    </a>
                    <a className='contact__method' href='https://www.linkedin.com/in/yandartau/' target='_blank'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png'
                            alt="" className='contact__method__img' />
                    </a>
                    <a className='contact__method' target='_blank' >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="" className='contact__method__img' />
                    </a>
                </div>
                <p className='contact__error-message'>{errors.email?.message || errors.emailBody?.message}</p>
                <button className='contact__form__btn'>
                    connect !
                </button>

            </form>
        </motion.section>
    )
}

export default Contact