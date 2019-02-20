import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navList">
        <li className="unansweredNav navBtn">
          <NavLink exact to="/" activeClassName="current" className="navlink">
            Unanswered Questions
          </NavLink>
        </li>
        <li className="answeredNav navBtn">
          <NavLink to="/answered" activeClassName="current" className="navlink">
            Answered Questions
          </NavLink>
        </li>
        <li className="leaderNav navBtn">
          <NavLink
            to="/leaderboard"
            activeClassName="current"
            className="navlink"
          >
            Leaderboard
          </NavLink>
        </li>
        <li className="addNav navBtn">
          <NavLink to="/add" activeClassName="current" className="navlink">
            Add Question
          </NavLink>
        </li>
      </nav>
    );
  }
}

export default Nav;
