import React from 'react';
import Header from './header';
import ProjectSubmit from './projectSubmit';
import ProjectList from './project-list';
import ProjectDetails from './project-details';
import SearchPage from './project-search';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'submit',
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
    let body;
    let active;

    switch (this.state.view.name) {
      case 'list':
        body =
        <ProjectList
        view={this.setView}
        getProjectCallback={this.getProjects}
        projects={this.state.projects}/>
        active = 'home';
        break;
      case 'submit':
        body =
        <ProjectSubmit />;
        break;
      case 'details':
        body = <ProjectDetails
        projectID={this.state.view.params.id}
        view={this.setView}/>;
        active = 'provs';
        break;
      case 'search':
        body =
        <SearchPage
        projects={this.state.projects}
        results={this.state.searchResults}
        searchCallback={this.searchProjects}
        view={this.setView}/>
        break;
    }

    return (
      <>
        <Header
        setViewCallback={this.setView}
        currentActive={active}
        searchCallback={this.searchProjects}/>
        {body}
      </>
    );
  }
}
