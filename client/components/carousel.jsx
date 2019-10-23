import React from 'react';
import { Link } from 'react-router-dom';

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

  // componentDidMount() {
  //  this.setState({
  //    interval: setInterval(this.handleSlideRight, 3000)
  //  })
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }

  render() {
    if (this.props.projects.length === 0) {
      return <h1>Page loading...</h1>;
    }
    return (
      <div className="container col-12">
        <div className="carousel-body col mt-3 container d-flex justify-content-center">
          <div>
            <div className="carousel-image-container mb-3 p-0">
              <Link to={`/detail/${this.props.projects[this.state.currentImagesIndex].id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img
                  className="carousel-image"
                  src={this.props.projects[this.state.currentImagesIndex].image}
                  style={{ width: '100%', maxWidth: '700px', maxHeight: '500px' }}></img>
              </Link>
            </div>
            <div className="carousel-circles-container row col d-flex justify-content-center">
              {this.props.projects.map((project, circleIndex) => {
                var className = this.state.currentImagesIndex === circleIndex ? 'fas grey-icon' : 'far';
                var circleHandleClick = () => this.goToProject(circleIndex);
                return (
                  <i
                    key={circleIndex}
                    onClick={circleHandleClick}
                    className={`btn ${className} fa-circle`}>
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
