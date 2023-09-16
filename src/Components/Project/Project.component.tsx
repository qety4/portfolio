
import link from '../../assets/svg/external-link.svg'
import { ProjectInfo } from '../../types/types'
import { motion } from 'framer-motion'


function Project({ projectInfo }: { projectInfo: ProjectInfo }) {
    const { title, about, stack, projectImg, url } = projectInfo

    return (

        <motion.section className='project-container'
            variants={{
                hidden: { opacity: 0.3, y: 20, x: 0 },
                visible: { opacity: 1, y: 0, x: 0 },
            }}
            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 1.9, delay: 0.2 }}
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