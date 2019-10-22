import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      filter: 'Search'
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit() {
    event.preventDefault();
    this.props.searchCallback(this.state.value, this.state.filter === 'Search' ? undefined : this.state.filter);
  }

  setFilter(event) {
    this.setState({
      filter: event.target.innerHTML.toLowerCase() === 'remove' ? 'Search' : event.target.innerHTML.toLowerCase()
    });
  }

  render() {
    return (
      <div className="input-group searchbar-container">
        <input
          className="form-control input-group-append searchBar"
          type="search"
          placeholder="Search"
          onChange={this.onChange}
          value={this.state.value} />
        <div className="btn-group">
          <button
            className="btn searchButton shadow-none ml-2"
            type="button"
            onClick={this.onSubmit}>{this.state.filter}</button>
          <button
            type="button"
            className="btn dropdown-toggle shadow-none dropdown-toggle-split searchButton"
            data-toggle="dropdown">
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <span className="m-1">Filter:</span>
            <div
              className="filter-item m-1"
              onClick={this.setFilter}>Name</div>
            <div
              className="filter-item m-1"
              onClick={this.setFilter}>Goals</div>
            <div
              className="filter-item m-1"
              onClick={this.setFilter}>Author</div>
            <div
              className="filter-item m-1"
              onClick={this.setFilter}>Rating</div>
            <div
              className="filter-item m-1"
              onClick={this.setFilter}>Remove</div>
          </div>
        </div>
      </div>
    );
  }
}
