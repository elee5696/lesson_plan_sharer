import React from 'react';

export default class UserPage extends React.Component {
  render() {
    return (
      <div className="entire-page-container container row m-0 p-0">
        <div className="spacer col col-1 p-0"></div>
        <div className="content-container col-10 mt-3 p-0">
          <div className="user-pic-enter-info-container row ml-0 mb-3">
            <div className="pic col-2 p-0">
              <img src="/images/user-4-512.png" style={{ width: '4rem' }}></img>
              <p className="edit ml-3 mt-1">Edit</p>
            </div>
            <div className="enter-info col-10 p-0">
              <p className="enter-info-text ml-4 mt-2">Enter your info and add an optional profile picture.</p>
            </div>
          </div>
          <div className="username-key-value-container row ml-0 mb-3">
            <div className="username-key col-6 p-0">
              <p>Username:</p>
            </div>
            <div className="username-value col-6 p-0">
              <p>ProvPro</p>
            </div>
          </div>
          <div className="experience-key-value-container row ml-0 mb-3">
            <div className="experience-key col-6 p-0">
              <p>Experience:</p>
            </div>
            <div className="experience-value col-6 p-0">
              <p>12 years</p>
            </div>
          </div>
          <div className="about-me-key-value-container row ml-0 mb-3">
            <div className="about-me-key col-6 p-0">
              <p>About Me:</p>
            </div>
            <div className="about-me-value col-6 p-0">
              <p>I love what I do, and would love to do it my entire life!</p>
            </div>
          </div>
          <div className="projects-amount-key-value-container row ml-0 mb-3">
            <div className="projects-amount-key col-6 p-0">
              <p>Amount of Projects:</p>
            </div>
            <div className="projects-amount-value col-6 p-0">
              <p>10</p>
            </div>
          </div>
          <div className="points-amount-key-value-container row ml-0 mb-3">
            <div className="points-amount-key col-6 p-0">
              <p>Amount of Points:</p>
            </div>
            <div className="points-amount-value col-6 p-0">
              <p>100</p>
            </div>
          </div>
        </div>
        <div className="spacer col-1 p-0"></div>
      </div>
    );
  }
}
