import React from 'react';
import ProjectListItem from './projectlist-item';

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    fetch('/api/project.php')
      .then(res => res.json())
      .then(fetchedProjects => {
        this.setState({
           projects: fetchedProjects
           })
        })
      .catch(err => console.error(err));
  }

  render() {
    return (
     <div className="project-list-container row mt-4">
        <div className="spacer col col-2"></div>
        <div className="project-container col col-8 d-flex flex-column justify-content-center">
          <div className="project-tile-container">
              <div className="row">
                {this.state.projects.map(project => {
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
          <div className="spacer col col-2"></div>
           </div>
          );
        }
}
