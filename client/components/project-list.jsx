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
      <div className="project-tile-container">
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
    );
  }
}
