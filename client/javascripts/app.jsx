import 'bootstrap';
import '../stylesheets/app.scss';
import './config/initializer';
import React, {
  Component
}                               from 'react';
import {
  // BrowserRouter as
  Router,
  Route,
  Switch
}                               from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider }             from 'react-redux';
import configureStore           from './redux/store/configureStore';
import Page404                  from './views/errors/page_404';
import Page500                  from './views/errors/page_500';
import Application              from './views/layouts/application';

const store           = configureStore();
import { history } from './redux/_helpers';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/errors/404" name="Page 404" component={Page404}/>
              <Route exact path="/errors/500" name="Page 500" component={Page500}/>
              <Route path="/" name="Application" component={Application} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

var application = document.getElementById("application");
if(application) {
  ReactDOM.render(<Root></Root>, application);
}
