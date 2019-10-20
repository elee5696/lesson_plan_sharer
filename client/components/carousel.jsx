import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImagesIndex: 0,
      interval: null
    };
    this.handleSlideLeft = this.handleSlideLeft.bind(this);
    this.handleSlideRight = this.handleSlideRight.bind(this);
  }


handleSlideRight() {
  this.setState({
    currentImagesIndex: this.state.currentImagesIndex + 1
  })
  if (this.state.currentImagesIndex === this.props.projects.length - 1) {
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
      currentImagesIndex: this.props.projects.length - 1
    })
  }
}

goToProject(circleIndex) {
  this.setState({
    currentImagesIndex: circleIndex
});
}

// componentDidMount() {
//  this.setState({
//    interval: setInterval(this.handleSlideRight, 3000)
//  })
// }

// componentWillUnmount() {
//   clearInterval(this.state.interval);
// }

render() {
  if(this.props.projects.length === 0) {
    return <h1> Page loading...</h1>
  }
  return (
    <div className="carousel-container">
      <div className="carousel-body">
        <div className="carousel-left-arrow-container">
          <i className="fas fa-chevron-left carousel-left-arrow-icon" onClick={this.handleSlideLeft}></i>
        </div>
        <div className="carousel-image-container">
          <img className="carousel-image" src={this.props.projects[this.state.currentImagesIndex].image} style={{width: '20rem'}}></img>
        </div>
        <div className="carousel-right-arrow-container">
          <i className="fas fa-chevron-right carousel-right-arrow-icon" onClick={this.handleSlideRight}></i>
        </div>
        <div className="circles-container">
          {this.props.projects.map((project, circleIndex) => {
            var className = this.state.currentImagesIndex === circleIndex ? 'fas' : 'far';
            var circleHandleClick = () => this.goToProject(circleIndex);
            return (
            <i key={circleIndex}
               onClick={circleHandleClick}
               className={`btn ${className} fa-circle`}>
            </i>
            );
          })
        }
          {/* // <i className="far fa-circle circle-one"></i>
          // <i className="fas fa-circle circle-two"></i> */}
        </div>
      </div>
    </div>
  );
 }
}
