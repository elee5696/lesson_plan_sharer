import React from 'react';
import Carousel from './carousel';
import Searchbar from './search-bar';
import WriteButton from './write-button';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledArray: []
    };
  }

  componentDidMount() {
    this.props.getProjectCallback();

  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.projects !== prevProps.projects) {
      this.shuffleCarouselItems(this.props.projects);
    }
  }

  shuffleCarouselItems(originalArray) {
    const array = originalArray.slice();
    for (let arrayIndex = array.length - 1; arrayIndex > 0; arrayIndex--) {
      const randomIndex = Math.floor(Math.random() * (arrayIndex + 1));
      let temp = array[arrayIndex];
      array[arrayIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    this.setState({
      shuffledArray: array
    });
  }

  render() {
    return (
      <div className="entire-page-container container row col m-0 p-0">
        <div className="container logo-container mt-4 d-flex justify-content-center">
          <img src="/images/logo.png" />
        </div>
        <div className="search-bar-carousel-container container p-0 mt-5">
          <div className="search-bar-container container">
            <Searchbar
              searchCallback={this.props.searchCallback} />
          </div>
          <div className="feature-container offset-sm-3"
            style={{ minWidth: '400px', maxWidth: '400px' }}>
            <div className="headerbox featured-posts mt-5">
              <h3 className="featured-posts-text">Featured Provs</h3>
            </div>
            <Carousel
              projects={this.props.projects}
              shuffledArray={this.state.shuffledArray} />
          </div>
          <WriteButton />
        </div>
      </div>
    );
  }
}
