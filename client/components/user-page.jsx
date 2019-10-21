import React from 'react';

export default class UserPage extends React.Component {
  render() {
    return (
      <div className="entire-page-container container">
        <div className="spacer col col-1 p-0"></div>
        <div className="user-pic-enter-info-container col-12 row p-0 m-0">
          <div className="pic col-6 p-0">
            <h1 className="edit">Edit</h1>
          </div>
          <div className="enter-info">Enter your info and add an optional profile picture</div>
        </div>
        <div className="spacer col-1 p-0"></div>
      </div>

    );
  }
}
