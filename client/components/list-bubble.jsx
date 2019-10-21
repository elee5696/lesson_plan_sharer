import React from 'react';

export default class ListBubble extends React.Component {
  render() {
    let borderStyle = {
      border: '1px #E5E5E5 solid',
      background: '#FFC7F9',
      color: 'white',
      borderRadius: '50px',
      width: this.props.width ? this.props.width : '200px'
    };

    return (
      <div className="bubble-container justify-content-center m-1 p-1" style={borderStyle}>
        <div className="text-container">
          <div
            className="m-0 goals-bubble-text"
            style={{ fontSize: '14px' }}>{this.props.text}</div>
        </div>
      </div>
    );
  }
}
