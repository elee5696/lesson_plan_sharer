import React from 'react';
import Seachbar from './search-bar';
import ProjectList from './project-list';

export default class ProvPage extends React.Component {

  componentDidMount() {
    this.props.getProjectCallback();
  }

  render() {
    let body =
      <ProjectList
        projects={this.props.results ? this.props.result : this.props.projects} />;

    return (
      <div className="prov-page-container container mt-4">
        <Seachbar searchCallback={this.props.searchCallback}/>
        <div className="search-results-container container">
          {body}
        </div>
      </div>
    );
  }
}
