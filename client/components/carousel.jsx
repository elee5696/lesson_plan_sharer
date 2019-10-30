import React from 'react';
import { Link } from 'react-router-dom';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledArray: [],
      currentImagesIndex: 0,
      touchStart: null,
      touchEnd: null
    };
    this.handleSlideLeft = this.handleSlideLeft.bind(this);
    this.handleSlideRight = this.handleSlideRight.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  componentDidMount() {
    this.shuffleCarouselItems();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.shuffleCarouselItems();
    }
  }

  shuffleCarouselItems() {
    let carouselItems = [...this.props.projects];

    for (let arrayIndex = carouselItems.length - 1; arrayIndex > 0; arrayIndex--) {
      const randomIndex = Math.floor(Math.random() * (arrayIndex + 1));
      let temp = carouselItems[arrayIndex];
      carouselItems[arrayIndex] = carouselItems[randomIndex];
      carouselItems[randomIndex] = temp;
    }

    this.setState({
      shuffledArray: carouselItems
    });
  }

  handleTouchStart(event) {
    const newStart = event.touches[0].clientX;
    this.setState({
      touchStart: newStart
    });
  }

  handleTouchEnd(event) {
    const touchEnd = event.changedTouches[0].clientX;
    if (this.state.touchStart - touchEnd > 50) {
      this.handleSlideRight();
    }
    if (this.state.touchStart - touchEnd < -50) {
      this.handleSlideLeft();
    }
  }

  handleSlideRight() {
    this.setState({
      currentImagesIndex: this.state.currentImagesIndex + 1
    });
    if (this.state.currentImagesIndex === this.props.projects.length - 1) {
      this.setState({
        currentImagesIndex: 0
      });
    }
  }

  handleSlideLeft() {
    this.setState({
      currentImagesIndex: this.state.currentImagesIndex - 1
    });
    if (this.state.currentImagesIndex === 0) {
      this.setState({
        currentImagesIndex: this.props.projects.length - 1
      });
    }
  }

  goToProject(circleIndex) {
    this.setState({
      currentImagesIndex: circleIndex
    });
  }

  render() {
    if (this.state.shuffledArray.length === 0) {
      return <h1>Page loading...</h1>;
    }

    return (
      <div className="container col-12">
        <div
          className="carousel-body col mt-3 container d-flex justify-content-center"
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}>
          <div>
            <div className="carousel-image-containerprov mb-3 p-0">
              <Link to={`/detail/${this.state.shuffledArray[this.state.currentImagesIndex].id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img
                  className="carousel-image"
                  src={this.props.shuffledArray[this.state.currentImagesIndex].image}
                  style={{ width: '100%', maxWidth: '550px', minHeight: '350px', maxHeight: '350px' }}></img>
              </Link>
            </div>
            <div className="carousel-circles-container row col d-flex justify-content-center">
              {this.state.shuffledArray.slice(0, 5).map((project, circleIndex) => {
                let className = this.state.currentImagesIndex === circleIndex ? 'fas grey-icon' : 'far';
                let circleHandleClick = () => this.goToProject(circleIndex);
                return (
                  <i
                    key={circleIndex}
                    onClick={circleHandleClick}
                    className={`${className} fa-circle ml-2`}>
                  </i>
                );
              })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
