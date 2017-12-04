import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movies />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
