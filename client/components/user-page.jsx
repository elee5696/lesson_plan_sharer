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
          <div className="username-key-value-container col ml-0 mb-3">
            <div className="username-key row p-0">
              <p className="col">Username: </p>
              <button
                type="button"
                className="btn searchButton shadow-none">
                Edit
              </button>
            </div>
            <div className="username-value row p-0">
              <p className="col">{this.props.userData.username}</p>
            </div>
          </div>
          <div className="name-key-value-container col ml-0 mb-3">
            <div className="name-key row p-0">
              <p className="col">Name: </p>
              <button
                type="button"
                className="btn searchButton shadow-none">
                Edit
              </button>
            </div>
            <div className="name-value row p-0">
              <p className="col">{this.props.userData.name}</p>
            </div>
          </div>
          <div className="experience-key-value-container col ml-0 mb-3">
            <div className="experience-key row p-0">
              <p className="col">Experience:</p>
              <button
                type="button"
                className="btn searchButton shadow-none">
                Edit
              </button>
            </div>
            <div className="experience-value row p-0">
              <p className="col">{this.props.userData.years + ' years'}</p>
            </div>
            <div className="about-me-key-value-container col ml-0 mb-3">
              <div className="about-me-key row p-0">
                <p className="col">About Me:</p>
                <button
                  type="button"
                  className="btn searchButton shadow-none">
                  Edit
                </button>
              </div>
              <div className="about-me-value row p-0">
                <p className="col">{this.props.userData.about_me}</p>
              </div>

              <div className="projects-amount-key-value-container col ml-0 mb-3">
                <div className="projects-amount-key row p-0">
                  <p className="col">Amount of Projects:</p>
                  <button
                    type="button"
                    className="btn searchButton shadow-none">
                  Edit
                  </button>
                </div>
                <div className="projects-amount-value col-6 p-0">
                  <p>{this.props.userData.total_projects}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn searchButton shadow-none"
                    onClick={this.logOut}>
            Log-out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer col-1 p-0"></div>
      </div>
    );
  }
}
