
import TechLogo from '../TechLogo/TechLogo.component'
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
                {/* <div className='techlogo-container'>
                    <TechLogo url={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'} />
                    <TechName name='typescript' />

                </div>

                <div className='techlogo-container' >
                    <TechLogo url={'https://logosdownload.com/logo/javascript-logo-big.png'} />
                    <TechName name='javascript' />
                </div>
                <div className='techlogo-container' >
                    <TechLogo url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'} />
                    <TechName name='react' />

                </div>
                <div className='techlogo-container' >
                    <TechLogo url={'https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png'} />
                    <TechName name='next' />

                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://cdn-images-1.medium.com/max/1600/1*Vo5RDpNkOsfDn8sx06mthA.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://static-00.iconduck.com/assets.00/redis-plain-icon-2048x1748-fmvimw1g.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://sass-lang.com/assets/img/styleguide/seal-color.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://clipart-library.com/images_k/python-logo-transparent/python-logo-transparent-5.png'} />
                </div>
                <div className='techlogo-container' >
                    <TechName name='' />

                    <TechLogo url={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png'} />
                </div> */}
            </div>
        </div>

    )
}

export default TechStack