import React from 'react';
import Ratings from './ratings';
import { Link } from 'react-router-dom';

export default class ProjectListItem extends React.Component {
  render() {
    return (
      <Link className="project-tile-container card col" to={`/detail/${this.props.id}`}>
        <div className="media" style={{ width: '17rem' }}>
          <div className="project-tile-image-container container-fluid">
            <div className="row">
              <img className="col-6 image-prov-thumbnail" style={{ height: '5rem', width: '5rem' }} src={this.props.projectImage} alt={this.props.projectName}/>
              <div className="media-body align-right" >
                <div className="project-info " >
                  <p className="project-name-info" >{this.props.projectName}</p>
                  <Ratings
                    id={this.props.id}
                    rating={this.props.rating}
                    rating_count={this.props.rating_count} />
                </div>
              </div>
            </div>
          </div>
          <div className="spacer col col-1"></div>
        </div>
      </Link>
    );
  }
}
