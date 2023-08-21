import AboutName from './Components/AboutName/AboutName.component'
import Nav from './Components/Nav/Nav'
import './App.scss'
import AboutTech from './Components/AboutTech/AboutTech.component'
function App() {

  return (
    <>
    <Nav/>
    <div className='home-page'>
      <div className='about'>
        <div className='about-name'>
          <AboutName />
        </div>
        <div className='about-tech'>
          <AboutTech />
        </div>
      </div>
      <div className='ptojects'>

      </div>
      <div className='contact info'>

      </div>
    </div>
    </>
  )
}

export default App
