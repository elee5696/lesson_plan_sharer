import React from 'react';
// import ProjectSubmit from './projectSubmit';
// import FormData from 'form-data';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class PictureUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      file: null,
      imagePreviewUrl: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  onSubmit(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append('picture', this.state.file);
    fetch('/api/picture_upload.php', {
      'method': 'POST',
      'body': formData
    });
  }
  onChange(event) {
    var fileReader = new FileReader();
    var file = event.target.files[0];
    fileReader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: fileReader.result });
    }
    fileReader.readAsDataURL(file)
    }

  render() {
    if (this.state.imagePreviewUrl) {
      var style = {
        width: '20rem',
        height: '20rem',
        margin: '25px 0 0 4px'
      };
      var styleNextPageButtondiv ={
        margin: '100 0 0 70px'
      };
      var imagePreview = <img style ={style} src={this.state.imagePreviewUrl}/>;

      return (
        <div className="col picForm container p-0">
          <div className="select-photo-text d-flex justify-content-center mt-5">
            <div className="picForm-div select-photo">Select a photo for your project page</div>
          </div>
          <div className="chooseFileButton-div col d-flex justify-content-center">
            <form id="pictureForm">
              <input className="inputButton" type="file" name="picture" onChange={this.onChange}></input>
              <div style={style}>
              {imagePreview}
              </div>
              <div style={styleNextPageButtondiv} className="justify-content-center">
                <div style={{margin: '8rem'}}>
                  <button  className="uploadPicButton" onClick={this.onSubmit}>Next Page</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col picForm container p-0">
          <div className="select-photo-text d-flex justify-content-center mt-5">
            <div className="picForm-div select-photo">Select a photo for your project page</div>
          </div>
          <div className="chooseFileButton-div col d-flex justify-content-center">
            <form id="pictureForm">
              <input className="inputButton" type="file" name="picture" onChange={this.onChange}></input>
              <div>
              </div>
              <div className="next-page-button-container justify-content-center">
                <div className="m-5">
                  <button className="uploadPicButton" onClick={this.onSubmit}>Next Page</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default PictureUploadForm;

// <div> Select a photo for your project's page
//       <form action="/api/picture_upload.php" method="POST" encType="multipart/form-data">
//     <input type="file" name="picture"></input>
//     <input type="submit"></input>
//   </form>
// </div>
