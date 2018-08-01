import React, {Component} from 'react';

class BoardDetail extends Component {

  render() {
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
