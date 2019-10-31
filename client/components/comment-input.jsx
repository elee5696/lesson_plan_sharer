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

    this.setState({
      value: ''
    });

    this.props.leaveComment(JSON.stringify(body));
  }

  render() {
    return (
      <div className="comment-input-container container p-0 m-0">
        <div className="header row leave-review-header mb-3 m-0">
          <h5>Leave a Review</h5>
        </div>
        <form>
          <div>
            <textarea className="textarea form-control"
              type="text"
              onChange={this.onChange}
              value={this.state.value} />
          </div>
          <div className="leave-review-button container row m-0 mt-1 p-0">
            <div className="empty-col-for-button col"></div>
            <button
              className="btn searchButton review-button shadow-none col"
              onClick={this.onSubmit}>
              Review
            </button>
          </div>
        </form>
      </div>
    );
  }
}
