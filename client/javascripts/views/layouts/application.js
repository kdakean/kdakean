import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header                   from './../layouts/header/header';
import Home                     from './../home/home';
import PublicHomePage           from './../home/PublicHomePage';
import UserProfile          from './../users/UserProfile';
import BoardDetail          from './../boards/BoardDetail';

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
