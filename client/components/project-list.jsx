import React from 'react';
import ProjectListItem from './projectlist-item';
import Ratings from './ratings';
export default class ProjectList extends React.Component {

  render() {
    return (
      <div className="project-list-container row mt-4">
          <div className="project-tile-container">
            <div className="project-list-item container">
                {this.props.projects.map(project => {
                  return (
                      <ProjectListItem
                        key={project.ID}
                        id={project.ID}
                        projectImage={project.IMAGE}
                        projectName={project.NAME}
                        projectDescription={project.DESCRIPTION}
                        view={this.props.view}
                        rating={project.RATING} />
                  );
                })}
              </div>
            </div>
      </div>
    );
  }
}
