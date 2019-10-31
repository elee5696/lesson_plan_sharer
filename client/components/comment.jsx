import React from 'react';
import { Link } from 'react-router-dom';

export default class Comment extends React.Component {

  render() {
    return (
      <div className="comment-container mb-2 p-1">
        <div className="user-info d-flex flex-row mb-3">
          <div className="user-pic-container mr-3">
            <img className="comment-user-pic mb-3"
              src={this.props.avatar}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          <div className="user-name mt-3">
            <Link
              to={`/user/${this.props.user_id}`}
              style={{ color: 'black', textDecoration: 'none' }}>
              <h6 className="user-name-input">{this.props.username}</h6>
            </Link>
          </div>
        </div>
        <div className="comment-body ">
          <p className="review-text">{this.props.text}</p>
        </div>
        <div className="timestamp">
          <p className="comment-date">{this.props.time.split(' ', 1)}</p>
        </div>
      </div>
    );
  }
}
