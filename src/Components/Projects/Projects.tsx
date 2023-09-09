import React from 'react'
import './project.styles.scss'
import Project from '../Project/Project.component'
import { clothingStore, clothingStoreL } from '../../assets/projectDesc/projectDesc'

function Projects() {
    return (
        <>
            <section className='projects'>
                <h3 className='projects__title'>
                    <p>some of my projects</p>
                    My Projects
                </h3>
                <Project projectInfo={clothingStore} />
                <Project projectInfo={clothingStoreL} />
                <Project projectInfo={clothingStore} />
                <Project projectInfo={clothingStoreL} />

            </section>
        </>
    )
}

export default Projects