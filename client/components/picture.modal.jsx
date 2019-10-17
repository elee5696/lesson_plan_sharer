import React from 'react';
import PictureUploadForm from './picture-upload';

class UploadPhotoModal extends React.Component {
  constructor(props){
    super(props);
this.state ={
      url: null
}
  }
  render() {
    return (
      <div className= "modal-body modal fade">
        <div className="modal-header">
          <h5 className="modal-title">Upload A Photo</h5>
          <div className = "upload-form-data">
            <PictureUploadForm />
          </div>
        </div>
      </div>
    )
  }
}

export default UploadPhotoModal;
