import AboutName from './Components/AboutName/AboutName'
import Nav from './Components/Nav/Nav'
import './page.styles.scss'
import AboutTech from './Components/AboutTech/AboutTech'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'


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

      </main>
    </>
  )
}

export default Page
