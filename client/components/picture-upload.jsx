import React from 'react';
import ProjectSubmit from './projectSubmit';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class PictureUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      inputValue: null
    }
    // this.saveUrl = this.saveUrl.bind(this);
    // this.testState = this.testState.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  // onSubmit(event) {
  //   event.preventDefault();
  //   fetch('/api/picture_upload.php', {
  //     "method": "PUT",
  //     "body":
  //   });
  // }

  // testState(){
  //   console.log(this.state.inputValue);
  // }
  // saveUrl(event) {
  //   this.setState({
  //    inputValue: event.target.value
  //   });
  // }
  render() {
    return (
      <div> Select a photo for your project's page
      <form action="/api/picture_upload.php" method="POST" encType="multipart/form-data">
        <input type="file" name="picture"></input>
        <input type="submit"></input>
      </form>
      </div>
    )
  }
}

export default PictureUploadForm;

// <form action="/api/picture_upload.php" method="POST" encType="multipart/form-data">
//   <input type="file" name="picture"></input>
//   <input type="submit"></input>
// </form>
