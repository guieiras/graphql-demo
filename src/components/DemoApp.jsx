import React, { Component } from 'react';
import { Smartphone } from './Smartphone';
import { Requests } from './Requests';
import { observable } from 'mobx';

export class DemoApp extends Component {
  constructor(props) {
    super(props);
    this.state = observable({
      requests: []
    });
  }

  render() {
    return (
      <div className="DemoApp">
        <Smartphone />
        <Requests requests={this.state.requests} />
      </div>
    );
  }
}
