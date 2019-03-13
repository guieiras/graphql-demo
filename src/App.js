import React, { Component } from 'react';
import './App.css'
import { DemoApp } from './components/DemoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="rest">
          <DemoApp />
        </div>
        <div className="graphql">
          <DemoApp />
        </div>
      </div>
    );
  }
}

export default App;
