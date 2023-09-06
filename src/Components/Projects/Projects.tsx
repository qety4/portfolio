import React from 'react'
import './project.styles.scss'
import Project from '../Project/Project.component'
import { itemslist,clothingStore } from '../../assets/projectDesc/projectDesc'

function Projects() {
    return (
            <div className='projects'>
                <Project projectInfo={clothingStore} />
                <Project projectInfo={itemslist} />
                {/* <ProjectLeft/> */}
            </div>
    )
}

export default Projects