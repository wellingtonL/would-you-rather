import React, { Component } from 'react';
import {connect} from 'react-redux';
import  './App.css';
import {HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import HomeComp from './HomeComp.js';
import addQuestionComp from './addQuestionComp.js';
import leaderBoardComp from './leaderBoardComp.js';
import avatarURL from '../utils/_DATA.js';
import avatar from './avatar';
import avatarLoginComp from './avatarLoginComp';
import{ getUser, loadUser, saveUser, getUsers,loadUsers} from '../actions/users';
import {loginUser} from '../actions/authedUser';
import {Button} from "reactstrap";
import AppMainButton from './AppMainButton';
//import image from './pictures/images.js';

function MainAppPage() {
return (
  <div>
  <h1>WOULD YOU RATHER APP</h1>
  <p>Please sign in to continue</p>
  
  </div>
  );
}
  const App = props => {
      const {users, user, onloginUser, isAuthed } = props;
    return (
      <Router>
            
       <div className="App">
       
       <div className="avatarLogin">
        <nav>
         
          <NavLink activeClassName="active-link" to="/">Home </NavLink>

          <NavLink activeClassName="active-link" to="/addQuestion">Add Question Button </NavLink>
        
          <NavLink activeClassName="active-link"  to="/leaderBoard">LeaderBoard Button </NavLink>
          
          
          <Button
          onClick={onloginUser}
          color="primary"
          outline
          style={{margin: 3, padding: 4}}>
          Login
          </Button>
          <NavLink activeClassName="active-link" to="/avatarLogin"> Login </NavLink>
          </nav> })     
                     
            
      <Switch>
       <Route path="/addQuestion" component={addQuestionComp} />
       <Route path="/leaderBoard" component={leaderBoardComp} />
       <Route path="/avatarImg" component={avatarLoginComp} />
       <Route path="/" component={HomeComp} />
      </Switch>
     </div> 
 </div>
      </Router>
    
  );
}

  const mapStateToProps = state => {
  const key = Object.keys(state.users).find(
    key => state.users[key].id === state.authedUserId
  );
  return {
    isAuthed: state.authUserId !==" " ? true : false,
    user: state.users[key]
    };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(saveUser(user)),
    getUsers: () => dispatch(loadUsers())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainAppPage);
