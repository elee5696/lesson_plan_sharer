import React from 'react';
import Header from './header';
import Searchbar from './search-bar';
import ProjectSubmit from './projectSubmit';
import ProjectList from './project-list';
import ProjectDetails from './project-details';
import SearchPage from './project-search';
import UserPage from './user-page';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'list',
        params: {}
      },
      projects: [],
      searchResults: []
    }
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
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Router>
        <div className="header-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="prov-logo navbar-brand" onClick={this.setView}>Prov</a>
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
                <li className='nav-item'>
                  <Link to="/search" className="nav-link">Search</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route path="/provs" render={(props) =>
            <ProjectList {...props}
              getProjectCallback={this.getProjects}
              projects={this.state.projects} />} />
          <Route path="/submit" component={ProjectSubmit} />
          <Route path="/search" render={(props) =>
            <SearchPage {...props}
              projects={this.state.projects}
              results={this.state.searchResults}
              searchCallback={this.searchProjects} />} />
          <Route path="/user" component={UserPage} />
          <Route path="/detail/:id" render={(props) =>
            <ProjectDetails {...props}
              projectID={this.state.location}/>} />
        </Switch>
      </Router>
    );
  }
}
