import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      "/images/name-beads.png",
      "/images/stick-figure-2.png",
      "/images/stick-figure.png"
      ];
    this.state = {
      currentImagesIndex: 0
    };
    this.handleSlideLeft = this.handleSlideLeft.bind(this);
    this.handleSlideRight = this.handleSlideRight.bind(this);
  }


handleSlideRight() {
  this.setState({
    currentImagesIndex: this.state.currentImagesIndex + 1
  })
  if (this.state.currentImagesIndex === this.images.length - 1) {
    this.setState({
      currentImagesIndex: 0
    })
  }
}


handleSlideLeft() {
  this.setState({
    currentImagesIndex: this.state.currentImagesIndex - 1
  });
  if (this.state.currentImagesIndex === 0) {
    this.setState({
      currentImagesIndex: this.images.length - 1
    })
  }
}

render() {
  return (
    <div className="carousel-container">
      <div className="carousel-body">
        <div className="carousel-left-arrow-container">
          <i className="fas fa-chevron-left carousel-left-arrow-icon" onClick={this.handleSlideLeft}></i>
        </div>
        <div className="carousel-image-container">
          <img className="carousel-image" src={this.images[this.state.currentImagesIndex]}/>
        </div>
        <div className="carousel-right-arrow-container">
          <i className="fas fa-chevron-right carousel-right-arrow-icon" onClick={this.handleSlideRight}></i>
        </div>
      </div>
    </div>
  );
 }
}
