import React from 'react';
import EditProfile from './profileEdit';
import UserPhotoUpdate from './user-photo-update';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: '',
      modal: false
    };
    this.logOut = this.logOut.bind(this);
    this.editProject = this.editProject.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.handleUpdateModal = this.handleUpdateModal.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.logOutCallback();
  }

  editProject(event) {
    this.setState({ field: event.target.id });
  }

  cancelEdit() {
    this.setState({ field: '' });
  }

  handleUpdateModal() {
    this.setState({
      modal: true
    });
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
        <div className="spacer col-1 p-0"></div>
        <div className="content-container col-10 mt-4 p-0">
          <div className="user-pic-enter-info-container row ml-0">
            <div className="pic col-2 p-0">
              <div className="user-avatar-container mb-2">
                <img src={this.props.userData.avatar} className="user-profile-pic mb-2" style={{ width: '100%', height: '100%' }}></img>

                {this.state.modal && <UserPhotoUpdate
                />}
              </div>
              <button
                type="button"
                className="btn editUserButton btn-sm shadow-none row ml-2"
                onClick={this.handleUpdateModal}>
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
          {
            this.state.field === 'username'
              ? <EditProfile field="username"
                id={this.props.userData.id}
                cancelCallback={this.cancelEdit}
                userUpdateCallback={this.props.userUpdateCallback} />
              : <div className="username-key-value-container col ml-0 mb-3">
                <div className="username-key row p-0">
                  <p className="col-8 p-0 m-0">Username: </p>
                  <button
                    id="username"
                    onClick={this.editProject}
                    type="button"
                    className="btn editUserButton col-4 btn-sm shadow-none">
                Edit
                  </button>
                </div>
                <div className="username-value row p-0">
                  <p className="username-value-text col p-0 m-0">{this.props.userData.username}</p>
                </div>
              </div>
          }
          {
            this.state.field === 'name'
              ? <EditProfile field="name" id={this.props.userData.id}cancelCallback={this.cancelEdit} />
              : <div className="name-key-value-container col ml-0 mb-3">
                <div className="name-key row p-0">
                  <p className="col-8 p-0 m-0">Name: </p>
                  <button
                    id="name"
                    onClick={this.editProject}
                    type="button"
                    className="btn editUserButton col-4 btn-sm shadow-none">
                Edit
                  </button>
                </div>
                <div className="name-value row p-0">
                  <p className="name-value-text col p-0 m-0">{this.props.userData.name}</p>
                </div>
              </div>
          }
          {
            this.state.field === 'years'
              ? <EditProfile field="years" id={this.props.userData.id} cancelCallback={this.cancelEdit} />
              : <div className="experience-key-value-container col ml-0 mb-3">
                <div className="experience-key row p-0">
                  <p className="col-8 p-0 m-0">Experience:</p>
                  <button
                    type="button"
                    id="years"
                    onClick={this.editProject}
                    className="btn editUserButton col-4 btn-sm shadow-none">
                      Edit
                  </button>
                </div>
                <div className="experience-value row p-0">
                  <p className="experience-value-text col p-0 m-0">{this.props.userData.years + ' years'}</p>
                </div>
              </div>
          }
          {
            this.state.field === 'about_me'
              ? <EditProfile field="about_me" id={this.props.userData.id} cancelCallback={this.cancelEdit} />
              : <div className="about-me-key-value-container col ml-0 mb-3">
                <div className="about-me-key row p-0">
                  <p className="col-8 p-0 m-0">About Me:</p>
                  <button
                    id="about_me"
                    onClick={this.editProject}
                    type="button"
                    className="btn editUserButton col-4 btn-sm shadow-none">
                  Edit
                  </button>
                </div>
                <div className="about-me-value row p-0">
                  <p className="about-me-text col p-0 m-0">{this.props.userData.about_me}</p>
                </div>
              </div>
          }
          <div className="projects-amount-key-value-container col ml-0 mb-3">
            <div className="projects-amount-key row p-0">
              <p className="col-8 p-0 m-0">Amount of Projects:</p>
            </div>
            <div className="projects-amount-value row p-0">
              <p className="projects-amount-value-text col p-0 m-0">{this.props.userData.total_projects}</p>
            </div>
          </div>
          <div className="member-since-key-value-container col ml-0">
            <div className="member-since-key row p-0">
              <p className="col-8 p-0 m-0">Member since:</p>
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
