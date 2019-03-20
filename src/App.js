import React, { Component } from 'react';
import DemoApp from './components/DemoApp';
import './App.css'
import GithubRestClient from './services/Github/Rest';
import GithubGraphqlClient from './services/Github/GraphQL';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="rest">
          <DemoApp requester={GithubGraphqlClient} />
        </div>
        <div className="graphql">
          <DemoApp requester={GithubGraphqlClient}/>
        </div>
      </div>
    );
  }
}

export default App;
