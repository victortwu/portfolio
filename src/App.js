import React, { Component } from 'react'
import './App.css';
import TextLoop from 'react-text-loop'
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'
import ProjectThree from './ProjectThree'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        toggleLightMode: false
      }
    }

toggleDarkMode = () => {
  this.setState({
    lightMode: true
  })
}

toggleLightMode = () => {
  this.setState({
    lightMode: false
  })
}


render() {
      console.log(this.state)

      const toggleBackGround = this.state.lightMode ? 'lightMode' : 'darkMode'


      return (
      <main className={toggleBackGround}>
        <div className="App">
        <nav>
              <div className='navDiv'>
                  {
                    !this.state.lightMode
                    ? <h4 onClick={()=> this.toggleDarkMode()}>Bright Mode</h4>
                    : <h4 onClick={()=> this.toggleLightMode()}>Dark Mode</h4>
                  }
                  <h4 id='githubLink'>GitHub</h4>
                  <h4 id='linkedInLink'>LinkedIn</h4>
                  <h4 id='resumeLink'>Resume</h4>
              </div>


                <h1>Victor <span id='twu'>Twu</span></h1>
                <table className='secondHeading'>
                  <tbody>
                    <tr>
                      <td>
                            <h3><span id='software'>software</span>Developer<span> () => </span></h3>
                      </td>
                      <td id='textLoopCell'>
                            <h3><span id='skills'>
                              <TextLoop interval={1000} children={['JavaScript', 'Python', 'CSS3', 'React.js', 'Express.js', 'Node.js', 'MongoDB', 'SQL', 'HTML5']} />
                            </span></h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
          </nav>

            <div className='projectHeading'>
                  featured projects
            </div>

              <div className='projectsDiv'>

                  <ProjectOne/>
                  <ProjectTwo/>
                  <ProjectThree/>

              </div>

              <div className='brandStatementDiv'>
                  <h4 id='about'>ABOUT</h4>
                  <p>Full stack software engineer and restaurateur with frontend and backend experience.  Will steward data from third parties such as UberEats, Doordash to the restaurant owner's bookeeping system.</p>
                  <p>I built my restaurant during the 2008 financial crisis and am surviving the restaurant through a global pandemic - a testament to my grit, determination, adaptability and even-tempered leadership. I bring strong people skills, business savvy and a forward thinking attitude. </p>
              </div>




            <footer>
            <h1> footer</h1>
            </footer>
          </div>
        </main>
      )
    }
  }







export default App;