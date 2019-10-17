import React from 'react';
import ProjectDetails from './project-details';
import { Route, Link } from 'react-router-dom';
import Ratings from './ratings';

export default class ProjectListItem extends React.Component {
  render() {
    return (
      <Link className="project-tile-container" to={`/detail/${this.props.id}`}>
        <div className="media" style={{width: '15rem'}}>
          <div className="project-tile-image-container">
            <img className="card-img-top" style={{ height: '5rem', width: '5rem' }} src={this.props.projectImage} alt={this.props.projectName}/>
          </div>
          <div className="media-body">
            <p className="m-0">{this.props.projectName}</p>
            <p>{this.props.projectDescription}</p>
            <Ratings
              rating={this.props.rating} />
          </div>
        </div>
      </Link>
    );
  }
}
