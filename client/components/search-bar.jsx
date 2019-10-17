import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onSubmit() {
    event.preventDefault();
    this.props.searchCallback(this.state.value);
  }

  render() {
    return(
      <div className="searchbar-container row">
        <form className="w-100">
          <input
          className="form-control"
          type="search"
          placeholder="Search"
          onChange={this.onChange}
          value={this.state.value} />
          <button
          className="btn btn-outline-dark"
          type="submit"
          onClick={this.onSubmit}>Search</button>
        </form>
      </div>
    );
  }
}
