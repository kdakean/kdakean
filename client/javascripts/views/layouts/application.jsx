import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header                   from './../layouts/header/header.jsx';
import Home                     from './../home/home.jsx';
import PublicHomePage           from './../home/PublicHomePage.jsx';
import UserProfile          from './../users/UserProfile.jsx';
import BoardDetail          from './../boards/BoardDetail.jsx';

import { routePaths } from './../_constants';
import { PrivateRoute }         from './../commons/PrivateRoute';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    ...store.authentication
  };
}, {})
class Application extends Component {
  componentWillMount() {
  }

  componentWillUnMount() {
  }

  render() {
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated);
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
      </div>
    );
  }
}

export default Application;
