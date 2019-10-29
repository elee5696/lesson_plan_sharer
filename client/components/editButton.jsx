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
  }

  render() {

    return (
      <Link to={{
        pathname: '/edit',
        state: {
          projectToEdit: this.props.project
        }
      }} >
        <button className="editProjectButton btn"> Edit This Project</button>
      </Link>
    );
  }

}
