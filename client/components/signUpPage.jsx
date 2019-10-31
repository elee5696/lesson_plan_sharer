import React from 'react';
import { Redirect } from 'react-router-dom';

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      years: '',
      about_me: '',
      picture: '',
      imagePreviewUrl: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    for (let key in this.state) {
      formData.append(`${key}`, this.state[key]);
    }
    this.props.signUpCallback(formData);
  }

  onChange(event) {
    const fileReader = new FileReader();
    let file = event.target.files[0];

    switch (event.target.id) {
      case 'avatar':
        fileReader.onloadend = () => {
          this.setState({
            picture: file,
            imagePreviewUrl: fileReader.result
          });
        };
        fileReader.readAsDataURL(file);
        break;
      default:
        this.setState({ [event.target.id]: event.target.value });
    }
  }

  render() {
    let error = this.props.error;
    let user = this.props.currentUser;

    let redirect = null;

    if (!error && user) {
      redirect = <Redirect to={`/user/${user.id}`} />;
    }

    return (
      <div className="container d-flex justify-content-center mt-5 col-lg-4">
        {redirect}
        <div className="card container p-lg-5 p-m-5 p-xs-2">
          <div className="container logo-container mt-1 d-flex justify-content-center mb-1">
            <img src="/images/logo_mini.png" />
          </div>
          <div className="card-top d-flex justify-content-center mt-4">
            <h3>Create your account</h3>
          </div>
          <div className="container d-flex justify-content-center p-0">
            <form>
              <div className="mt-2">Username:</div>
              <input
                className="form-control"
                id="username"
                type="text"
                onChange={this.onChange}
                value={this.state.username} />
              {
                error && !user
                  ? <div>Username taken</div>
                  : null
              }
              <div className="mt-2">Full Name:</div>
              <input
                id="name"
                type="text"
                className="form-control"
                onChange={this.onChange}
                value={this.state.name} />
              <div className="mt-2">Years of Experience:</div>
              <input
                id="years"
                type="number"
                className="form-control"
                onChange={this.onChange}
                value={this.state.years} />
              <div className="mt-2">About Me:</div>
              <textarea
                id="about_me"
                type="text"
                className="form-control"
                maxLength="250"
                onChange={this.onChange}
                value={this.state.about_me} />
              <div className="float-right">
                {this.state.about_me.length}/250
              </div>
              <div className="mt-4">Profile Photo:</div>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    id="picture"
                    className="p-0"
                    type="file"
                    name="picture"
                    onChange={this.onChange} />
                  <label className="custom-file-label" htmlFor="picture">{this.state.filename ? this.state.filename : 'Choose File'}</label>
                </div>
              </div>
              <button
                type="button"
                className="btn searchButton shadow-none"
                onClick={this.onSubmit}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
