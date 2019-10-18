import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      "images/beautiful-flower-field-background-1.jpg",
      "/images/flower.jpg",
      "/images/6820517-tulip-fields.jpg"
    ];
    this.state = {
      currentImagesIndex: 0
    };
    this.handleSlideLeft = this.handleSlideLeft.bind(this);
    this.handleSlideRight = this.handleSlideRight.bind(this);
  }


handleSlideRight() {
  var nextImage = this.state.currentImagesIndex + 1;
  if (this.state.currentImagesIndex === this.images.length - 1) {
    nextImage = 0;
  }
}

handleSlideLeft() {
  var nextImage = this.state.currentImagesIndex - 1;
  if (this.state.currentImagesIndex === 0) {
    nextImage = this.images.length - 1;
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
          <img className="carousel-image" src={this.images[this.state.currentImageIndex]}/>
        </div>
        <div className="carousel-right-arrow-container">
          <i className="fas fa-chevron-right carousel-right-arrow-icon" onClick={this.handleSlideRight}></i>
        </div>
      </div>
    </div>
  );
}
}
