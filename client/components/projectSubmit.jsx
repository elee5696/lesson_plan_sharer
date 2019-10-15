import React from 'react';
// import { Link } from 'react-router-dom';

class ProjectSubmit extends React.Component {
  constructor(props) {
    super(props);
  this.state ={
        "name": "",
        "description": "",
        "set_up": "",
        "outcomes": "",
        "rating": "",
        "image": "",
        "goals": "",
        "goalsToSubmit": [],
        "materials": "",
        "materialsToSubmit": ""
      }
    this.materialsArray =[],
    this.goalsArray = [];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoalSubmit = this.handleGoalSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProjectTitleChange = this.handleProjectTitleChange.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleSetUpChange = this.handleSetUpChange.bind(this);
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleOutcomesChange = this.handleOutcomesChange.bind(this);
    this.handleMaterialSubmit = this.handleMaterialSubmit.bind(this);
  }
  handleProjectTitleChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit(event){
    // <Link to = '/project-details'></Link>
    event.preventDefault();
  }
  handleDescriptionChange(event){
    this.setState({
      description: event.target.value
    })
  }
  handleGoalChange(event) {
  this.setState({
    goals: event.target.value
  })
  }
  handleGoalSubmit (event) {
    event.preventDefault();
    this.goalsArray.push(this.state.goals);
    this.setState({
      goals: "",
      goalsToSubmit: this.goalsArray
  })
  }
  handleSetUpChange (event) {
    this.setState({
    set_up: event.target.value
  })
  }
  handleMaterialChange (event) {
    this.setState({
    materials: event.target.value
  })
    event.preventDefault();
  }
  handleMaterialSubmit(event) {
    event.preventDefault();
    this.materialsArray.push(this.state.materials);
    this.setState({
      materials: "",
      materialsToSubmit: this.materialsArray
    })
  }
  handleOutcomesChange(event) {
    this.setState({
      outcomes: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label >Project Title</label>
            <input
            onChange={this.handleProjectTitleChange}
            type="text"
            className="form-control projectEntry"
            placeholder="Project Entry"></input>
          </div>
          <div className="form-group">
            <label >Description</label>
            <input onChange={this.handleDescriptionChange}
            className="form-control descriptionBox" placeholder="Description Text" rows="3"></input>
          </div>
          <div>
            <div className="form-group inline">
              <label className="col-sm-2 col-form-label">Goals</label>
              <div className="col-sm-10">
                <input type="text"
                  className="form-control"
                  id="goalSubmit"
                  onChange={this.handleGoalChange}
                  value={this.state.goals}
                  placeholder="Goals Entry"></input>
                <button onClick={this.handleGoalSubmit}>+</button>
              </div>
            </div>
        </div>
          <div>
            <div className="form-group inline">
              <label for="colFormLabel"
              className="col-sm-2 col-form-label">Materials</label>
              <div className="col-sm-10">
                <input onChange={this.handleMaterialChange}
                type="text" className="form-control" id="materialSubmit"
                placeholder="Materials Entry"></input>
                <button onClick={this.handleMaterialSubmit}>+</button>
              </div>
            </div>
          </div>
          <div>
          <div className="form-group">
            <label for="SetUp">Set-Up</label>
            <input onChange={this.handleSetUpChange}
            type="text"
            className="form-control setUpEntry" id="setUp"
            placeholder="Setup Entry" />
          </div>
          <div className="form-group">
            <label for="Outcome">Outcomes</label>
            <textarea onChange= {this.handleOutcomesChange}
            className="form-control outcomeBox"
            id="outcomeBox"
            placeholder="Outcome Entries"
            rows="3"></textarea>
          </div>
          <button onClick= {this.handleSubmit}
          type="button"
          className="btn btn-secondary btn-lg">Submit</button>
        </div>
      </form>
    </div>
    );
  }
}

export default ProjectSubmit;
