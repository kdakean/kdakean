import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

class BoardDetail extends Component {

  render() {
    const {match} = this.props;
    return (
      <div className="container board-detail">
        <h1>Board detail</h1>
        <p>Task list</p>
        <Switch>
          <Route exact path={`${match.url}/t/:slug`} render={(props) => <TaskDetail />} />
        </Switch>
      </div>
    );
  }
}

export default BoardDetail;
