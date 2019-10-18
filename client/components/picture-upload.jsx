import React from 'react';
import ProjectSubmit from './projectSubmit';
import FormData from 'form-data';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class PictureUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      inputValue: null,
      file: null
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    var pictureForm = document.getElementById('pictureForm');
    var formData = new FormData();
    formData.append('picture', this.state.file);
    fetch('/api/picture_upload.php', {
      "method": "POST",
      "body": formData
    });
  }
  onChange(event) {
    this.setState({ file: event.target.files[0] })
  }
  render() {
    return (
      <div> Select a photo for your project's page
      <form id="pictureForm">
          <input type="file" id="anything" name="picture" onChange= {this.onChange}></input>
        <button onClick={this.onSubmit}>Submit</button>
      </form>
      </div>
    )
  }
}


export default PictureUploadForm;

// <div> Select a photo for your project's page
//       <form action="/api/picture_upload.php" method="POST" encType="multipart/form-data">
//     <input type="file" name="picture"></input>
//     <input type="submit"></input>
//   </form>
// </div>
