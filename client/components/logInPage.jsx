import React from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.logInCallback(this.state.name);
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
        <div className="log-in-form d-flex justify-content-center">
          <form>
            <div className="mb-3">Username :</div>
            <input
              type="text"
              className="mr-3 login-username"
              value={this.state.name}
              onChange={this.onChange} />
            {
              error && !user
                ? <div>Invalid Username</div>
                : null
            }
            <div className="button-container mt-3">
              <button
                type="button"
                onClick={this.onSubmit}
                className="btn searchButton shadow-none">Log-In
              </button>
              <Link to="/signup">
                <button
                  type="button"
                  className="btn searchButton shadow-none ml-3">Sign-Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
