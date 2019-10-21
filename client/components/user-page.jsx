import React from 'react';

export default class UserPage extends React.Component {
  render() {
    return (
      <div className="entire-page-container container row mt-3 p-0">
        <div className="spacer col col-1 p-0"></div>
        <div className="content-container col-10 p-0">
          <div className="user-pic-enter-info-container row ml-0 mb-3">
            <div className="pic col-6 p-0">
              <img src="/images/user-4-512.png" style={{ width: '3rem' }}></img>
              <h6 className="edit">Edit</h6>
            </div>
            <div className="enter-info col-6 p-0">
              <h6>Enter your info and add an optional profile picture</h6>
            </div>
          </div>
          <div className="username-key-value-container row ml-0 mb-3">
            <div className="username-key col-6 p-0">
              <h5>Username</h5>
            </div>
            <div className="username-value col-6 p-0">
              <h5>ProvPro</h5>
            </div>
          </div>
          <div className="experience-key-value-container row ml-0 mb-3">
            <div className="experience-key col-6 p-0">
              <h5>Experience</h5>
            </div>
            <div className="experience-value col-6 p-0">
              <h5>12 years</h5>
            </div>
          </div>
          <div className="about-me-key-value-container row ml-0 mb-3">
            <div className="about-me-key col-6 p-0">
              <h5>About Me</h5>
            </div>
            <div className="about-me-value col-6 p-0">
              <h5>I love what I do, and would love to do it my entire life!</h5>
            </div>
          </div>
          <div className="projects-amount-key-value-container row ml-0 mb-3">
            <div className="projects-amount-key col-6 p-0">
              <h5>Amount of Projects</h5>
            </div>
            <div className="projects-amount-value col-6 p-0">
              <h5>10</h5>
            </div>
          </div>
          <div className="points-amount-key-value-container row ml-0 mb-3">
            <div className="points-amount-key col-6 p-0">
              <h5>Amount of Points</h5>
            </div>
            <div className="points-amount-value col-6 p-0">
              <h5>100</h5>
            </div>
          </div>
        </div>
        <div className="spacer col-1 p-0"></div>
      </div>
    );
  }
}
