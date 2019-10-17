import React from 'react';
import ProjectDetails from './project-details';
import { Route, Link } from 'react-router-dom';
import Ratings from './ratings';

export default class ProjectListItem extends React.Component {
  render() {
    return (

      <div className="project-tile-container ml-3 mb-3 d-flex justify-content-between" onClick={() => this.props.view('details', { id: this.props.id })}>
      <div className="card" style={{width: '15rem'}}>
          <div className="project-tile-image-container">
            <img className="card-img-top" style={{ height: '10rem' }} src={this.props.projectImage} alt="Card image cap"/>
        </div>
          <div className="card-body">
            <h5 className="card-title">{this.props.projectName}</h5>
            <p className="card-text">{this.props.projectDescription}</p>
              <Link to={`/detail/${this.props.id}`} className="btn btn-outline-dark">View Details</Link>
              <div><Ratings
            rating={this.props.rating} /></div>
          </div>
          </div>
</div>
</div>


    );
  }
}
