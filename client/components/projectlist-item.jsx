import React from 'react';
import { Link } from 'react-router-dom';

export default class ProjectListItem extends React.Component {
  render() {
    return (

      <Link className="project-tile-container ml-3 mb-3 d-flex justify-content-between" to={`/detail/${this.props.id}`}>
        <div className="card" style={{ width: '15rem' }}>
          <div className="project-tile-image-container">
            <img className="card-img-top" style={{ height: '10rem' }} src={this.props.projectImage} alt="Card image cap"/>
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.props.projectName}</h5>
            <p className="card-text">{this.props.projectDescription}</p>
          </div>
        </div>
      </Link>
    );
  }
}
