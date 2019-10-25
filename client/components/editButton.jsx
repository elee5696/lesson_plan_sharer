import React from 'react';
import { Link } from 'react-router-dom';

export default class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.project,
      user_id: this.props.userData,
      currentUser: this.props.currentUser

    };
    this.renderSubmit = this.renderSubmit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }
  componentDidMount() {
    // this.setState({
    //   project: this.props.project,
    //   user_id: this.props.user_data.id,
    //   currentUser: this.props
    // });
    // console.log(this.props);
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
      <button className ="editProjectButton btn" onClick={this.submitEdit} > Submit Changes</button>
    );
  }
  render() {

    return (
      <Link to={{
        pathname: '/editSubmissionImage',
        state: {
          projectToEdit: this.props.project
        }
      }} >
        <button className="editProjectButton btn"> Edit This Project</button>
      </Link>
    );
  }

}
