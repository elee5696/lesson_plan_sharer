import React from 'react';
// import ProjectListItem from './projectlist-item';
import Carousel from './carousel';
import Searchbar from './search-bar';

export default class Homepage extends React.Component {

  componentDidMount() {
    this.props.getProjectCallback();
  }

  render() {
    return (
      <div className="entire-page-container container row col m-0 p-0">
        <div className="spacer col col-1 p-0"></div>
        <div className="search-bar-carousel-container col-10 p-0 mt-5">
          <Searchbar/>
          <Carousel
            projects={this.props.projects}/>
        </div>
        <div className="spacer col-1 p-0"></div>
      </div>
    );
  }
}
