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
        name: 'list',
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

    switch (this.state.view.name) {
      case 'list':
        body = <ProjectList />;
        break;
      case 'submit':
        body = <Projectsubmit />;
        break;
      case 'details':
        body = <ProjectDetails />;
        break;
    }

    return (
      <>
      <Header />
      {body}
      </>
    );
  }
}
