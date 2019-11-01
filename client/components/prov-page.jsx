import React from 'react';
import Searchbar from './search-bar';
import ProjectList from './project-list';
import WriteButton from './write-button';

export default class ProvPage extends React.Component {

  render() {
    let body =
      <ProjectList
        projects={this.props.results ? this.props.results : this.props.projects} />;

    return (
      <div className="prov-page-container container mt-4">
        <Searchbar
          searchCallback={this.props.searchCallback}
          resetResults={this.props.resetResults}/>
        <div className="search-results-container container">
          {body}
          <WriteButton />
        </div>
      </div>
    );
  }
}
