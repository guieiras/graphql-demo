import React, { Component } from 'react';
import Smartphone from './Smartphone';
import Requests from './Requests';
import Fetcher from '../services/Fetcher';

export default class DemoApp extends Component {
  constructor(props) {
    super(props);
    this.fetcher = new Fetcher();
    this.state = {
      requests: this.fetcher.requests
    };
  }

  render() {
    return (
      <div className="DemoApp">
        <Smartphone request={this.props.requester(this.fetcher)} />
        <Requests requests={this.state.requests} />
      </div>
    );
  }
}
