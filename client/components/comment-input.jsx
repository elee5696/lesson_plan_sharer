import React from 'react';

export default class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let body = {
      user_id: this.props.currentUser,
      project_id: this.props.currentProject,
      comment: this.state.value
    };

    fetch('/api/review.php', {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }

  render() {
    return (
      <div className="comment-input-container">
        <div className="header">
          <h2>Leave a review</h2>
        </div>
        <form className="d-flex">
          <div>
            <textarea
              type="text"
              onChange={this.onChange}
              value={this.state.value} />
          </div>
          <div>
            <button
              className="btn searchButton shadow-none"
              onClick={this.onSubmit}>
              Review
            </button>
          </div>
        </form>
      </div>
    );
  }
}
