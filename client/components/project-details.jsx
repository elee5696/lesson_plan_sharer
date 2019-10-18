import React from 'react';
import ListBubble from './list-bubble';
import Ratings from './ratings';
import { Link } from 'react-router-dom';
import Searchbar from './search-bar';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/project.php?id=${id}`)
      .then(res => res.json())
      .then(project => {
        this.setState({
          project: project[0]
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.project === null) {
      return <div className="page-loading">Page loading...</div>;
    }

    let setupSteps = this.state.project.set_up.split(',');

    return (
      <div className="entire-page-container container">
        <div className="back-button-container row mb-2">
          <Link to="/provs" className="back-button col" style={{textDecoration: 'none', color: 'black'}}>{'< Back'}</Link>
        </div>
        <div className="project-image-container row justify-content-center mb-3">
          <img className="project-image col" style={{ width: '20rem' }} src="/images/beautiful-flower-field-background-1.jpg"></img>
        </div>
        <div className="project-title-container row mb-3">
          <h1 className="project-title col display-3">{this.state.project.name}</h1>
        </div>
        <div className="project-desc-container mb-3">
          <div className="project-desc-header-container row mb-2">
            <h1 className="project-desc-header col">Description</h1>
          </div>
          <div className="project-desc-body row">
            <h3 className="col">{this.state.project.description}</h3>
          </div>
        </div>
        <div className="project-goals-container">
          <div className="project-goals-header-container mb-2">
            <h1 className="project-goals-header">Goals</h1>
          </div>
          <div className="project-goals-list row mb-2">
            {this.state.project.goals.map((e, i) => {
              return (
                <ListBubble
                  key={i}
                  className="project-goals-list-item"
                  text={e} />
              );
            })}
          </div>
        </div>
        <div className="project-setup-materials-container">
          <div className="project-setup-materials-header row">
            <div className="project-setup-header-container col mb-2">
              <h1 className="project-setup-header">Set-Up</h1>
            </div>
            <div className="project-materials-header-container col mb-2">
              <h1 className="project-materials-header">Materials</h1>
            </div>
          </div>
          <div className="project-setup-materials-body row">
            <div className="project-setup-container col mb-5 w-75">
              <div className="project-setup-desc-body">
                {setupSteps.map((e, i) => {
                  return (
                    <h5 key={i} className="project-setup-steps mb-2">{i + 1}. {e}</h5>
                  );
                })}
              </div>
            </div>
            <div className="project-materials-container col mb-5">
              <div className="project-materials-list-container">
                {this.state.project.materials.map((e, i) => {
                  return (
                    <ListBubble
                      key={i}
                      className="project-materials-list-item"
                      text={e} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="project-outcomes-container">
          <div className="project-outcomes-header-container row mb-4">
            <h1 className="project-outcomes-header col">Outcome</h1>
          </div>
          <div className="project-outcomes-body row mb-4">
            <h5 className="col">{this.state.project.outcomes}</h5>
          </div>
        </div>
        <div className="project-rating-container">
          <div className="project-rating-header-container row mb-4">
            <h1 className="project-rating-header col">Feedback</h1>
          </div>
          <div className="project-rating-body mb-4">
            <Ratings rating={this.state.project.rating}/>
          </div>
        </div>
       </div>
    );
  }
}
