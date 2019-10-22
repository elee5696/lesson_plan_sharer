import React from 'react';
import Ratings from './ratings';
import { Link } from 'react-router-dom';

export default class ProjectListItem extends React.Component {

  render() {
    return (
      <Link to={`/detail/${this.props.id}`}>
        <div
          className="card project-card-container container card col p-0 mb-4"
          style={{ minWidth: '150px' }}>
          <div className="card-img-top">
            <img
              className="image-prov-thumbnail"
              style={{ height: '100%', width: '100%' }}
              src={this.props.projectImage}
              alt={this.props.projectName} />
          </div>
          <div className="card-body">
            <h3 className="car-title text-capitalize mb-3" >
              {this.props.projectName}
            </h3>
            <Ratings
              id={this.props.id}
              rating={this.props.rating}
              rating_count={this.props.rating_count} />
          </div>
        </div>

        <div
          className="card project-media-container container pl-0 mb-4"
          style={{ maxWidth: '800px' }}>
          <div className="row no-gutters">
            <div className="project-list-item-image-container">
              <img
                className="image-prov-thumbnail"
                style={{ height: '100%', width: '100%' }}
                src={this.props.projectImage}
                alt={this.props.projectName} />
            </div>
            <div className="media-body" >
              <div className="project-info col" >
                <h3 className="project-name text-capitalize mt-3" >
                  {this.props.projectName}
                </h3>
                <div
                  className="desc-box mt-3 mb-5"
                  style={{ height: '20%', fontSize: '0.9rem' }}>
                  <p className="project-description" >
                    {this.props.projectDescription}
                  </p>
                </div>
                <Ratings
                  id={this.props.id}
                  rating={this.props.rating}
                  rating_count={this.props.rating_count} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
