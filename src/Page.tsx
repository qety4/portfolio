import AboutName from './Components/AboutName/AboutName.component'
import Nav from './Components/Nav/Nav'
import './page.styles.scss'
import AboutTech from './Components/AboutTech/AboutTech.component'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Sides from './Components/Sides/Sides'


function Page() {

  return (
    <>
      <Nav />
      <main className='home-page'>
          <section className='about'>

            <AboutName />
            <AboutTech />

          </section>

          <Projects />

          <Contact />

          <Sides/>
      </main>
    </>
  )
}

export default Page
