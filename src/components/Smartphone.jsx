import React, { Component } from 'react';
import './Smartphone.css';
import MobileApp from './MobileApp';

export default class Smartphone extends Component {

  render() {
    return (
      <div className="Smartphone">
        <div className="mockup">
          <div className="screen">
            <MobileApp request={this.props.request} />
          </div>
        </div>
      </div>
    );
  }
}
