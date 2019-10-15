import React from 'react';


class ProjectSubmit extends React.Component {
  constructor(props) {
    super(props);
  this.state ={
    info: [
      {
        "name": "",
        "description": "",
        "set_up": "",
        "outcomes": "",
        "rating": "",
        "image": "",
        "goals": [],
        "materials": []
      }
        ]
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProjectTitleChange = this.handleProjectTitleChange.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleSetUpChange = this.handleSetUpChange.bind(this);
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleOutcomesChange = this.handleOutcomesChange.bind(this);
  }
  handleProjectTitleChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit(event){
    console.log(this.state.name);
    console.log(this.state.description);
    console.log(this.state.materials);
    event.preventDefault();
  }
  handleDescriptionChange(event){
    this.setState({
      description: event.target.value
    })
  }
  handleGoalChange (event) {
    var copyGoalChanges = [];
    copyGoalChanges.push(event.target.value);
    // if(this.state.goals){
    //   copyGoalChanges.push(this.state.goals);
    // }
    this.setState({
    goals: copyGoalChanges
  })
    event.preventDefault();
  console.log(this.state.goals)
  }

  handleSetUpChange (event) {
    this.setState({
  set_up: event.target.value
  })
  }
  handleMaterialChange (event) {
    var copyMaterialChanges = [];
    copyMaterialChanges.push(event.target.value);
    this.setState({
  materials: copyMaterialChanges
  })
    event.preventDefault();
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
            <input onChange={this.handleProjectTitleChange} type="text" className="form-control projectEntry" placeholder="Project Entry"></input>
          </div>
          <div className="form-group">
            <label >Description</label>
            <input onChange={this.handleDescriptionChange} className="form-control descriptionBox" placeholder="Description Text" rows="3"></input>
          </div>
          <div>
            <form className="form-inline">
              <div className="form-group row"> </div>
              <label for="colFormLabel" className="col-sm-2 col-form-label">Goals</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="goalSubmit" onChange={this.handleGoalChange} value={this.state.goals} placeholder="Goals Entry"></input>
                <button onClick={this.handleGoalChange}>+</button>
              </div>
            </form>
          </div>
          <div>
            <form className="form-inline">
              <div className="form-group row"> </div>
              <label for="colFormLabel" className="col-sm-2 col-form-label">Materials</label>
              <div className="col-sm-10">
                <input onChange = {this.handleMaterialChange} type="text" className="form-control" id="materialSubmit" placeholder="Materials Entry"></input>
                <button onClick={this.handleMaterialChange}>+</button>
              </div>
            </form>
          </div>
        <div>
          <form>
            <div className="form-group">
              <label for="SetUp">Set-Up</label>
              <input onChange={this.handleSetUpChange} type="text" className="form-control setUpEntry" id="setUp" placeholder="Setup Entry" />
            </div>
            <div className="form-group">
              <label for="Outcome">Outcomes</label>
              <textarea onChange= {this.handleOutcomesChange} className="form-control outcomeBox" id="outcomeBox" placeholder="Outcome Entries" rows="3"></textarea>
            </div>
            <button onClick= {this.handleSubmit} type="button" className="btn btn-secondary btn-lg">Submit</button>
          </form>
      </div>
          </form>
      </div>
    );
  }
}

export default ProjectSubmit;
