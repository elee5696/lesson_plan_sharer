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
        <div className="content-container col-10 mt-4 p-0">
          <div className="user-pic-enter-info-container row ml-0">
            <div className="pic col-2 p-0">
              <img src={this.props.userData.avatar} className="user-profile-pic mb-2" style={{ width: '4rem' }}></img>
              <button
                type="button"
                className="btn editUserButton btn-sm shadow-none row ml-2">
                Edit
              </button>
            </div>
            <div className="enter-info col-10 p-0">
              <p className="enter-info-text ml-4 mt-2">Enter your info and add an optional profile picture.</p>
            </div>
          </div>
          <div className="personal-info-container mb-4 mt-3">
            <h2 className="personal-info-text">Personal Info</h2>
          </div>
          <div className="username-key-value-container col ml-0 mb-3">
            <div className="username-key row p-0">
              <p className="col-8 p-0 m-0">Username: </p>
              <button
                type="button"
                className="btn editUserButton col-4 btn-sm shadow-none">
                Edit
              </button>
            </div>
            <div className="username-value row p-0">
              <p className="username-value-text col p-0 m-0">{this.props.userData.username}</p>
            </div>
          </div>
          <div className="name-key-value-container col ml-0 mb-3">
            <div className="name-key row p-0">
              <p className="col-8 p-0 m-0">Name: </p>
              <button
                type="button"
                className="btn editUserButton col-4 btn-sm shadow-none">
                Edit
              </button>
            </div>
            <div className="name-value row p-0">
              <p className="name-value-text col p-0 m-0">{this.props.userData.name}</p>
            </div>
          </div>
          <div className="experience-key-value-container col ml-0 mb-3">
            <div className="experience-key row p-0">
              <p className="col-8 p-0 m-0">Experience:</p>
              <button
                type="button"
                className="btn editUserButton col-4 btn-sm shadow-none">
                Edit
              </button>
            </div>
            <div className="experience-value row p-0">
              <p className="experience-value-text col p-0 m-0">{this.props.userData.years + ' years'}</p>
            </div>
          </div>
          <div className="about-me-key-value-container col ml-0 mb-3">
            <div className="about-me-key row p-0">
              <p className="col-8 p-0 m-0">About Me:</p>
              <button
                type="button"
                className="btn editUserButton col-4 btn-sm shadow-none">
                  Edit
              </button>
            </div>
            <div className="about-me-value row p-0">
              <p className="about-me-text col p-0 m-0">{this.props.userData.about_me}</p>
            </div>
          </div>
          <div className="projects-amount-key-value-container col ml-0 mb-3">
            <div className="projects-amount-key row p-0">
              <p className="col-8 p-0 m-0">Amount of Projects:</p>
              <button
                type="button"
                className="btn editUserButton col-4 btn-sm shadow-none">
                  Edit
              </button>
            </div>
            <div className="projects-amount-value row p-0">
              <p className="projects-amount-value-text col p-0 m-0">{this.props.userData.total_projects}</p>
            </div>
          </div>
          <div className="member-since-key-value-container col ml-0">
            <div className="member-since-key row p-0">
              <p className="col-8 p-0 m-0">Member since:</p>
              <button
                type="button"
                className="btn editUserButton col-4 btn-sm shadow-none">
                    Edit
              </button>
            </div>
            <div className="projects-amount-value row p-0">
              <p className="projects-amount-value-text col p-0 m-0">{this.props.userData.creation.split(' ', 1)}</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="btn searchButton shadow-none mt-4"
              onClick={this.logOut}>
                  Log-out
            </button>
          </div>
        </div>
        <div className="spacer col-1 p-0"></div>
      </div>
    );
  }
}
