
import './project.styles.scss'
import link from '../../assets/svg/external-link.svg'
import { ProjectInfo } from '../../types/types'

function Project({ projectInfo }: { projectInfo: ProjectInfo }) {

    const { title, about, stack, projectImg } = projectInfo

    return (
        <article className='project-container'>

            <span className='project'>
                <p className='project__title'>
                    {title}
                </p>
                <img className='project__img ' src={projectImg} alt="" />
                <div className='project__desc-container'>

                    {/* <p className='project__title'>
                        {title}
                    </p> */}

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

                    <img className="project__link" src={link} alt="" />
                </div>

            </span>


        </article>
    )
}

export default Project