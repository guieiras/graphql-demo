import React, { Component } from 'react';
import './index.css';

export default class MobileApp extends Component {
  constructor(props) {
    super(props);
    this.state = { owner: "", repositories: [] };
  }

  componentDidMount() {
    this.props.request("guieiras").then(({ owner, repositories }) => {
      this.setState({ owner, repositories });
    });
  }

  render() {
    return <div className="MobileApp">
      <div className="navbar">
        <p>Repositories from {this.state.owner}</p>
      </div>
      {
        this.state.repositories.map((repository, i) => <div key={i} className="repository">
          <span className="name">{repository.name}</span>
          <span className="collaborators">C: {repository.collaborators}</span>
          <span className="prs">PRs: {repository.prs}</span>
          <div style={{clear: "both"}}></div>
        </div>)
      }
    </div>;
  }
};
