import AboutName from './Components/AboutName/AboutName.component'
import Nav from './Components/Nav/Nav'
import './App.scss'
import AboutTech from './Components/AboutTech/AboutTech.component'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
      <Nav />
      <main>
        <div className='home-page'>
          
          <div className='about'>
            <div className='about__name'>
              <AboutName />
            </div>
            <div className='about__tech'>
              <AboutTech />
            </div>
          </div>

          <div className='projects-container'>
            <Projects />
          </div>

          <div className='contact-container'>
            <Contact/>
          </div>

        </div>
      </main>
    </>
  )
}

export default App
