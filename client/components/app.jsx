import React from 'react';
import Header from './header';
import ProjectSubmit from './projectSubmit';
import ProjectList from './project-list';
import ProjectDetails from './project-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'submit',
        params: {}
      }
    }
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    let body;
    let active;

    switch (this.state.view.name) {
      case 'list':
        body = <ProjectList view={this.setView}/>;
        active = 'home';
        break;
      case 'submit':
        body = <ProjectSubmit />;
        break;
      case 'details':
        body = <ProjectDetails
        projectID={this.state.view.params.id}
        view={this.setView}/>;
        active = 'provs';
        break;
    }

    return (
      <>
      <Header
      setViewCallback={this.setView}
      currentActive={active}/>
      {body}
      </>
    );
  }
}
