import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addQuestion, handleLoadQuestions } from "./questions";
import { handleLoadUsers } from "./users";

export const handleSaveQuestionAnswer = (authedUserId, questionId, answer) => {
  return async dispatch => {
    await saveQuestionAnswer(authedUserId, questionId, answer);
    dispatch(handleLoadUsers());
    dispatch(handleLoadQuestions());
  };
};

export const handleSaveQuestion = question => {
  return async dispatch => {
    const savedQuestion = await saveQuestion(question);
    console.log(savedQuestion);
    dispatch(addQuestion(savedQuestion)); 
    
    dispatch(handleLoadUsers());
};
};
