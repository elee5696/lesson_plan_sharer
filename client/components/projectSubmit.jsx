import React from 'react';
// import { Link } from 'react-router-dom'
import ListBubble from './list-bubble';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class ProjectSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      'description': '',
      'set_up': '',
      'outcomes': '',
      'rating': '',
      'image': null,
      'goalsToSubmit': [],
      'materialsToSubmit': [],
      'goals': '',
      'materials': ''
    };
    this.materialsArray = [];
    this.goalsArray = [];
    this.image= null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoalSubmit = this.handleGoalSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProjectTitleandImageChange = this.handleProjectTitleandImageChange.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleSetUpChange = this.handleSetUpChange.bind(this);
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleOutcomesChange = this.handleOutcomesChange.bind(this);
    this.handleMaterialSubmit = this.handleMaterialSubmit.bind(this);
  }
  handleProjectTitleandImageChange(event) {
    this.setState({
      name: event.target.value,
      image: this.image
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    let body = JSON.stringify({
      name: this.state.name,
      description: this.state.description,
      set_up: this.state.set_up,
      outcomes: this.state.outcomes,
      goals: this.state.goalsToSubmit,
      materials: this.state.materialsToSubmit,
      image: this.state.image

    });
    fetch(`/api/project.php`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: body
    })
      .catch(error => console.error(error));
  }
  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }
  handleGoalChange(event) {
    this.setState({
      goals: event.target.value
    });
  }
  handleGoalSubmit(event) {
    event.preventDefault();
    this.goalsArray.push(this.state.goals);
    this.setState({
      goals: '',
      goalsToSubmit: this.goalsArray
    });
  }
  handleSetUpChange(event) {
    this.setState({
      set_up: event.target.value
    });
  }
  handleMaterialChange(event) {
    this.setState({
      materials: event.target.value
    });
    event.preventDefault();
  }
  handleMaterialSubmit(event) {
    event.preventDefault();
    this.materialsArray.push(this.state.materials);
    this.setState({
      materials: '',
      materialsToSubmit: this.materialsArray
    });
  }
  handleOutcomesChange(event) {
    this.setState({
      outcomes: event.target.value
    });
  }
  componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      this.render();
    }
  }
  componentDidMount(){
    var pictureName = this.props.location.state.file.name;
    var pictureHasSpaces = pictureName.match('[\s]');
    if(pictureHasSpaces){
      var pictureBrokenUp=pictureName.split(" ");
      var pictureName = pictureBrokenUp.join("");
    }
    this.image = pictureName;
  }
  render() {
    return (
      <div className= "container row m-0 p-0 col-sm-10 col-md-12">
        <div className="spacer col col-sm-0 col-md-1"></div>
        <div className="form container col col-sm-10 col-md-10 d-flex justify-content-center m-0">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label >Project Title</label>
              <input
                onChange={this.handleProjectTitleandImageChange}
                type="text"
                className="form-control projectEntry"
                placeholder="Project Entry"></input>
            </div>
            <div className="form-group">
              <label >Description</label>
              <textarea onChange={this.handleDescriptionChange}
                className="form-control descriptionBox" placeholder="Description Text" rows="3"></textarea>
            </div>
            <div>
              <div className="form-group inline">
                <label className="col-sm-2 col-form-label">Goals</label>
                <div className="col-sm-10 col-md-10 p-0">
                  <input type="text"
                    className="form-control"
                    id="goalSubmit"
                    onChange={this.handleGoalChange}
                    value={this.state.goals}
                    placeholder="Goals Entry"></input>
                  <button onClick={this.handleGoalSubmit}>+</button>
                </div>
                <div className="row goal-bubble-container">
                  {this.state.goalsToSubmit.map((goal, index) => {
                    return <ListBubble text={goal} key={index}/>;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className="form-group inline ">
                <label
                  className="col-sm-2 col-form-label">Materials</label>
                <div className="col-sm-10 col-md-10 p-0">
                  <input onChange={this.handleMaterialChange}
                    type="text" className="form-control" id="materialSubmit"
                    placeholder="Materials Entry" value={this.state.materials}></input>
                  <button onClick={this.handleMaterialSubmit}>+</button>
                </div>
                <div className="row materials-bubble-container">
                  {this.state.materialsToSubmit.map((material, index) => {
                    return <ListBubble text={material} key={index} />;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className="form-group">
                <label>Set-Up</label>

                <textarea onChange={this.handleSetUpChange}
                  type="text"
                  className="form-control setUpEntry" id="setUp"
                  placeholder="Set-Up Entry" />
                <small className="text-muted"> Separate instructions with commas</small>
              </div>
              <div className="form-group">
                <label>Outcomes</label>
                <textarea onChange= {this.handleOutcomesChange}
                  className="form-control outcomeBox"
                  id="outcomeBox"
                  placeholder="Outcome Entries"
                  rows="3"></textarea>
              </div>
              <button onClick={this.handleSubmit}
                type="submit"
                className="btn btn-secondary btn-lg">Submit</button>
            </div>
          </form>
        </div>
        <div className="spacer col col-sm-0 col-md-1"></div>
      </div>

    );
  }
}
export default ProjectSubmit;
