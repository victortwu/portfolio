import React, { Component } from 'react'
import './App.css';
import TextLoop from 'react-text-loop'

class App extends Component {
  constructor(props) {
    super(props)

    }




    render() {


      return (
        <div className="App">
        <nav>
          <div className='navDiv'>
              <h4 id='githubLink'>GitHub</h4>
              <h4 id='linkedInLink'>LinkedIn</h4>
              <h4 id='resumeLink'>Resume</h4>
          </div>
        </nav>

            <h1>VICTOR <span id='twu'>TWU</span></h1>
            <h3><span id='software'>SOFTWARE</span> DEVELOPER<span> () => </span>
            <span id='skills'>
              <TextLoop interval={1000} children={['JavaScript', 'Python', 'CSS3', 'React.js', 'Express.js', 'Node.js', 'MongoDB', 'SQL', 'HTML5']} />
            </span></h3>
            <div className='projectsDiv'>


            </div>

            <h4 id='about'>ABOUT</h4>
            <div className='brandStatementDiv'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
            </div>
            <footer>
            </footer>
        </div>
      )
    }
  }







export default App;
