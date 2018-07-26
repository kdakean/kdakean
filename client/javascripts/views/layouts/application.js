import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header                   from './../layouts/header/header';
import Footer                   from './../layouts/footer/footer';
import Home                     from './../home/home';
import PublicHomePage           from './../home/PublicHomePage';

import { routePaths } from './../_constants';
import { connect } from 'react-redux';

class Application extends Component {
  componentWillMount() {
  }

  componentWillUnMount() {
  }

  render() {
    const { isAuthenticated } = this.props;
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
        <Footer/>
      </div>
    );
  }
}

export default Application;
