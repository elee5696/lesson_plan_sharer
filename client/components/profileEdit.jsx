import React from 'react';

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  submitEdit() {
    const body = JSON.stringify({
      'id': this.props.id,
      'field': this.props.field,
      'value': this.state.value
    });

    const data = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: body
    };

    this.props.userUpdateCallback(data);
    this.props.cancelCallback();
  }

  render() {
    let type;
    if (this.props.field === 'years') {
      type = 'number';
    } else {
      type = 'text';
    }

    return (
      <div className="mb-2">
        <p className="text-capitalize"> Edit: {this.props.field}</p>
        <form>
          <div className="form-row align-items-center">
            <div className="col">
              <input
                type={type}
                className="form-control m-0"
                value={this.state.value}
                onChange={this.handleChange}>
              </input>
            </div>
            <div className="buttton-container">
              <button
                type="button"
                onClick={this.submitEdit}
                className="btn searchButton shadow-none ml-3">
                Save
              </button>
              <button
                type="button"
                onClick={this.props.cancelCallback}
                className="btn searchButton shadow-none ml-1">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}
