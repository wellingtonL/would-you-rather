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
export const loadQuestions = questions => {
  return {
    type: LOAD_QUESTIONS,
    questions

  };
};
export const handleLoadQuestions = () => {
  return async dispatch => {
    const questions = await getQuestions();
    dispatch(loadQuestions(questions));
  };
};
