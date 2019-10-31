import React from 'react';
import ListBubble from './list-bubble';
import Ratings from './ratings';
import EditButton from './editButton';
import Comment from './comment';
import CommentInput from './comment-input';
import { Link, Redirect } from 'react-router-dom';
import YoutubePlayer from './youtubePlayer';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      modal: false,
      error: false,
      deleted: false
    };
    this.modalToggle = this.modalToggle.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.leaveComment = this.leaveComment.bind(this);
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
      .catch(err => {
        this.setState({
          error: err
        });
      }
      );
  }

  leaveComment(data) {
    let project = Object.assign({}, this.state.project);

    fetch('/api/review.php', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(review => {
        if (project.reviews) {
          project.reviews.unshift(review);
        } else {
          project['reviews'] = [review];
        }
        this.setState({
          project: project
        });
      })
      .catch(err => console.error(err));
  }

  deleteProject() {
    const { id } = this.props.match.params;
    this.props.deleteProject(parseInt(id));
    this.setState({ deleted: true });
  }

  modalToggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    if (this.state.deleted) {
      return <Redirect to="/provs"></Redirect>;
    }

    if (this.state.error) {
      return <div className="error">No Project Found with ID</div>;
    }

    if (this.state.project === null) {
      return <div className="page-loading">Page loading...</div>;
    }

    let setupSteps = this.state.project.set_up.split(',');
    let linkStyle = { color: 'black', textDecoration: 'none' };

    const modal =
      <div
        className="modal profile-delete edit-modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: 'block' }}>
        <div
          className="modal-dialog modal-dialog-centered"
          role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete This Project?</h5>
            </div>
            <div className="modal-body pt-0">
              <p>Are you sure you want to delete this project?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn searchButton"
                onClick={this.deleteProject}>DELETE
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={this.modalToggle}>Cancel
              </button>
            </div>
          </div>
        </div>
      </div>;

    return (

      <div className="entire-page-container container row col m-0 p-0">
        {this.state.modal ? modal : null}
        <div className="back-button-container mt-3 mb-3 col-10 offset-1 p-0">
          <Link to="/provs" style={linkStyle}>
            <div className="back-button">{'< Back to Provs'}</div>
          </Link>
          {
            this.state.project.author_data.id === this.props.userData.id
              ? <div className="editButton-div ml-5">
                <EditButton
                  userData={this.state.project.author_data.id}
                  project={this.state.project}
                  currentUser={this.props.userData.id}
                  modalToggle={this.modalToggle}/>
              </div>
              : null
          }
        </div>
        <div className="col-10 p-0 offset-1">
          <div className="project-image-container row justify-content-center mb-4">
            <img
              className="project-image p-0"
              style={{ width: '90%', maxWidth: '550px', height: '40%' }}
              src={this.state.project.image}>
            </img>
          </div>
          <div className="details-info-container">
            <div className="project-title-container col-10 mb-3 p-0">
              <h2 className="project-title text-capitalize">{this.state.project.name}</h2>
            </div>
            <div className="author-details mb-3">
              <Link
                to={`/user/${this.state.project.author_data.id}`}
                style={linkStyle}>
                <h5 className="text-muted "> By: {this.state.project.author_data.name} | {this.state.project.author_data.username}</h5>
              </Link>
            </div>
            <div className="project-desc-container col-12 mb-2">
              <div className="project-desc-header-container row mb-2">
                <h2 className="project-desc-header">Description</h2>
              </div>
              <div className="project-desc-body row">
                <h3 className="col project-desc-text p-0">{this.state.project.description}</h3>
              </div>
              {
                this.state.project.youtubeLink
                  ? <div className="row">

                    <YoutubePlayer className="col" video={this.state.project.youtubeLink} />
                  </div>
                  : null
              }

            </div>
            <div className="project-goals-container mb-3">
              <div className="project-goals-header-container row m-0">
                <h1 className="project-goals-header">Goals</h1>
              </div>
              <div className="row container m-0">
                <div className="project-goals-list row">
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
              <div className="set-up p-0 col-5 mt-1">
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
              <div className="materials p-0 ml-2 mt-1 col-4">
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
              <div className="project-outcomes-body row mb-3">
                <h5 className="col project-outcomes-text ">{this.state.project.outcomes}</h5>
              </div>
            </div>
            <div className="project-rating-container col-10 mb-3 p-0">
              <div className="project-rating-header-container row mb-2">
                <h1 className="project-rating-header col-10">Feedback</h1>
              </div>
              <div className="project-rating-body mb-2">
                <Ratings
                  id={this.state.project.id}
                  rating={this.state.project.rating_data.rating}
                  rating_count={this.state.project.rating_data.count} />
                {this.state.rated ? <p>Rated</p> : null }
                <div className="ml-0 mb-2 row rating-details-container">
                  <h6 className="rating-details-input">Total Ratings: { this.state.total ? this.state.total : this.state.project.rating_data.count }</h6>
                </div>
              </div>
            </div>
            <div className="project-reviews">
              {
                this.props.userData
                  ? <div className="mb-2">
                    <CommentInput
                      currentUser={this.props.userData.id}
                      currentProject={this.state.project.id}
                      leaveComment={this.leaveComment} />
                  </div>
                  : <div className="login-to-leave-review mb-3"><h5 className="m-2">Please log in to leave a review.</h5></div>
              }
              <div className="review-header mt-2 mb-3">
                <h5>Reviews</h5>
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
                          user_id={e.user_id}
                          time={e.time} />
                      );
                    })
                    : <div><p>No Reviews</p></div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
