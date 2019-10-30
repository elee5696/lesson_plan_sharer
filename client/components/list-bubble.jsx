import React from 'react';

export default class ListBubble extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBubble = this.deleteBubble.bind(this);
  }

  deleteBubble(event) {
    if (event.currentTarget.id === 'somegoal') {
      this.props.deleteGoal(event.currentTarget.innerHTML);
    } else if (event.currentTarget.id === 'somematerial') {
      this.props.deleteMaterial(event.currentTarget.innerHTML);
    }
  }
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
          <div onClick={this.deleteBubble}
            id={this.props.id}
            className="m-0 goals-bubble-text"
            style={{ fontSize: '14px' }}>{this.props.text}</div>
        </div>
      </div>
    );
  }
}
