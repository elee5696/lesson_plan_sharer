import React from 'react';

export default class UserPhotoUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('picture', this.state.file);
    fetch('/api/user.php', {
      method: 'PATCH',
      body: formData
    })
      .then(res => res.json());

  }

  onChange(event) {
    const fileReader = new FileReader();
    const file = event.target.files[0];
    fileReader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: fileReader.result
      });
    };
    fileReader.readAsDataURL(file);
  }

  render() {
    const imagePreview = <img className="userImage" src={this.state.imagePreviewUrl}/>;

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
            <form id="profilePicture">
              <input
                className="inputButton p-0"
                type="file"
                name="picture"
                onChange={this.onChange}></input>
              <div>
                {this.state.imagePreviewUrl ? imagePreview : null}
              </div>
            </form>
            <button type="button" className="btn btn-light" onClick={this.onSubmit}> {this.state.imagePreview}Save</button>
            <button
              type="button"
              className="btn btn-light"
              onClick={this.props.cancelCallback}>Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
