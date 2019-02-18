import { combineReducers } from 'redux';
import { GET_USER, SAVE_USER, GET_USERS,  } from '../actions/users';
import {LOAD_QUESTIONS, ADD_QUESTION} from '../actions/questions';

function currentUser(state = null, action) {
  switch (action.type) {
    case GET_USER:
      return action.currentUser;

    case SAVE_USER:
      return action.currentUser;

    default:
      return state;
  }
}

function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;

    default:
      return state;
  }
}
function questions(state = [], action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return action.questions;
     case ADD_QUESTION:
      return state.concat([action.question]);
    default:
      return state;
  }
}



export default combineReducers({ currentUser, questions, users });









