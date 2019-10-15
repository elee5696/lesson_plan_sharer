import React from 'react';

class SecondSubmit extends React.Component {
constructor(props){
  super(props);
  this.state = {
    goals: "",
    materials: "",
    SetUp: "",
    Outcomes: "",
  };
  this.handleGoalChange = this.handleGoalChange.bind(this);
}



handleGoalChange(event){
  this.setState({goals: event.target.value });
  let goals = this.state.goals
}





  render() {
    return (
      <div>
      <div>
        <form class="form-inline">
          <div class="form-group row"> </div>
            <label for="colFormLabel" class="col-sm-2 col-form-label">Goals</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="goalSubmit" placeholder="Goals Entry"></input>
            <button type="button" class="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
      <div>
        <form class="form-inline">
          <div class="form-group row"> </div>
          <label for="colFormLabel" class="col-sm-2 col-form-label">Materials</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="materialSubmit" placeholder="Materials Entry"></input>
            <button type="button" class="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
        <form>
          <div class="form-group">
            <label for="SetUp">Set-Up</label>
            <input type="text" className="form-control setUpEntry" id="setUp" placeholder="Setup Entry" />
          </div>
          <div class="form-group">
            <label for="Outcome">Outcomes</label>
            <textarea className="form-control outcomeBox" id="outcomeBox" placeholder="Outcome Entries" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-secondary btn-lg">Next</button>
        </form>
      </div>
    );

  }
}

export default SecondSubmit;
