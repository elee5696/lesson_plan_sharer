import React from 'react';
import ProjectListItem from './projectlist-item';

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick() {
    this.setState({
      isClicked: !this.state.isClicked
    });

  }
  render() {
    return (
      <div className="mt-4 container">
        {this.props.projects.map(project => {
          return (
            <ProjectListItem
              key={project.id}
              id={project.id}
              projectImage={project.image}
              projectName={project.name}
              projectDescription={project.description}
              rating={project.rating_data.rating}
              rating_count={project.rating_data.count}
            />
          );
        })}
      </div>
    );
  }
}
