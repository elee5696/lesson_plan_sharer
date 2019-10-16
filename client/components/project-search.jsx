import React from 'react';
import Seachbar from './search-bar';
import ProjectListItem from './projectlist-item';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  render() {
    let body;

    if(this.props.results) {
      body = this.props.results.map(project => {
          return (
            <ProjectListItem
              key={project.ID}
              id={project.ID}
              projectImage={project.IMAGE}
              projectName={project.NAME}
              projectDescription={project.DESCRIPTION}
              view={this.props.view} />
          )
        })
    } else {
      body = this.state.projects.map(project => {
        return (
          <ProjectListItem
            key={project.ID}
            id={project.ID}
            projectImage={project.IMAGE}
            projectName={project.NAME}
            projectDescription={project.DESCRIPTION}
            view={this.props.view} />
        )
      })
    }


    return(
      <div className="main-container row mt-4">
        <div className="spacer col col-2"></div>
        <div className="col col-8 main-content">
          <div className="col col-8 search-page-searchbar-container ">
            <Seachbar
              className="form-control mr-sm-2 w-75"
              searchCallback={this.props.searchCallback}/>
          </div>
          <div className="row col-8 search-results-container">
            {body}
          </div>
        </div>
        <div className="spacer col col-2"></div>
      </div>
    );
  }
}
