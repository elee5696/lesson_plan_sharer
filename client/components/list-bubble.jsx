import React from 'react';

export default class ListBubble extends React.Component {
  render() {
    let borderStyle = {
      border: '1px #E5E5E5 solid',
      background: '#FFC7F9',
      color: 'white',
      borderRadius: '50px',
      minWidth: this.props.minWidth,
      maxWidth: this.props.maxWidth
    };

    return (
      <div className="bubble-container col justify-content-center m-1 p-1" style={borderStyle}>
        <div className="text-container">
          <div
            className="m-0 goals-bubble-text"
            style={{ fontSize: '14px' }}>{this.props.text}</div>
        </div>
      </div>
    );
  }
}
