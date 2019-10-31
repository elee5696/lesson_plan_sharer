import React from 'react';
import { Redirect } from 'react-router-dom';

class EditPictureUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      file: null,
      filename: null,
      imagePreviewUrl: null,
      projectToEdit: {},
      youtubeVideo: '',
      redirect: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onYouTubeChange = this.onYouTubeChange.bind(this);
    this.onChange = this.onChange.bind(this);
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
        imagePreviewUrl: fileReader.result
      });
    };
    fileReader.readAsDataURL(file);
  }
  componentDidMount() {
    this.setState({
      projectToEdit: this.props.location.state.projectToEdit
    });
  }

  render() {
    if (!this.props.userData) {
      return (
        <div className="container">
          <h1 className="d-flex justify-content-center">Please Log-In</h1>
        </div>
      );
    }

    const styleNextPageButtondiv = {
      margin: '100 0 0 70px'
    };

    const imagePreview = <img className="submittedImage" src={this.state.imagePreviewUrl} />;

    if (this.state.redirect && this.state.imagePreviewUrl) {
      return <Redirect to={{
        pathname: '/edit2',
        state: {
          file: this.state.file,
          youtubeVideoUrl: this.state.youtubeVideo,
          project: this.state.projectToEdit
        }
      }} />;
    }
    return (
      <div className="col picForm container p-0">
        <div className="select-photo-text d-flex justify-content-center">
          <div className="picForm-div select-photo">Select a new photo for your project page</div>
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
                  onChange={this.onChange} />
                <label className="custom-file-label" htmlFor="picture">{this.state.filename ? this.state.filename : 'Choose File'}</label>
              </div>
            </div>

            <div>
              {this.state.imagePreviewUrl ? imagePreview : null}
            </div>
            <div style={styleNextPageButtondiv}>
              <input onChange={this.onYouTubeChange} className="youtube-link w-100"
                value={this.state.youtubeVideo}
                placeholder="Place A YouTube Video link here (optional)"></input>
              <div className="nextPageDiv d-flex justify-content-center" style={{ margin: '4rem' }}>
                <button className="uploadPicButton btn" style={{ width: '140px' }} onClick={this.onSubmit}>
                  Next Page
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default EditPictureUpload;
