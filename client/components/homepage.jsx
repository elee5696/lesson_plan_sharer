import React from 'react';
import Carousel from './carousel';
import Searchbar from './search-bar';
import WriteButton from './write-button';

export default class Homepage extends React.Component {

  render() {
    return (
      <div className="entire-page-container container row col m-0 p-0">
        <div className="container logo-container mt-4 d-flex justify-content-center">
          <img src="/images/logo.png" />
        </div>
        <div className="search-bar-carousel-container container p-0 mt-5">
          <div className="search-bar-container container">
            <Searchbar
              searchCallback={this.props.searchCallback}
              resetResults={this.props.resetResults} />
          </div>
          <div className="header-carousel container">

            <div className="feature container pl-0 pr-0">
              <Carousel
                projects={this.props.projects}/>
            </div>
          </div>
          <WriteButton />
        </div>
      </div>
    );
  }
}
