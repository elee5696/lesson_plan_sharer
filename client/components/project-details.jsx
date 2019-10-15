

/** Pass in the project ID needed to render as a prop */



import React from 'react';
import ListBubble from './list-bubble';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }

  componentDidMount() {
    fetch(`/api/project.php?id=${this.props.projectID}`)
      .then(res => res.json())
      .then(project => {
        this.setState({
          project: project[0]
        });
      })
      .catch(err => console.error(err))
  }

  render() {
    if (this.state.project === null) {
      return <div className="page-loading">Page loading...</div>;
    }

    let setupSteps = this.state.project.SET_UP.split(',');

    return (
      <div className="body-container row mt-4">
        <div className="spacer col col-2"></div>
        <div className="project-container col col-8">
          <div className="project-image-container d-flex justify-content-center mb-5">
            <img className="project-image" src={this.state.project.IMAGE}></img>
          </div>
          <div className="project-title-contatiner mb-5">
            <h1 className="project-title display-3">{this.state.project.NAME}</h1>
          </div>
          <div className="project-desc-container mb-5">
            <div className="project-desc-header-container mb-4">
              <h1 className="project-desc-header">Description</h1>
            </div>
            <div className="project-desc-body">
              <h3>{this.state.project.DESCRIPTION}</h3>
            </div>
          </div>
          <div className="project-goals-container">
            <div className="project-goals-header-container mb-4">
              <h1 className="project-goals-header">Goals</h1>
            </div>
            <div className="project-goals-list mb-4 row ml-0">
              {this.state.project.GOALS.map((e, i) => {
                return (
                  <ListBubble
                    className="project-goals-list-item"
                    text={e} />
                )
              })}
            </div>
          </div>
          <div className= "project-setup-materials-container row ml-0">
            <div className="project-setup-container mb-5 w-75">
              <div className="project-setup-header-container mb-4">
                <h1 className="project-setup-header">Set-Up</h1>
              </div>
              <div className="project-setup-desc-body">
                {setupSteps.map((e, i) => {
                  return (
                    <h5 className="project-setup-steps mb-2">{i + 1}. {e}</h5>
                  )
                })}
              </div>
            </div>
            <div className="project-materials-container mb-5 row-5">
              <div className="project-materials-header-container mb-4">
                <h1 className="project-materials-header">Materials</h1>
              </div>
              <div className="project-materials-list-container">
                {this.state.project.MATERIALS.map((e, i) => {
                  return (
                    <ListBubble
                    className="project-materials-list-item"
                    text={e}/>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="project-outcomes-container">
            <div className="project-outcomes-header-container mb-4">
              <h1 className="project-outcomes-header">Outcome</h1>
            </div>
            <div className="project-outcomes-body mb-4">
              <h5>{this.state.project.OUTCOMES}</h5>
              </div>
          </div>
          <div className="project-rating-container">
            <div className="project-rating-header-container mb-4">
              <h1 className="project-rating-header">Feedback</h1>
            </div>
            <div className="project-rating-body mb-4">{this.state.project.RATING}</div>
          </div>
        </div>
        <div className="col col-2 spacer"></div>
      </div>
    );
  }
}
