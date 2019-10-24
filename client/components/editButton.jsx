import React from 'react';

export default class editButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      set_up: null,
      outcomes: null,
      goals: null,
      materials: null,
      image: null,
      user_id: null
    };
    this.submitEdit = this.submitEdit.bind(this);
  }
  getInfo() {
    this.setState({
      name: this.props.projectName,
      description: this.props.projectDescription,
      set_up: this.props.set_up,
      outcomes: this.props.outcomes,
      goals: this.props.goals,
      materials: this.props.materials,
      image: this.props.image
    });
  }
  submitEdit() {
    const body = JSON.stringify({
      name: this.state.name,
      description: this.state.description,
      set_up: this.state.set_up,
      outcomes: this.state.outcomes,
      goals: this.state.goalsToSubmit,
      materials: this.state.materialsToSubmit,
      image: `/images/${this.state.image}`,
      user_id: this.props.user_id });
    const data = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: body
    };
    fetch(`/api/project.php`, data);
  }
  renderSubmit() {
    return (
      <button onClick={this.submitEdit}> Submit Changes</button>
    );
  }
  render() {
    if (this.props.user_id === this.props.project.id) {
      return (
        <button>Edit This Project</button>
      );
    }
  }
}
