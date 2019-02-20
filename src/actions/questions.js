import {_getQuestions} from '../utils/api';
export const  GET_QUESTIONS ='GET_QUESTIONS';
export const ADD_QUESTION ='ADD_QUESTION';
export const LOAD_QUESTIONS='LOAD_QUESTIONS'

// loading  questions
const getQuestions = questions => {
return {
type: GET_QUESTIONS,
questions
};
};

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  };
};
export const loadQuestions = () => {
    // type: LOAD_QUESTIONS,
    //questions
return dispatch => {
    return _getQuestions().then(response => {
      // convert questions to array
      const qIndices = Object.keys(response);
      const questions = qIndices.map(index => response[index]);
      dispatch(getQuestions(questions));
    });
  };
};
export const handleLoadQuestions = () => {
  return async dispatch => {
    const questions = await getQuestions();
    dispatch(loadQuestions(questions));
  };
};
