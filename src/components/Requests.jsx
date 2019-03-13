import React, { Component } from 'react';
import './Requests.css';

export class Requests extends Component {
  render() {
    return (
      <div className="Requests">
        <h3>Requisições realizadas</h3>
        <table>
          <thead>
            <tr>
              <th>Caminho</th>
              <th>Tamanho em KB</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
