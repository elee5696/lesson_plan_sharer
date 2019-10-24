import React from 'react';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.logOutCallback();
  }
  render() {
    if (!this.props.userData) {
      return (
        <div className="container">
          <h1 className="d-flex justify-content-center">Please Log-In</h1>
        </div>
      );
    }
    return (
      <div className="entire-page-container container row m-0 p-0">
        <div className="spacer col col-1 p-0"></div>
        <div className="content-container col-10 mt-5 p-0">
          <div className="user-pic-enter-info-container row ml-0">
            <div className="pic col-2 p-0">
              <img src={this.props.userData.avatar} className="user-profile-pic" style={{ width: '4rem' }}></img>
              <p className="edit ml-3 mt-1">Edit</p>
            </div>
            <div className="enter-info col-10 p-0">
              <p className="enter-info-text ml-4 mt-2">Enter your info and add an optional profile picture.</p>
            </div>
          </div>
          <div className="username-key-value-container row ml-0 mb-3">
            <div className="username-key col-6 p-0">
              <p>Username: </p>
            </div>
            <div className="username-value col-6 p-0">
              <p>{this.props.userData.username}</p>
            </div>
          </div>
          <div className="name-key-value-container row ml-0 mb-3">
            <div className="name-key col-6 p-0">
              <p>Name: </p>
            </div>
            <div className="name-value col-6 p-0">
              <p>{this.props.userData.name}</p>
            </div>
          </div>
          <div className="experience-key-value-container row ml-0 mb-3">
            <div className="experience-key col-6 p-0">
              <p>Experience:</p>
            </div>
            <div className="experience-value col-6 p-0">
              <p>{this.props.userData.years + ' years'}</p>
            </div>
          </div>
          <div className="about-me-key-value-container row ml-0 mb-3">
            <div className="about-me-key col-6 p-0">
              <p>About Me:</p>
            </div>
            <div className="about-me-value col-6 p-0">
              <p>{this.props.userData.about_me}</p>
            </div>
          </div>
          <div className="projects-amount-key-value-container row ml-0 mb-3">
            <div className="projects-amount-key col-6 p-0">
              <p>Amount of Projects:</p>
            </div>
            <div className="projects-amount-value col-6 p-0">
              <p>{this.props.userData.total_projects}</p>
            </div>
          </div>
          <button
            type="button"
            className="btn searchButton shadow-none"
            onClick={this.logOut}>
            Log-out
          </button>
        </div>
        <div className="spacer col-1 p-0"></div>
      </div>
    );
  }
}
