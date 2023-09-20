
import { useRef } from 'react'
import link from '../../assets/svg/external-link.svg'
import { ProjectInfo } from '../../types/types'
import { motion, useScroll, useTransform } from 'framer-motion'


function Project({ projectInfo }: { projectInfo: ProjectInfo }) {
    const ref = useRef<HTMLElement>(null)
    const { title, about, stack, projectImg, url, githubUrl } = projectInfo

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.93, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])

    return (

        <motion.section
            ref={ref}
            style={
                {
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }
            }
        >
            <div className='project-container'>

                <span className='project'>
                    <div className='project__title'>
                        <p className='project__title-text'>{title}
                        </p>
                        <div className='project__redirects'>
                            <a href={githubUrl} target='_blank'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" className='project_github' alt="" />
                            </a>
                            <a href={url} target='_blank'>
                                <img className="project__link" src={link} alt="" />
                            </a>
                        </div>
                    </div>

                    <img className='project__img ' src={projectImg} alt="" />
                    <div className='project__desc-container'>
                        <div className='project__desc'>
                            <p className='project__desc__about'>
                                {about}
                            </p>

                            <ul className='project__desc__stack'>
                                {
                                    stack.map((item) =>
                                        <li key={item}>{item}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                </span>
            </div>

        </motion.section>

    )
}

export default Project