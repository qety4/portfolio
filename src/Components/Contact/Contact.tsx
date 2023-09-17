import React, { useRef, useState } from 'react'
import './contact.styles.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { contactValidator } from '../../validators/contactValidator'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

type FormData = z.infer<typeof contactValidator>

function Contact() {
    const ref = useRef<HTMLElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const [sent,setSent] = useState<boolean>(false)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1 1']
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1])

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(contactValidator),
    })

    const sendEmail = () => {

        try {

            if (formRef.current) {
                emailjs.sendForm(
                    `${import.meta.env.VITE_SERVICE_ID}`,
                    'template_m8x7h6q',
                    formRef.current!,
                    '69oawvD-Se87qz-t2',
                )
                reset()
                toast.success(`
                email sent
                
                `)
                setError('emailBody',{message:'Thank You !'})
                setSent(true)
                return
            }
        } catch (e) {
            console.log(e)
            setError('email', { message: 'error sending email' })
        }
    }


        return (
            <motion.section
                ref={ref}
                className='contact'
                style={
                    {
                        scale: scaleProgress,
                    }
                }
            >
                <h3 className='contact__title' id='contact'>Contact Me</h3>
                <form className='contact__form' ref={formRef} action='' onSubmit={handleSubmit(sendEmail)}>

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
                    <p className={`contact__error-message ${sent ? 'success' : ''} `}>{errors.emailBody?.message}</p>
                    <button className='contact__form__btn'>
                        connect !
                    </button>

                </form>
            </motion.section>
        )
    }

export default Contact