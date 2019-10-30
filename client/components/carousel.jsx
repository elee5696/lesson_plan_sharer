import React from 'react';
import { Link } from 'react-router-dom';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImagesIndex: 0,
      touchStart: null,
      touchEnd: null
    };
    this.handleSlideLeft = this.handleSlideLeft.bind(this);
    this.handleSlideRight = this.handleSlideRight.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
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
    if (this.props.shuffledArray.length === 0) {
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
              <Link to={`/detail/${this.props.shuffledArray[this.state.currentImagesIndex].id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img
                  className="carousel-image"
                  src={this.props.shuffledArray[this.state.currentImagesIndex].image}
                  style={{ width: '100%', maxWidth: '700px', minHeight: '250px', maxHeight: '250px' }}></img>
              </Link>
            </div>
            <div className="carousel-circles-container row col d-flex justify-content-center">
              {this.props.shuffledArray.slice(0, 5).map((project, circleIndex) => {
                var className = this.state.currentImagesIndex === circleIndex ? 'fas grey-icon' : 'far';
                var circleHandleClick = () => this.goToProject(circleIndex);
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
