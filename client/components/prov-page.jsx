import React from 'react';
import Seachbar from './search-bar';
import ProjectList from './project-list';


export default class ProvPage extends React.Component {

  componentDidMount() {
    this.props.getProjectCallback();
  }

  render() {
    let body;

    if(this.props.results) {
      <ProjectList
        projects={this.props.results} />
    } else {
      body =
      <ProjectList
        projects={this.props.projects}/>
    }

    return(
      <div className="main-container row mt-4">
        <div className="spacer col col-1"></div>
        <div className="col col-10 main-content">
          <Seachbar searchCallback={this.props.searchCallback}/>
          <div className="row col-8 search-results-container ml-2">
            {body}
          </div>
        </div>
        <div className="spacer col col-1"></div>
      </div>
    );
  }
}
