import React, { Component } from 'react'
import './App.css';

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
        <h3><span id='software'>SOFTWARE</span> DEVELOPER</h3>
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
