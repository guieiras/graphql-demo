import React, { Component } from 'react';
import DemoApp from './components/DemoApp';
import './App.css'

class App extends Component {
  restRequester(fetcher) {
    return () => Promise.resolve({ owner: "REST", repositories: [] });
  }

  graphqlRequester(fetcher) {
    return () => Promise.resolve({ owner: "GraphQL", repositories: [] });
  }

  render() {
    return (
      <div className="App">
        <div className="rest">
          <DemoApp requester={this.restRequester} />
        </div>
        <div className="graphql">
          <DemoApp requester={this.graphqlRequester}/>
        </div>
      </div>
    );
  }
}

export default App;
