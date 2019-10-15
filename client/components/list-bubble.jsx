import React from 'react';

export default class ListBubble extends React.Component {
  render() {
    let borderStyle = {
      border: '1px black solid',
      borderRadius: '15px',
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
