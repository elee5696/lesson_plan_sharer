import React from 'react';
import Homepage from './homepage';
import ProjectDetails from './project-details';
import ProjectSubmit from './projectSubmit';
import ProvPage from './prov-page';
import UserPage from './user-page';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import PictureUploadForm from './picture-upload';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'search',
        params: {}
      },
      projects: [],
      searchResults: ''
    };
    this.setView = this.setView.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.searchProjects = this.searchProjects.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  searchProjects(value, field = 'NAME') {
    let searchedProjects = this.state.projects.filter(e => e[field].includes(value));

    this.setState({
      view: {
        name: 'search',
        params: {}
      },
      searchResults: searchedProjects
    });

  }

  getProjects() {
    fetch('/api/project.php')
      .then(res => res.json())
      .then(fetchedProjects => {
        this.setState({
          projects: fetchedProjects
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Router>
        <div className="header-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="prov-logo navbar-brand" to="/">Prov</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mt-2 mr-4 mt-lg-0">
                <li className='nav-item'>
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/provs" className="nav-link">Provs</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/submit" className="nav-link">Submit</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/user" className="nav-link">User</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" render={props =>
            <Homepage {...props}
              getProjectCallback={this.getProjects}
              projects={this.state.projects} />} />
          <Route path="/submit" component={PictureUploadForm} />
          <Route path="/submit2" component={ProjectSubmit} />
          <Route path="/provs" render={props =>
            <ProvPage {...props}
              projects={this.state.projects}
              results={this.state.searchResults}
              getProjectCallback={this.getProjects}
              searchCallback={this.searchProjects} />} />
          <Route path="/user" component={UserPage} />
          <Route path="/detail/:id" render={props =>
            <ProjectDetails {...props}
              projectID={this.state.location}/>} />
        </Switch>
      </Router>
    );
  }
}
