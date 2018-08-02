import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header                   from './../layouts/header/header.jsx';
import Home                     from './../home/home.jsx';
import PublicHomePage           from './../home/PublicHomePage.jsx';
import UserProfile          from './../users/UserProfile.jsx';
import BoardDetail          from './../boards/BoardDetail.jsx';
import ModalBoard           from './../boards/ModalBoard.jsx';

import { routePaths } from './../_constants';
import { PrivateRoute }         from './../commons/PrivateRoute';
import { connect } from 'react-redux';
import { toggleModalBoard } from './../../redux/actions/modal.actions.js';

@connect((store) => {
  return {
    ...store.authentication,
    ...store.modalReducers
  };
}, {toggleModalBoard})
class Application extends Component {
  componentWillMount() {
  }

  componentWillUnMount() {
  }

  toggleModalBoard = () => {
    this.props.toggleModalBoard()
  }

  render() {
    const { isAuthenticated, modalBoardOpen } = this.props;
    console.log(modalBoardOpen);
    let landingPage = '';
    if(isAuthenticated) {
      landingPage = Home;
    } else {
      landingPage = PublicHomePage;
    }

    return(
      <div>
        <Header/>
        <Switch>
          <PrivateRoute path={routePaths.USER_PROFILE} component={UserProfile} authed={isAuthenticated} />
          <PrivateRoute path={routePaths.BOARD_DETAIL} component={BoardDetail} authed={isAuthenticated} />
          <Route exact path={routePaths.HOME} component={landingPage} />
        </Switch>
        <ModalBoard isOpen={modalBoardOpen} toggle={this.toggleModalBoard} />
      </div>
    );
  }
}

export default Application;
