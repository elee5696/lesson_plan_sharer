import React from 'react';
import ListBubble from './list-bubble';
import Ratings from './ratings';
import EditButton from './editButton';
import Comment from './comment';
import CommentInput from './comment-input';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/project.php?id=${id}`)
      .then(res => res.json())
      .then(project => {
        this.setState({
          project: project[0]
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.project === null) {
      return <div className="page-loading">Page loading...</div>;
    }
    let setupSteps = this.state.project.set_up.split(',');

    return (
      <div className="entire-page-container container row col m-0 p-0">
        <div className="back-button-container mt-3 mb-3 col-12">
          <div
            onClick={this.props.history.goBack}
            className="back-button col-10">{'< Back'}
          </div>
        </div>
        {
          this.state.project.author_data.id === this.props.userData.id
            ? <div>
              <EditButton
                userData={this.state.project.author_data.id}
                project={this.state.project}
                currentUser={this.props.userData.id} />
            </div>
            : null
        }
        <div className="spacer col col-1 p-0"></div>
        <div className="col-10 p-0">
          <div className="project-image-container row justify-content-center mb-3">
            <img
              className="project-image p-0"
              style={{ width: '90%', maxWidth: '550px', height: '40%' }}
              src={this.state.project.image}>
            </img>
          </div>
          <div className="details-info-container">
            <div className="project-title-container col-10 mb-3 p-0">
              <h1 className="project-title text-capitalize">{this.state.project.name}</h1>
            </div>
            <div className="author-details text-muted mb-5">
              <h5>{this.state.project.author_data.name} | {this.state.project.author_data.username}</h5>
            </div>
            <div className="project-desc-container col-12 mb-3">
              <div className="project-desc-header-container row mb-2">
                <h1 className="project-desc-header">Description</h1>
              </div>
              <div className="project-desc-body row">
                <h3 className="project-desc-text">{this.state.project.description}</h3>
              </div>
            </div>
            <div className="project-goals-container mb-3">
              <div className="project-goals-header-container row mb-2 ml-1">
                <h1 className="project-goals-header">Goals</h1>
              </div>
              <div className="row container">
                <div className="project-goals-list row m-0">
                  {this.state.project.goals.map((e, i) => {
                    return (
                      <ListBubble
                        key={i}
                        className="project-goals-list-item"
                        text={e}
                        minWidth="120px"
                        maxWidth="120px" />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="project-setup-materials-container col-12 row p-0 m-0">
              <div className="set-up p-0 col-5">
                <div className="project-setup-header-container col mb-2 p-0">
                  <h1 className="project-setup-header">Set-Up</h1>
                </div>
                <div className="project-setup-container mb-3">
                  <div className="project-setup-desc-body">
                    {setupSteps.map((e, i) => {
                      return (
                        <h6
                          key={i}
                          className="project-setup-steps mb-2">
                          {i + 1}. {e}
                        </h6>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="materials p-0 ml-2">
                <div className="project-materials-header-container col mb-2 p-0">
                  <h1 className="project-materials-header">Materials</h1>
                </div>
                <div className="project-materials-container mb-3">
                  <div className="project-materials-list-container">
                    {this.state.project.materials.map((e, i) => {
                      return (
                        <ListBubble
                          key={i}
                          className="project-materials-list-item"
                          text={e}
                          minWidth="150px"
                          maxWidth="150px" />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="project-outcomes-container">
              <div className="project-outcomes-header-container row mb-2">
                <h1 className="project-outcomes-header col">Outcomes</h1>
              </div>
              <div className="project-outcomes-body row mb-4">
                <h5 className="col project-outcomes-text ">{this.state.project.outcomes}</h5>
              </div>
            </div>
            <div className="project-rating-container col-10 mb-2 p-0">
              <div className="project-rating-header-container row">
                <h1 className="project-rating-header col-10">Feedback</h1>
              </div>
              <div className="project-rating-body mb-2">
                <Ratings
                  id={this.state.project.id}
                  rating={this.state.project.rating_data.rating}
                  rating_count={this.state.project.rating_data.count} />
              </div>
            </div>
            <div className="project-reviews">
              {
                this.props.userData
                  ? <div className="mb-3">
                    <CommentInput
                      currentUser={this.props.userData.id}
                      currentProject={this.state.project.id} />
                  </div>
                  : <div><h3>Log-in to leave a review</h3></div>
              }
              <div className="review-header">
                <h2>Reviews</h2>
              </div>
              <div className="comment-list">
                {
                  this.state.project.reviews
                    ? this.state.project.reviews.map((e, i) => {
                      return (
                        <Comment
                          key={i}
                          text={e.comment}
                          avatar={e.avatar}
                          username={e.username}
                          time={e.time} />
                      );
                    })
                    : <div><p>No Reviews</p></div>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="spacer col-1 p-0"></div>
      </div>
    );
  }
}
