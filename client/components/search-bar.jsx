import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit() {
    event.preventDefault();
    this.props.searchCallback(this.state.value);
  }

  render() {
    return (
      <div className="searchbar-container">
        <div className="row">
          <form className="w-100 col-9">
            <input
              className="form-control searchBar"
              type="search"
              placeholder="Search"
              onChange={this.onChange}
              value={this.state.value} />
          </form>
          <button
            className="btn searchButton"
            type="submit"
            onClick={this.onSubmit}>Search</button>
        </div>
      </div>
    );
  }
}
