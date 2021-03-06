import React from 'react';
import { Redirect } from 'react-router-dom';

class PictureUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      file: null,
      filename: null,
      imagePreviewUrl: null,
      youtubeVideo: '',
      redirect: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onYouTubeChange = this.onYouTubeChange.bind(this);
  }
  onYouTubeChange(event) {
    this.setState({
      youtubeVideo: event.target.value
    });

  }

  onSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('picture', this.state.file);
    fetch('/api/picture_upload.php', {
      'method': 'POST',
      'body': formData
    })
      .then(this.setState({
        redirect: true
      }));

  }

  onChange(event) {
    const fileReader = new FileReader();
    const file = event.target.files[0];

    fileReader.onloadend = () => {
      this.setState({
        file: file,
        filename: file.name,
        imagePreviewUrl: fileReader.result });
    };
    fileReader.readAsDataURL(file);
  }

  render() {
    if (!this.props.userData) {
      return (
        <div className="container">
          <h1 className="d-flex justify-content-center">Please log in</h1>
        </div>
      );
    }

    const styleNextPageButtondiv = {
      margin: '100 0 0 70px'
    };

    const imagePreview = <img className= "submittedImage" src={this.state.imagePreviewUrl}/>;

    if (this.state.redirect && this.state.imagePreviewUrl) {
      return <Redirect to={{
        pathname: '/submit2',
        state: {
          file: this.state.file,
          youtubeVideoUrl: this.state.youtubeVideo
        }
      }} />;
    }

    return (
      <div className="col picForm container p-0">
        <div className="select-photo-text d-flex justify-content-center mt-3">
          <div className="picForm-div select-photo">Select a photo for your project page</div>
        </div>
        <div className="chooseFileButton-div col d-flex justify-content-center mt-4">
          <form id="pictureForm">
            <div className="input-group">
              <div className="custom-file">
                <input
                  id="picture"
                  className="p-0"
                  type="file"
                  name="picture"
                  onChange={this.onChange}/>
                <label className="custom-file-label" htmlFor="picture">{this.state.filename ? this.state.filename : 'Choose File'}</label>
              </div>
            </div>
            <div>
              {this.state.imagePreviewUrl ? imagePreview : null}
            </div>
            <div className="select-photo-text d-flex justify-content-center mt-5">
              <div className="picForm-div select-photo">Place a video of your project</div>
            </div>
            <div className="mt-3" style={styleNextPageButtondiv}>
              <input
                onChange={this.onYouTubeChange}
                className="youtube-link w-100 form-control"
                value={this.state.youtubeVideo}
                placeholder="YouTube Link Here (optional)"></input>
              <div className="nextPageDiv d-flex justify-content-center" style={{ margin: '4rem' }}>
                <button onClick={this.onSubmit} className="uploadPicButton btn" style={{ width: '140px' }} >Next Page
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default PictureUploadForm;
