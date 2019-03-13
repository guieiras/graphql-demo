import React, { Component } from 'react';
import { Smartphone } from './Smartphone';
import { Requests } from './Requests';

export class DemoApp extends Component {
  render() {
    return (
      <div className="DemoApp">
        <Smartphone />
        <Requests />
      </div>
    );
  }
}
