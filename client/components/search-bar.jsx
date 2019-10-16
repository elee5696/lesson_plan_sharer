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
    this.setState({
      value: ''
    })
    this.props.searchCallback(this.state.value);
  }

  render() {
    return(
      <div className="searchbar-container">
        <form className="form-inline my-2 my-lg-0">
          <input
          className={this.props.className ? this.props.className : "form-control mr-sm-2"}
          type="search"
          placeholder="Search"
          onChange={this.onChange}
          value={this.state.value} />
          <button
          className="btn btn-outline-dark mr-2 my-2 my-sm-0"
          type="submit"
          onClick={this.onSubmit}>Search</button>
        </form>
      </div>
    );
  }
}
