import React from 'react';
import Searchbar from './search-bar';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setViewToHome.bind(this);
  }

  setViewToHome() {
    this.props.setViewCallback('list', {});
  }


  render () {
    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="prov-logo navbar-brand" onClick={this.setView}>Prov</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mr-4 mt-lg-0">
              <li className={this.props.currentActive === 'home' ? 'nav-item active' : 'nav-item'}>
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className={this.props.currentActive === 'provs' ? 'nav-item active' : 'nav-item'}>
                <a className="nav-link" href="#">Provs</a>
              </li>
              <li className={this.props.currentActive === 'discuss' ? 'nav-item active' : 'nav-item'}>
                <a className="nav-link" href="#">Discuss</a>
              </li>
              <li className={this.props.currentActive === 'ideas' ? 'nav-item active' : 'nav-item'}>
                <a className="nav-link" href="#">Ideas</a>
              </li>
              <li className={this.props.currentActive === 'user' ? 'nav-item active' : 'nav-item'}>
                <a className="nav-link" href="#">User</a>
              </li>
            </ul>
            <Searchbar
            searchCallback={this.props.searchCallback} />
            </div>
          </nav>
      </div>
    )
  }
}
