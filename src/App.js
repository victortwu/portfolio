import React, { Component } from 'react'
import './App.css';
import TextLoop from 'react-text-loop'
import ProjectOne from './components/ProjectOne'
import ProjectTwo from './components/ProjectTwo'
import ProjectThree from './components/ProjectThree'
import ProjectFour from './components/ProjectFour'
import ContactForm from './components/ContactForm'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        lightMode: false,
        showForm: false
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

showContactForm = () => {
  this.setState({
    showForm: true
  })
}

hideContactForm = () => {
  this.setState({
    showForm: false
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
                              ? <button id='backgroundBtn' onClick={()=> this.toggleLightMode()}>Dark Mode</button>
                              : <button id='backgroundBtn' onClick={()=> this.toggleDarkMode()}>Bright Mode</button>

                            }
                                <h5 id='githubLink'><a href='https://github.com/victortwu' target='none'>GitHub</a></h5>
                                <h5 id='linkedInLink'><a href='https://www.linkedin.com/in/victor-twu/' target='none'>LinkedIn</a></h5>
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
                                      <TextLoop interval={1000} children={['JavaScript', 'Python', 'CSS3', 'React.js', 'Express.js', 'Node.js', 'MongoDB', 'PosgreSQL', 'HTML5', 'Flask']} />
                                    </span></h3>
                              </td>
                            </tr>
                            <tr>
                              <td id='contactMe'><button onClick={()=> this.showContactForm()} >Contact Me</button></td>

                            </tr>
                          </tbody>
                        </table>

                      </div>
                  </div>



            <div className='projectsDiv'>
            <h3 id='featuredProjects'>FEATURED PROJECTS</h3>
                <div className='proj3Div'>
                  <ProjectThree/>
                </div>
                <div className='proj4Div'>
                  <ProjectFour/>
                </div>
                <div className='proj1Div'>
                  <ProjectOne/>
                </div>
                <div className='proj2Div'>
                  <ProjectTwo/>
                </div>

            </div>





                <div className='aboutContent'>
                  <h4 id='about'>ABOUT ME</h4>
                  <p>Front end software engineer and restaurateur with full stack experience.  Will bring creativity, adaptability and hard work. Will steward data from third parties such as UberEats, GrubHub to the restaurant owner's bookeeping system.</p>
                  <p>I built my restaurant during the 2008 financial crisis and am surviving the restaurant through a global pandemic - a testament to my grit, determination, adaptability and even-tempered leadership. I bring strong people skills, business savvy and a forward thinking attitude. </p>
                </div>




              <div className='skillsContent'>
                <h4 id='skillsHeading'>SKILLS</h4>
                <ul>
                  <li>Front End Software Developer</li>
                  <li>Business Leader</li>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>Python</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Mongoose</li>
                  <li>MongoDB</li>
                  <li>Flask</li>
                  <li>peewee</li>
                  <li>PosgreSQL</li>
                </ul>
              </div>


              <ContactForm showForm={this.state.showForm} hideContactForm={this.hideContactForm}/>
            <footer>
              <p>BUILT BY VICTOR TWU 2021</p><p id='contactLinkFooter' onClick={()=> this.showContactForm()}>CONTACT ME</p>
            </footer>



            </div>
        </main>

      )
    }
  }







export default App;
