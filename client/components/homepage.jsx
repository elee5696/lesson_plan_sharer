import React from 'react';
import ProjectListItem from './projectlist-item';
// import Carousel from './carousel';
// import Searchbar from './search-bar';

export default class Homepage extends React.Component {

  componentDidMount() {
    this.props.getProjectCallback();
  }

  render() {
    return (
    // <div>
    // <Searchbar/>
    // <Carousel/>
    // </div>

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
                      key={project.id}
                      id={project.id}
                      projectImage={project.image}
                      projectName={project.name}
                      projectDescription={project.description}
                      rating={project.rating}
                      rating_count={project.rating_count}
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
