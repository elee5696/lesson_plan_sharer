import React from 'react';

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
            <p className="card-text project-tile-text">{this.props.projectDescription}.</p>
            {/* <a href="#" onClick={() => this.props.view('details', { id: this.props.id })} className="btn btn-outline-dark project-tile-button">Learn More</a> */}
          </div>
</div>
</div>


    );
  }
}
