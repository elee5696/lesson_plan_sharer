import React from 'react';
// import { Link } from 'react-router-dom'
import ListBubble from './list-bubble';
import { Link, Redirect } from 'react-router-dom';

class EditProjectSubmit extends React.Component {
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
      'materials': '',
      'userId': ''
    };
    this.id = null;
    this.materialsArray = [];
    this.goalsArray = [];
    this.image = null;
    this.location = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoalSubmit = this.handleGoalSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProjectTitleandImageChange = this.handleProjectTitleandImageChange.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleSetUpChange = this.handleSetUpChange.bind(this);
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleOutcomesChange = this.handleOutcomesChange.bind(this);
    this.handleMaterialSubmit = this.handleMaterialSubmit.bind(this);
    this.goToDetails = this.goToDetails.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
    this.deleteMaterial = this.deleteMaterial.bind(this);
  }

  handleProjectTitleandImageChange(event) {
    this.setState({
      name: event.target.value,
      image: this.image,
      userId: this.props.userData.id

    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let body = JSON.stringify({
      project_id: this.id,
      name: this.state.name,
      description: this.state.description,
      set_up: this.state.set_up,
      outcomes: this.state.outcomes,
      goals: this.state.goalsToSubmit,
      materials: this.state.materialsToSubmit,
      image: `/images/${this.state.image}`,
      user_id: this.state.userId

    });

    fetch(`/api/project.php`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: body
    })
      .then(resp => resp.json())
      .then(response => {
        const location = `/detail/${response}`;
        return <Redirect to= {location} />;
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

  componentDidMount() {
    if (this.props.location.state) {
      const regex = '[\\s]';
      let pictureName = this.props.location.state.file.name;
      let pictureHasSpaces = pictureName.match(regex);
      if (pictureHasSpaces) {
        let pictureBrokenUp = pictureName.split(' ');
        pictureName = pictureBrokenUp.join('');
      }
      this.image = pictureName;
    }
    let edit = this.props.location.state.projectToEdit;

    this.setState({
      'name': edit.name,
      'description': edit.description,
      'set_up': edit.set_up,
      'outcomes': edit.outcomes,
      'rating': edit.rating,
      'goalsToSubmit': edit.goals,
      'materialsToSubmit': edit.materials,
      'goals': '',
      'materials': '',
      'image': this.props.location.state.file.name,
      'userId': edit.user_id
    });
    this.id = edit.id;
    this.goalsArray = edit.goals;
    this.materialsArray = edit.materials;
  }

  deleteGoal(text) {
    let newGoalsArray = this.goalsArray.filter(item => {
      return item !== text;
    });
    this.goalsArray = newGoalsArray;

  }
  deleteMaterial(text) {
    let newMaterialsArray = this.materialsArray.filter(item => {
      return item !== text;
    });
    this.materialsArray = newMaterialsArray;
  }
  goToDetails() {
    return this.id;
  }
  render() {
    if (!this.props.userData) {
      return (
        <div className="container">
          <h1 className="d-flex justify-content-center">Please Log-In</h1>
        </div>
      );
    }
    return (
      <div className= "submitForm container row p-0 col-md-10 justify-content-center">
        <div className="spacer col col-md-1"></div>
        <div className="form container col col-md-8 d-flex justify-content-center m-0">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Project Title</label>
              <input
                onChange={this.handleProjectTitleandImageChange}
                type="text"
                value={this.state.name}
                className="form-control projectEntry"
                placeholder="Project Entry"></input>
            </div>
            <div className="description form-group">
              <label>Description</label>
              <textarea onChange={this.handleDescriptionChange}
                value={this.state.description}
                className="form-control descriptionBox" placeholder="Description Text" rows="3"></textarea>
            </div>
            <div>
              <div className="goals form-group inline">
                <label className="col-form-label">Goals</label>
                <div className="col-md-8 p-0">
                  <input type="text"
                    className="form-control"
                    id="goalSubmit"
                    onChange={this.handleGoalChange}
                    value={this.state.goals}
                    placeholder="Goals Entry"></input>
                  <button onClick={this.handleGoalSubmit}>+</button>
                </div>
                <div className="row goal-bubble-container justify-content-center">
                  {this.state.goalsToSubmit.map((goal, index) => {
                    return <ListBubble
                      text={goal}
                      key={index}
                      minWidth="140px"
                      maxWidth="140px"
                      deleteGoal ={this.deleteGoal}/>;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className="materials form-group inline ">
                <label
                  className="col-form-label">Materials</label>
                <div className="col-md-8 p-0">
                  <input onChange={this.handleMaterialChange}
                    type="text" className="form-control" id="materialSubmit"
                    placeholder="Materials Entry" value={this.state.materials}></input>
                  <button onClick={this.handleMaterialSubmit}>+</button>
                </div>
                <div className="row materials-bubble-container justify-content-center">
                  {this.state.materialsToSubmit.map((material, index) => {
                    return <ListBubble
                      text={material}
                      key={index}
                      minWidth="140px"
                      maxWidth="140px"
                      deleteMaterial = {this.deleteMaterial}/>;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className="set-up form-group">
                <label>Set-Up</label>
                <textarea onChange={this.handleSetUpChange}
                  value= {this.state.set_up}
                  type="text"
                  className="form-control setUpEntry" id="setUp"
                  placeholder="Set-Up Entry" />
                <small className="text-muted"> Separate instructions with commas</small>
              </div>
              <div className="outcomes form-group">
                <label>Outcomes</label>
                <textarea onChange= {this.handleOutcomesChange}
                  value = {this.state.outcomes}
                  className="form-control outcomeBox"
                  id="outcomeBox"
                  placeholder="Outcome Entries"
                  rows="3"></textarea>
              </div>
              <Link to={`/detail/${this.id}`}>
                <button onClick={this.handleSubmit}
                  type="submit"
                  className="projectSubmitButton btn btn-secondary btn-lg"
                  style={{ color: 'white' }}>
                  Submit Changes</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="spacer col-md-1"></div>
      </div>
    );
  }
}
export default EditProjectSubmit;
