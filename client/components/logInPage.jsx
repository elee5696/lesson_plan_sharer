import React from 'react';

export default class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

  onChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.logInCallback(this.state.name);
    this.props.history.push(`/user`);
  }

  onCreate(event) {
    event.preventDefault();
    this.props.history.push(`/signup`);
  }

  render() {
    return (
      <div className="container">
        <div className="log-in-form d-flex justify-content-center">
          <form>
            <div className="mb-3">Username :</div>
            <input
              type="text"
              className="mr-3 login-username"
              value={this.state.name}
              onChange={this.onChange} />
            <div className="button-container mt-3">
              <button
                type="button"
                onClick={this.onSubmit}
                className="btn searchButton shadow-none">Log-In
              </button>
              <button
                type="button"
                onClick={this.onCreate}
                className="btn searchButton shadow-none ml-3">Sign-Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
