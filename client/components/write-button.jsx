import React from 'react';
import { Link } from 'react-router-dom';
/// dasdas;

export default class WriteButton extends React.Component {
  render() {
    return (
      <Link to="/submit">
        <div
          className="write-button-container">
          <i className="write-button-pen fas fa-pen">+</i>
        </div>
      </Link>
    );
  }
}
