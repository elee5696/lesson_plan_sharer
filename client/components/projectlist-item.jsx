import React from 'react';
import Ratings from './ratings';
import { Link } from 'react-router-dom';

export default class ProjectListItem extends React.Component {

  render() {
    return (

      <Link className="project-tile-container card col mb-4" to={`/detail/${this.props.id}`}>
        <div className="media" style={{ width: '16rem' }}> </div>
          <div className="project-tile-image ">
          <div className="project-image row text-right">
              <img className="image-prov-thumbnail " style={{ height: '5rem', width: '5rem' }} src={this.props.projectImage} alt={this.props.projectName}/>
              <div className="media-body" >
                <div className="project-info col" >
                  <p className="project-name-info text-capitalize" >{this.props.projectName}</p>
                  <Ratings
                    id={this.props.id}
                    rating={this.props.rating}
                    rating_count={this.props.rating_count} />
              </div>
            </div>
          </div>
          <div className="spacer col col-1"></div>
        </div>
      </Link>
    );
  }
}
