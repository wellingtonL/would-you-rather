import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UnansweredAnsweredQuestions from './UnansweredAnsweredQuestions';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <div className="unanswered questionText">
              <UnansweredAnsweredQuestions />
            </div>
          )}
        />
        <Route
          path="/answered"
          render={props => (
            <div className="answered questionText">
              <h2>Answered Questions</h2>
            </div>
          )}
        />
        <Route
          path="/leaderboard"
          render={props => (
            <div className="leader questionText">
              <h2>Leaderboard</h2>
            </div>
          )}
        />
        <Route
          path="/add"
          render={props => (
            <div className="add questionText">
              <h2>Add New Question </h2>
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default Routes;
