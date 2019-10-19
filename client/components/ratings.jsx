import React from 'react';

export default class Ratings extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
    <div>
        <p className="rating-text"> Rating: {this.props.rating}</p>

    </div>
  )

  }




}
