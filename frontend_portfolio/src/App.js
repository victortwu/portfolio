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
          <h4>GitHub</h4>
          <h4>LinkedIn</h4>
          <h4>Resume</h4>
      </div>
    </nav>

        <h1>VICTOR TWU</h1>
        <h3>software developer</h3>
        <h5>brand statement</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
    </div>
  )
}

}

export default App;
