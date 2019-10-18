import React from 'react';
import ProjectListItem from './projectlist-item';

export default class ProjectList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }
handleFilterClick(){
  this.setState({
    isClicked: this.state.isClicked
  });


}
  render() {
    return (
      <div className="project-list-container row mt-4">
        <div className="spacer col col-1"></div>
        <div className="project-container col col-10 ml-4 d-flex justify-content-center">
          <div className="project-tile-container">
            <div className="top-rated-provs-container row col-10 mt-4">
              <h2 className="top-rated-text-provs">
                Provs
              </h2>
              <div>
                <div class="dropdown">
                  <button class="btn btn-outline dropdown-toggle" type="button" id="dropdownMenuButton" onClick={this.handleFilterClick} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    filter
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Name</a>
                    <a className="dropdown-item" href="#">Goals</a>
                    <a className="dropdown-item" href="#">Rating</a>
                    <a className="dropdown-item" href="#">User</a>
                  </div>

                </div>
              </div>
            </div>

            <div className="row card">
              {this.props.projects.map(project => {
                return (
                  <ProjectListItem
                    key={project.id}
                    id={project.id}
                    projectImage={project.image}
                    projectName={project.name}
                    projectDescription={project.description}
                    view={this.props.view}
                    rating={project.rating}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="spacer col col-1"></div>
      </div>
    );
  }
}
