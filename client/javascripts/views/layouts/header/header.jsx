import React from 'react';
import {Link} from 'react-router-dom';
import { routePaths } from './../../_constants';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleModalBoard } from './../../../redux/actions/modal.actions.js';

@connect((store) => {
  return {
    ...store.authentication
  };
}, {toggleModalBoard})
class Header extends React.Component {
  toggleModalBoard = (event) => {
    event.preventDefault();
    this.props.toggleModalBoard(null)
  }
  _rightNav() {
    const { isAuthenticated } = this.props;

    return(
      <div className="order-last w-40">
        {isAuthenticated ? this._userNav() : this._signNav()}
      </div>
    )
  }

  _userNav() {
    return(
      <ul className="navbar-nav mr-auto mt-0 justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={this.toggleModalBoard}>
            <FontAwesomeIcon icon="plus"  size="lg" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <FontAwesomeIcon icon="bell"  size="lg" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <FontAwesomeIcon icon="user" size="lg" />
          </a>
        </li>
      </ul>
    )
  }

  _signNav() {
    return(
      <ul className="navbar-nav mr-auto mt-0 justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="/sign_up">
            <FontAwesomeIcon icon="user-plus" />
            <span className="pl-1">Register</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sign_in">
            <FontAwesomeIcon icon="sign-in-alt" />
            <span className="pl-1">
              Login
            </span>
          </a>
        </li>
      </ul>
    )
  }

  _searchForm() {
    const { isAuthenticated } = this.props;
    if(!isAuthenticated)
      return(<span></span>)

    return(
      <div className="text-right order-2 w-20 d-none d-sm-block">
        <form className="form-inline my-0">
          <input className="form-control form-control-sm mr-sm-2" type="search" />
        </form>
      </div>
    )

  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
        <div className="container justify-content-between">
          <div className="d-flex order-0 w-40">
            <Link to={routePaths.HOME} className="navbar-brand">
              Kdakean
            </Link>
          </div>
          {this._searchForm()}
          {this._rightNav()}
        </div>
      </nav>
    );
  }
}

export default Header;
