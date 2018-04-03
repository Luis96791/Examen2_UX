import React, { Component } from 'react'
import './App.css'
import TweetsContainer from './components/TweetsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Twitter Clon</h1>
        </div>
        <TweetsContainer />
      </div>
    );
  }
}

export default App
