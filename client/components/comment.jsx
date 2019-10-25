import React from 'react';

export default class Comment extends React.Component {

  render() {
    return (
      <div className="comment-container">
        <div className="user-info d-flex flex-row">
          <div className="user-pic mr-3">
            <img className="comment-user-pic mb-3"
              src={this.props.avatar}
              style={{ height: '50px', width: 'auto' }}/>
          </div>
          <div className="user-name mt-3">
            <h6 className="user-name-input">{this.props.username}</h6>
          </div>
        </div>
        <div className="comment-body ">
          <h6>{this.props.text}</h6>
        </div>
        <div className="timestamp">
          <p className="comment-date">{this.props.time.split(' ', 1)}</p>
        </div>
      </div>
    );
  }
}
