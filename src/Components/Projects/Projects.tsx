import React from 'react'
import './projects.styles.scss'
import Project from '../Project/Project.component'
import { clothingStore} from '../../assets/textFiles/projectDesc'
import { motion } from 'framer-motion'

function Projects() {
    return (
        <>
            <section className='projects'>
                <motion.h3 className='projects__title'
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p>some of</p>
                    My Projects
                </motion.h3>

                <Project projectInfo={clothingStore} />
                <Project projectInfo={clothingStore} />
                <Project projectInfo={clothingStore} />
                <Project projectInfo={clothingStore} />

            </section>
        </>
    )
}

export default Projects