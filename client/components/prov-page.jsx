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
        projects={this.props.results ? this.props.results : this.props.projects} />;

    return (
      <div className="prov-page-container container mt-4">
        <Seachbar
          searchCallback={this.props.searchCallback}
          resetResults={this.props.resetResults}/>
        <div className="search-results-container container">
          {body}
        </div>
      </div>
    );
  }
}
