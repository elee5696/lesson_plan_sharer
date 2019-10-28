import React from 'react';

class YoutubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nlxu5dDwhO0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    );
  }
}
export default YoutubePlayer;
