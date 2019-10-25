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
    let val = event.target.value;
    const fileReader = new FileReader();
    let file;

    switch (event.target.id) {
      case 'name':
        this.setState({ name: val });
        break;
      case 'username':
        this.setState({ username: val });
        break;
      case 'years':
        this.setState({ years: val });
        break;
      case 'about':
        this.setState({ about_me: val });
        break;
      case 'avatar':
        file = event.target.files[0];
        fileReader.onloadend = () => {
          this.setState({
            picture: file,
            imagePreviewUrl: fileReader.result
          });
        };
        fileReader.readAsDataURL(file);
        break;
    }
  }

  render() {
    let error = this.props.error;
    let user = this.props.currentUser;

    let redirect = null;

    if (!error && user) {
      redirect = <Redirect to='/user' />;
    }

    return (
      <div className="container">
        {redirect}
        <div className="container d-flex justify-content-center p-0 ml-5 mt-5">
          <form>
            <div>
              Username:
            </div>
            <input
              id="username"
              type="text"
              onChange={this.onChange}
              value={this.state.username}/>
            {
              error && !user
                ? <div>Username taken</div>
                : null
            }
            <div>
              Name:
            </div>
            <input
              id="name"
              type="text"
              onChange={this.onChange}
              value={this.state.name} />
            <div>
              Years of Experience:
            </div>
            <input
              id="years"
              type="number"
              onChange={this.onChange}
              value={this.state.years} />
            <div>
              About Me:
            </div>
            <textarea
              id="about"
              type="text"
              onChange={this.onChange}
              value={this.state.about_me} />
            <div>
              Avatar:
            </div>
            <input
              id="avatar"
              type="file"
              name="picture"
              onChange={this.onChange} />
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn searchButton shadow-none"
                onClick={this.onSubmit}>
                Sign-Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
