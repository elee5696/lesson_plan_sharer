import React from 'react';
import ProjectListItem from './projectlist-item';
import Ratings from './ratings';
export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProjectCallback();
  }

  render() {
    return (
     <div className="project-list-container row mt-4">
        <div className="spacer col col-2"></div>
        <div className="project-container col col-8 d-flex flex-column justify-content-center">
          <div className="project-tile-container">
              <div className="row">
                {this.props.projects.map(project => {
                  return (
                    <div>
                    <ProjectListItem
                      key={project.ID}
                      id={project.ID}
                      projectImage={project.IMAGE}
                      projectName={project.NAME}
                      projectDescription={project.DESCRIPTION}
                      view={this.props.view}
                      rating={project.RATING}
                    />

                  </div>
                  );
                })
                }
              </div>
            </div>
            </div>
          <div className="spacer col col-2"></div>
           </div>
          );
        }
}
