import React from 'react';
import Ratings from './ratings';
import { Link } from 'react-router-dom';

export default class ProjectListItem extends React.Component {

  render() {
    return (

      <Link className="project-tile-container card col" to={`/detail/${this.props.id}`}>
        <div className="media" style={{ width: '17rem' }}> </div>
          <div className="project-tile-image row">
            <div className="project-image row">
              <img className="image-prov-thumbnail " style={{ height: '5rem', width: '5rem' }} src={this.props.projectImage} alt={this.props.projectName}/>
              <div className="media-body" >
                <div className="project-info " >
                  <p className="project-name-info" >{this.props.projectName}</p>
                  <Ratings
                    rating={this.props.rating} />

              </div>
            </div>
          </div>
          <div className="spacer col col-1"></div>
        </div>
      </Link>
    );
  }
}
