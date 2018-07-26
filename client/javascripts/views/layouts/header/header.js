import React from 'react';
import {Link} from 'react-router-dom';
import { routePaths } from './../../_constants';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Navbar w/ text</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <form className="form-inline">
            <div className="input-group">
              <input className="form-control" type="search"/>
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
