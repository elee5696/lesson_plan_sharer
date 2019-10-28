import React from 'react';
import { Link } from 'react-router-dom';
// import PictureUploadForm from './picture-upload';

export default class UserPhotoUpdate extends React.Component {

  render() {
    return (
      <div className="modal user-pic-update-modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Photo</h5>
          </div>
          <div className="modal-body">
            <p>Please select a photo.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-light">Save</button>
            <button type="button" className="btn btn-light" data-dismiss="modal" onClick={function () { document.querySelector('.user-pic-update-modal').style.display = 'none'; } }>
              {<Link to={'/user'}>Cancel</Link>}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
