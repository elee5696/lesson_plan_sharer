import React from 'react';

class Projectsubmit extends React.Component {
  render() {
    return (

      <form>
        <div className="form-group">
          <label>Project Title</label>
          <input type="text" className="form-control projectEntry" id="exampleFormControlInput1" placeholder="Project Entry"/>
  </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control descriptionBox" id="exampleFormControlTextarea1" placeholder="Description Text" rows="3"></textarea>
          </div>
        <button type="button" className="btn btn-secondary btn-lg">Next</button>
</form>

    );
  }
}

export default Projectsubmit;
