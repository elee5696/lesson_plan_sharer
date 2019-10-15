import React from 'react';


class Projectsubmit extends React.Component {
  constructor(props) {
    super(props);
  this.state ={
    info: [
      {
        "name": '',
        "description": ''
      }
    ]
  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProjectTitleChange = this.handleProjectTitleChange.bind(this);
  }
  handleProjectTitleChange(event) {
    this.setState({
      name: event.target.value
    })

  }
  handleSubmit(event){
    console.log(this.state.name);
    console.log(this.state.description);
    event.preventDefault();
  }
  handleDescriptionChange(event){
    this.setState({
      description: event.target.value
    })
  }
  render() {
    return (

      <form onSubmit = {this.handleSubmit}>
        <div class="form-group">
          <label >Project Title</label>
          <input onChange = {this.handleProjectTitleChange} type="text" className="form-control projectEntry" id="exampleFormControlInput1" placeholder="Project Entry"/>
        </div>
          <div class="form-group">
            <label >Description</label>
            <input onChange ={this.handleDescriptionChange} className="form-control descriptionBox" id="exampleFormControlTextarea1" placeholder="Description Text" rows="3"/>
          </div>
        <button onClick={this.handleSubmit} type="submit" class="btn btn-secondary btn-lg">Next</button>
      </form>

    );
  }
}

export default Projectsubmit;
