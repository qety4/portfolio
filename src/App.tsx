import AboutName from './Components/AboutName/AboutName.component'
import Nav from './Components/Nav/Nav'
import './App.scss'
import AboutTech from './Components/AboutTech/AboutTech.component'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Divider from './Components/Divider/Divider'

function App() {

  return (
    <>
      <Nav />
      <main>
        <div className='home-page'>

          <div className='about'>

            <AboutName />
            <AboutTech />

          </div>

          <Divider />

          <Projects />

          <Divider />

          <Contact />

        </div>
      </main>
    </>
  )
}

export default App
