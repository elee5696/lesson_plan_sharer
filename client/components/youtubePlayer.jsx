import React from 'react';

class YoutubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    };
    this.setYoutubeVideo = this.setYoutubeVideo.bind(this);
  }

  setYoutubeVideo(link) {
    let youtubeLink;
    if (link.includes('https://www.youtube.com/')) {
      youtubeLink = link.slice(32);
    } else if (link.includes('www.youtube.com')) {
      youtubeLink = link.slice(20);
    }
    const newLink = 'https://www.youtube.com/embed/' + youtubeLink;
    this.setState({
      src: newLink
    });
  }
  componentDidMount() {
    this.setYoutubeVideo(this.props.video);

  }

  render() {

    return (

      <iframe
        width="100%"
        height="400vh"
        src = {this.state.src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    );
  }
}
export default YoutubePlayer;
