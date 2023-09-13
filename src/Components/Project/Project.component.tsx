
import link from '../../assets/svg/external-link.svg'
import { ProjectInfo } from '../../types/types'
import {  motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Project({ projectInfo }: { projectInfo: ProjectInfo }) {
    const { title, about, stack, projectImg, url } = projectInfo

    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.98, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1])

    return (

            <motion.section ref={ref} className='project-container'
                style={
                    {
                        scale: scaleProgress,
                        opacity: opacityProgress,
                    }
                }


            >

                <span className='project'>
                    <p className='project__title'>
                        {title}
                    </p>
                    <img className='project__img ' src={projectImg} alt="" />
                    <div className='project__desc-container'>

                        <p className='project__desc'>
                            {about}
                        </p>

                        <ul className='project__stack'>
                            {
                                stack.map((item) =>
                                    <li key={item}>{item}</li>
                                )
                            }
                        </ul>
                        <a href={url} target='_blank'>
                            <img className="project__link" src={link} alt="" />
                        </a>
                    </div>

                </span>


            </motion.section>

    )
}

export default Project