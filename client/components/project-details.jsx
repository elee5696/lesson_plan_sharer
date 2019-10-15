import React from 'react';

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }

  componentDidMount() {
    fetch(`.//api/project.php?id=${this.props.params.id}`)
      .then(res => res.json())
      .then(project => {
        this.setState({
          project: project
        });
      })
      .catch(err => console.error(err))
  }

  render() {
    if (this.state.project === null) {
      return <div className="pageLoading">Page loading...</div>;
    }
    return (
      <div className="project-container">
        <img className="project-image">{this.props.project.image}</img>
        <div className="project-detail-desc">
          <div className="project-desc-title">{this.props.project.name}</div>
          <div className="project-desc-body">{this.props.project.description}</div>
        </div>
        <div className="project-detail-goal">
          <div className="project-goal-title"></div>
          <div className="project-goal-body"></div>
        </div>
        <div className="project-detail-setup">
          <div className="project-setup-title"></div>
          <div className="project-setup-desc"></div>
        </div>
        <div className="project-detail-materials">
          <div className="project-materials-title"></div>
          <div className="project-materials-desc"></div>
        </div>
        <div className="project-detail-outcomes">
          <div className="project-outcomes-title"></div>
          <div className="project-outcomes-desc"></div>
        </div>
        <div className="project-detail-feedback">
          <div className="project-feedback-title"></div>
          <div className="project-feedback-desc"></div>
        </div>
      </div>
    );
  }
}
