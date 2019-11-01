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
      redirect = <Redirect to={`/user/${user.id}`} />;
    }

    return (
      <div className="col-xs-11 col-lg-4 container mt-5">
        {redirect}
        <div className="container logo-container mt-4 d-flex justify-content-center mb-5">
          <img src="/images/logo.png" />
        </div>
        <div className="card p-5">
          <div className="d-flex justify-content-center mb-1">
            <h2>Log in to Prov</h2>
          </div>

          <div className="log-in-form d-flex justify-content-center">
            <form>

              <div className="">
                <input
                  type="text"
                  className="login-username form-control"
                  placeholder="Username"
                  value={this.state.name}
                  onChange={this.onChange}
                  style={{ width: '100%' }} />
                {
                  error && !user
                    ? <div>Invalid Username</div>
                    : null
                }
              </div>

              <div className="button-container mt-3 d-flex justify-content-center">
                <button
                  type="button"
                  onClick={this.onSubmit}
                  className="btn searchButton shadow-none">Log in
                </button>
                <Link to="/signup">
                  <button
                    type="button"
                    className="btn searchButton shadow-none ml-3">Sign up
                  </button>
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}
