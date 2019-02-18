import {_getCurrentUser, _getUsers, _saveUser} from '../utils/_DATA.js';

export const GET_USER = 'GET_USER';
export const SAVE_USER = 'SAVE_USER';
export const GET_USERS = 'GET_USERS';



// loading currentUser
const getUser = currentUser => {
  return {
    type: GET_USER,
    currentUser
  };
};

export const loadUser = () => {
  return dispatch => {
    return _getCurrentUser().then(currentUser =>
      dispatch(getUser(currentUser))
    );
  };
};

// setting current user
const setCurrentUser = currentUser => {
  return {
    type: SAVE_USER,
    currentUser
  };
};

export const saveUser = user => {
  return dispatch => {
    return _saveUser(user).then(response => dispatch(setCurrentUser(response)));
  };
};
;

// loading users
const getUsers = users => {
  return {
    type: GET_USERS,
    users
  };
};

export const loadUsers = () => {
  return dispatch => {
    return _getUsers().then(response => dispatch(getUsers(response)));
  };
};

export const handleLoadUsers = () => {
  return async dispatch => {
    const users = await getUsers();
    dispatch(loadUsers(users));
  };
};
