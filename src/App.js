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
      <div className='mainContainer'>


                <nav>
                      <div className='navDiv'>
                          {
                            !this.state.lightMode
                            ? <h4 onClick={()=> this.toggleDarkMode()}>Bright Mode</h4>
                            : <h4 onClick={()=> this.toggleLightMode()}>Dark Mode</h4>
                          }
                          <h4 id='githubLink'><a href='https://github.com/victortwu' target='none'>GitHub</a></h4>
                          <h4 id='linkedInLink'><a href='https://www.linkedin.com/in/victor-twu-6292631b1/' target='none'>LinkedIn</a></h4>
                          <h4 id='resumeLink'><a href='https://docs.google.com/document/d/17n-inD_l5K_zb6C8aknWffRcIbdIMsC7_K1dTo6vpYM/edit?usp=sharing' target='none'>Resume</a></h4>
                      </div>
                  </nav>

                  <div className='titleLogo'>
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
                  </div>

            <div className='projectHeading'>
                  <h3>featured projects</h3>
            </div>


                <div className='proj1Div'>
                  <ProjectOne/>
                </div>
                <div className='proj2Div'>
                  <ProjectTwo/>
                </div>
                <div className='proj3Div'>
                  <ProjectThree/>
                </div>





                <div className='aboutTitle'>
                  <h4 id='about'>ABOUT</h4>
                </div>
                <div className='aboutContent'>
                  <p>Full stack software engineer and restaurateur with frontend and backend experience.  Will steward data from third parties such as UberEats, Doordash to the restaurant owner's bookeeping system.</p>
                  <p>I built my restaurant during the 2008 financial crisis and am surviving the restaurant through a global pandemic - a testament to my grit, determination, adaptability and even-tempered leadership. I bring strong people skills, business savvy and a forward thinking attitude. </p>
                </div>


              <div className='skillsTitle'>
                  <h4>SKILLS</h4>
              </div>

              <div className='skillsContent'>
                <p>Some skills and stuff</p>
              </div>



            <footer>
            <h5> footer</h5>
            </footer>



            </div>
        </main>

      )
    }
  }







export default App;
