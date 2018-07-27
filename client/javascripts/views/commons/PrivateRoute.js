import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Redirect } from 'react-router';

export function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        (props) => authed === true ? <Component {...props} />
          : window.location = "/sign_in?redirectUrl=" + props.match.url
      }
    />
  )
}
