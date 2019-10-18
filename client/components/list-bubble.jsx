import React from 'react';

export default class ListBubble extends React.Component {
  render() {
    let borderStyle = {
      border: '1px #E5E5E5 solid',
      background: '#FFC7F9',
      color: 'white',
      borderRadius: '50px',
      width: '200px'
    };

    return(
      <div className="bubble-container d-flex justify-content-center m-2 p-1" style={borderStyle}>
        <div className="text-container">
          <h5 className="m-0">{this.props.text}</h5>
        </div>
      </div>
    );
  }
}
