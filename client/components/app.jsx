import React from 'react';
import Homepage from './homepage';
import ProjectDetails from './project-details';
import ProjectSubmit from './projectSubmit';
import ProvPage from './prov-page';
import UserPage from './user-page';
import LogInPage from './logInPage';
import SignUpPage from './signUpPage';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import PictureUploadForm from './picture-upload';
import EditProjectSubmit from './editProjectSubmit';
import EditPictureUpload from './editPicture-upload';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchResults: '',
      currentUser: '',
      error: false,
      fetched: false,
      redirect: ''
    };

    this.addProject = this.addProject.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.searchProjects = this.searchProjects.bind(this);
    this.resetResults = this.resetResults.bind(this);
    this.userUpdate = this.userUpdate.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  componentDidMount() {
    const activeSession = window.sessionStorage.getItem('currentUser');
    if (activeSession) {
      this.setState({
        currentUser: JSON.parse(activeSession)
      });
    }
    this.getProjects();
  }

  searchProjects(value = '', field = 'name') {
    fetch(`/api/project.php?field=${field}&value=${value}`)
      .then(res => res.json())
      .then(results => this.setState({ searchResults: results }))
      .catch(err => console.error(err));
  }

  resetResults() {
    this.setState({
      searchResults: ''
    });
  }

  getProjects() {
    fetch('/api/project.php')
      .then(res => res.json())
      .then(fetchedProjects => {
        this.setState({
          projects: fetchedProjects,
          fetched: true
        });
      })
      .catch(err => console.error(err));
  }

  addProject(data) {
    let projects = [...this.state.projects];

    fetch(`/api/project.php`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    })
      .then(resp => resp.json())
      .then(response => {
        projects.push(response[0]);
        this.setState({
          redirect: `/detail/${response[0].id}`,
          projects: projects
        });
      })
      .catch(error => console.error(error));
  }

  updateProject(data) {
    let projects = [...this.state.projects];

    fetch(`/api/project.php`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        projects = projects.filter(e => parseInt(e.id) !== parseInt(data.id));
        projects.push(response[0]);
        this.setState({
          projects: projects,
          redirect: `/detail/${parseInt(response[0].id)}`
        });
      })
      .catch(error => console.error(error));
  }

  logIn(user) {
    fetch(`api/user.php?username=${user}`)
      .then(res => res.json())
      .then(userData => {
        if (!userData) {
          this.setState({
            error: true
          });
        } else {
          this.setState({
            currentUser: userData,
            error: false
          });
          window.sessionStorage.setItem('currentUser', JSON.stringify(userData));
        }
      })
      .catch(err => console.error(err));
  }

  userUpdate(data) {
    fetch(`/api/user.php`, data)
      .then(res => res.json())
      .then(userData => {
        this.setState({
          currentUser: userData,
          redirect: `/user/${userData.id}`
        });
        window.sessionStorage.setItem('currentUser', JSON.stringify(userData));
      })
      .catch(err => console.error(err));
  }

  signUp(data) {
    fetch('/api/user.php', {
      'method': 'POST',
      'body': data
    })
      .then(res => res.json())
      .then(userData => {
        if (!userData) {
          this.setState({
            error: true
          });
          return false;
        } else {
          this.setState({
            currentUser: userData,
            error: false
          });
          window.sessionStorage.setItem('currentUser', JSON.stringify(userData));
          return true;
        }
      })
      .catch(err => console.error(err));
  }

  logOut() {
    this.setState({
      currentUser: '',
      redirect: '/login'
    });
    window.sessionStorage.removeItem('currentUser');

  }

  deleteProject(projectId) {
    let projects = [...this.state.projects];
    const body = { id: parseInt(projectId) };

    fetch('/api/project.php', {
      method: 'DELETE',
      body: JSON.stringify(body)
    })
      .then(res => {
        projects = projects.filter(e => e.id !== projectId);
        this.setState({
          projects: projects
        });
      });
  }

  render() {
    let redirect = null;

    if (this.state.redirect) {
      redirect = <Redirect to={`${this.state.redirect}`} />;
    }

    return (
      <Router>
        {redirect}
        <div className="header-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="prov-logo navbar-brand p-0 m-0" to="/">
              <img src="/images/logo_mini.png" style={{ width: '40%' }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mt-2 mr-4 mt-lg-0">
                <li className='nav-item'>
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/provs" className="nav-link">Provs</Link>
                </li>
                {
                  this.state.currentUser
                    ? <>
                      <li className='nav-item'>
                        <Link to="/submit" className="nav-link">Submit</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to={`/user/${this.state.currentUser.id}`} className="nav-link">User</Link>
                      </li>
                    </>
                    : <li className='nav-item'>
                      <Link to="/login" className="nav-link">Log-In</Link>
                    </li>
                }
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" render={props =>
            <Homepage {...props}
              getProjectCallback={this.getProjects}
              projects={this.state.projects}
              searchCallback={this.searchProjects}
              resetResults={this.resetResults} />} />

          <Route path="/provs" render={props =>
            <ProvPage {...props}
              projects={this.state.projects}
              results={this.state.searchResults}
              resetResults={this.resetResults}
              getProjectCallback={this.getProjects}
              searchCallback={this.searchProjects} />} />

          <Route path="/user/:id" render={props =>
            <UserPage {...props}
              currentUser={this.state.currentUser}
              logOutCallback={this.logOut}
              userUpdateCallback={this.userUpdate} />} />

          <Route path="/login" render={props =>
            <LogInPage {...props}
              logInCallback={this.logIn}
              currentUser={this.state.currentUser}
              error={this.state.error} />} />

          <Route path="/signup" render={props =>
            <SignUpPage {...props}
              signUpCallback={this.signUp}
              currentUser={this.state.currentUser}
              error={this.state.error} />} />

          <Route path="/detail/:id" render={props =>
            <ProjectDetails {...props}
              userData={this.state.currentUser}
              projectID={this.state.location}
              fetched={this.state.fetched}
              getProjects={this.getProjects}
              deleteProject={this.deleteProject} />} />

          <Route path="/edit" render={props =>
            <EditPictureUpload {...props}
              userData={this.state.currentUser} />} />

          <Route path="/edit2" render={props =>
            <EditProjectSubmit {...props}
              userData={this.state.currentUser}
              listOfProjects={this.state.projects}
              updateProjectsCallback={this.updateProject} />} />

          <Route path="/submit" render={props =>
            <PictureUploadForm {...props}
              userData={this.state.currentUser} />} />

          <Route path="/submit2" render={props =>
            <ProjectSubmit {...props}
              userData={this.state.currentUser}
              addProject={this.addProject} />} />

        </Switch>
      </Router>
    );
  }
}
