import React from 'react';

export default class Comment extends React.Component {

  render() {
    return (
      <div className="comment-container">
        <div className="user-info d-flex flex-row">
          <div className="user-pic">
            <img
              src={this.props.avatar}
              style={{ height: '50px', width: 'auto' }}/>
          </div>
          <div className="user-name">
            <p>{this.props.username}</p>
          </div>
        </div>
        <div className="comment-body">
          <p>{this.props.text}</p>
        </div>
        <div className="timestamp">
          <p>{this.props.time}</p>
        </div>
      </div>
    );
  }
}
