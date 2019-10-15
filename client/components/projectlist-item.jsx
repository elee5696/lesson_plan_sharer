import React from 'react';

export default class ProjectListItem extends React.Component {
  render() {
    return (
      <div className="card card-container" style={{width: '60rem'}}>
        <div className="row">
          <div className="col">
            <img className="card-img-top list-image" src={this.props.projectImage} alt="Card image cap"/>
          </div>
          <div className="col card-body-container">
          <div className="card-body">
            <h5 className="card-title">{this.props.projectName}</h5>
            <p className="card-text">{this.props.projectDescription}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          </div>
</div>
</div>
    );
  }
}
