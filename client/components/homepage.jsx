import React from 'react';
import Carousel from './carousel';
import Searchbar from './search-bar';
import WriteButton from './write-button';

export default class Homepage extends React.Component {

  componentDidMount() {
    this.props.getProjectCallback();
  }

  render() {
    return (
      <div className="entire-page-container container row col m-0 p-0">
        <div className="container logo-container mt-4 d-flex justify-content-center">
          <img src="/images/logo.png" />
        </div>
        <div className="search-bar-carousel-container container p-0 mt-5">
          <div className="search-bar-container container">
            <Searchbar />
          </div>
          <div className="feature-container">
            <div className="headerbox featured-posts mt-5">
              <h3 className="featured-posts-text">Featured Provs</h3>
            </div>
            <Carousel
              projects={this.props.projects} />
          </div>
          <WriteButton />
        </div>
      </div>
    );
  }
}
