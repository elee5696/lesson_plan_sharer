import React from 'react';
import Ratings from './ratings';
import { Link } from 'react-router-dom';

export default class ProjectListItem extends React.Component {

  render() {
    return (

      <Link className="project-tile-container container card col mb-4" to={`/detail/${this.props.id}`}>
        <div className="media w-100">
          <div className="project-list-item-image-container">
            <img
              className="image-prov-thumbnail"
              style={{ height: '100%', width: '100%' }}
              src={this.props.projectImage}
              alt={this.props.projectName} />
          </div>
          <div className="media-body" >
            <div className="project-info col text-right" >
              <p className="project-name-info text-capitalize" >
                {this.props.projectName}
              </p>
              <Ratings
                id={this.props.id}
                rating={this.props.rating}
                rating_count={this.props.rating_count} />
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
