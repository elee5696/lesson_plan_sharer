import React from 'react';

export default class ListBubble extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBubble = this.deleteBubble.bind(this);
  }

  deleteBubble(event) {
    if (event.currentTarget.id === 'somegoal') {
      this.props.deleteGoal(this.props.text);
    } else if (event.currentTarget.id === 'somematerial') {
      this.props.deleteMaterial(this.props.text);
    }
  }

  render() {
    let hasCallbackFunction = this.props.deleteGoal || this.props.deleteMaterial;

    let borderStyle = {
      background: '#f8b1d1',
      color: 'white',
      borderRadius: '50px',
      minWidth: this.props.minWidth,
      maxWidth: '100%'
    };

    return (
      <div className="bubble-container d-flex justify-content-around m-1 p-1" style={borderStyle}>
        <div className="text-container d-inline-flex">
          <div
            className=""
            style={{ fontSize: '14px' }}>{this.props.text}
          </div>
        </div>
        {
          hasCallbackFunction
            ? <div id={this.props.id} onClick={this.deleteBubble}><i className="bubble-cross fas fa-times" style={{ fontSize: '14 px', color: 'white' }}></i></div>
            : null
        }
      </div>
    );
  }
}
