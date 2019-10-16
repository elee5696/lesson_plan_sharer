import React from 'react';

class PictureUploadForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onSubmit = this.onSubmit.bind(this);
  // }
  // onSubmit(event) {
  //   event.preventDefault();
  //   fetch('/api/picture_upload.php', {
  //     "method": "PUT",
  //     "body":
  //   });

  // }
  render() {
    return (
      <form action="/api/picture_upload.php" method="POST" encType="multipart/form-data">
        <input type="file" name="picture"></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default PictureUploadForm;
