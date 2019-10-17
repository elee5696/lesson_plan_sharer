import React from 'react';
import ProjectListItem from './projectlist-item';

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProjectCallback();
  }

  render() {
    return (
     <>
      <div className="project-list-container row mt-4">
          <div className="spacer col col-1"></div>
        <div className="project-container col col-10 ml-4 d-flex justify-content-center">
          <div className="project-tile-container">
              <div className="top-rated-provs-container row col-10 mt-4">
                <h2 className="top-rated-text-provs">
                    Top-rated provs
                </h2>
              </div>
              <div className="row">
                {this.props.projects.map(project => {
                  return (
                    <ProjectListItem
                      key={project.ID}
                      id={project.ID}
                      projectImage={project.IMAGE}
                      projectName={project.NAME}
                      projectDescription={project.DESCRIPTION}
                      view={this.props.view}
                    />
                  );
                })
                }
              </div>
             </div>
          </div>
        <div className="spacer col col-1"></div>
      </div>
    </>
          );
        }
}
