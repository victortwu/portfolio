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
        lightMode: false
      }
    }

toggleDarkMode = () => {
  this.setState({
    lightMode: false
  })
}

toggleLightMode = () => {
  this.setState({
    lightMode: true
  })
}


render() {
      console.log(this.state.lightMode)

      const toggleBackGround = !this.state.lightMode ? 'lightMode' : 'darkMode'


      return (

      <main className={toggleBackGround}>
      <div className='mainContainer'>
                



                  <div className='titleLogo'>
                      <div className='logo'>
                      <nav>
                            <div className='navDiv'>
                            {
                              !this.state.lightMode
                              ? <button onClick={()=> this.toggleLightMode()}>Dark Mode</button>
                              : <button onClick={()=> this.toggleDarkMode()}>Bright Mode</button>

                            }
                                <h5 id='githubLink'><a href='https://github.com/victortwu' target='none'>GitHub</a></h5>
                                <h5 id='linkedInLink'><a href='https://www.linkedin.com/in/victor-twu-6292631b1/' target='none'>LinkedIn</a></h5>
                                <h5 id='resumeLink'><a href='https://docs.google.com/document/d/17n-inD_l5K_zb6C8aknWffRcIbdIMsC7_K1dTo6vpYM/edit?usp=sharing' target='none'>Resume</a></h5>
                            </div>
                        </nav>
                        <h1><span id='victor'>Victor</span><span id='twu'>Twu</span></h1>
                        <table className='secondHeading'>
                          <tbody>
                            <tr>
                              <td>
                                    <h3><span id='software'>software</span><span id='developer'>Developer= () => </span></h3>
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
                  </div>



            <div className='projectsDiv'>
            <h3 id='featuredProjects'>FEATURED PROJECTS</h3>
                <div className='proj1Div'>
                  <ProjectOne/>
                </div>
                <div className='proj2Div'>
                  <ProjectTwo/>
                </div>
                <div className='proj3Div'>
                  <ProjectThree/>
                </div>
            </div>





                <div className='aboutContent'>
                  <h4 id='about'>ABOUT</h4>
                  <p>Full stack software engineer and restaurateur with frontend and backend experience.  Will steward data from third parties such as UberEats, Doordash to the restaurant owner's bookeeping system.</p>
                  <p>I built my restaurant during the 2008 financial crisis and am surviving the restaurant through a global pandemic - a testament to my grit, determination, adaptability and even-tempered leadership. I bring strong people skills, business savvy and a forward thinking attitude. </p>
                </div>




              <div className='skillsContent'>
                <h4 id='skillsHeading'>SKILLS</h4>
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
