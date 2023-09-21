
import TechLogo from '../TechLogo/TechLog'
import TechName from '../TechName/TechName'
import './techStack.styles.scss'
import { techStack } from '../../assets/textFiles/techStack.text'

function TechStack({bg}:{bg:boolean}) {
    return (
        <div className='about-tech__stack'>

            <div className='tech-stack'>
                {
                    techStack.map((item) =>
                        <div key={item.name} className='techlogo-container'>
                            <TechLogo url={item.img} />
                            {!bg &&
                                <TechName name={item.name} />
                            }
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default TechStack