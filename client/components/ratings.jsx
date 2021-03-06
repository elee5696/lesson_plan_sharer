import React from 'react';

export default class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
      total: this.props.rating_count,
      rated: false
    };
  }

  rate(domRating) {

    let body = {
      id: this.props.id,
      rating: domRating
    };

    fetch('/api/project.php', {
      method: 'PATCH',
      header: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(resJSON => {
        this.setState({
          rating: resJSON.rating,
          total: resJSON['count'],
          rated: true
        });
      })
      .catch(err => console.error(err));
    this.props.ratingCallback({ count: this.state.total + 1, rating: this.state.rating });
  }

  render() {
    var stars = [];

    for (let i = 1; i < 6; i++) {
      let className = 'star-rating__star fas fa-star fa-lg';

      if (this.state.rating >= i && this.state.rating != null) {
        className += ' is-selected';
      }

      stars.push(
        <i
          key={i}
          className={className}
          onClick={this.state.rated || !this.props.user ? null : this.rate.bind(this, i)}>
        </i>
      );
    }

    return (
      <div className="star-rating">
        <div className="row star-rating-container ml-0 mb-2">
          {stars}
          <div className="rating-number-container ml-2">
            <h6 className="mr-3 rating-score-input">{(parseFloat(this.state.rating)).toFixed(2)}/5</h6>
          </div>
        </div>
      </div>
    );
  }
}
