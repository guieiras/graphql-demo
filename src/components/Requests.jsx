import React, { Component } from 'react';
import './Requests.css';
import { observer } from 'mobx-react';

export default observer(class Requests extends Component {
  render() {
    return (
      <div className="Requests">
        <h3>Requisições realizadas</h3>
        <table>
          <thead>
            <tr>
              <th>Caminho</th>
              <th>Tamanho em bytes</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.requests.map((response) => <tr>
                <td>{response.url}</td>
                <td>{response.size}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    );
  }
});
