
import './project.styles.scss'
import link from '../../assets/svg/external-link.svg'
import { ProjectInfo } from '../../types/types'

function Project({ projectInfo }: { projectInfo: ProjectInfo }) {

    const { side, title, about, stack, projectImg } = projectInfo

    return (
        <div className={`project-container ${side === 'left' && 'left' }`}>
            <img className='project__img ' src={projectImg} alt="" />
            <div className='project__text'>
                <div className='project__desc'>
                    <p className='project__title'>
                        {title}
                    </p>

                    <p className='project__about'>
                        {about}
                    </p>

                    <img className="project__link" src={link} alt="" />
                </div>
                <div className='project__stack'>
                    {
                        stack.map((item) =>
                            <span key={item}>{item}</span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Project