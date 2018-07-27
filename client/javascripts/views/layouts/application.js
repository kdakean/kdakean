import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header                   from './../layouts/header/header';
import Home                     from './../home/home';
import PublicHomePage           from './../home/PublicHomePage';

import { routePaths } from './../_constants';
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
          <Route exact path={routePaths.HOME} component={landingPage} />
        </Switch>
      </div>
    );
  }
}

export default Application;
