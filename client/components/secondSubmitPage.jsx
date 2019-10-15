import React from 'react';

class SecondSubmit extends React.Component {
constructor(props){
  super(props);
  this.state = {
    info: [
      {"id": "",
      "name": "",
      "description": "",
      "set-up": "",
      "outcomes": "",
      "rating": null,
      "image": "",
      "goals": []
      }]
  };
  this.handleGoalChange = this.handleGoalChange.bind(this);
  this.handleSubmitChange = this.handleSubmitChange.bind(this);
}



handleGoalChange(event){
  this.setState({goals: event.target.value });

}

handleSubmitChange(){
  console.log(this.state.goals);
  event.preventDefault();
}



  render() {
    return (
      <div>
      <div>
        <form className="form-inline">
          <div className="form-group row"> </div>
            <label for="colFormLabel" className="col-sm-2 col-form-label">Goals</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="goalSubmit" onChange={this.handleGoalChange} value={this.state.goals} placeholder="Goals Entry"></input>
            <button type="button" onClick={this.handleSubmitChange} className="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
      <div>
        <form className="form-inline">
          <div className="form-group row"> </div>
          <label for="colFormLabel" className="col-sm-2 col-form-label">Materials</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="materialSubmit" placeholder="Materials Entry"></input>
            <button type="button" className="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
        <form>
          <div className="form-group">
            <label for="SetUp">Set-Up</label>
            <input type="text" className="form-control setUpEntry" id="setUp" placeholder="Setup Entry" />
          </div>
          <div className="form-group">
            <label for="Outcome">Outcomes</label>
            <textarea className="form-control outcomeBox" id="outcomeBox" placeholder="Outcome Entries" rows="3"></textarea>
          </div>
          <button type="button" className="btn btn-secondary btn-lg">Next</button>
        </form>
      </div>
    );

  }
}

export default SecondSubmit;
