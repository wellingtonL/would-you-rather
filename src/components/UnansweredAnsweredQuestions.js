import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser, loadUsers } from '../actions/users';
import {loadQuestions} from '../actions/questions';
import addQuestionComp from './addQuestionComp';
//import circles from './circles/spinning-circles.svg';
import avatarLoginComp from './avatarLoginComp';

class QuestionsPage extends Component {
  state = {
    loading: true,
    questions: [],
    users: {},
    currentUser: null
  };

  componentDidMount() {
    const { getCurrentUser, getQuestions, getUsers } = this.props;

    // gets logined user
    getCurrentUser().then(response => {
      // if responds, load questions and user
      if (response.user) {
        getQuestions()
          .then(getUsers())
          .then(() => this.setState({ loading: false }));
      } else {
        this.setState({ loading: false });
        getQuestions().then(() => this.setState({ loading: false }));
      }
    });
  }

  render() {
    const { questions, users, currentUser } = this.props;
    const { loading } = this.state;
    
    }
    if (error) {
      return <avatarLoginComp />;
    }
    
    return (
      <section className="questionList">
        {Object.keys(users).length > 0 && questions.length > 0 ? (
          questions.map(question => (
            <addQuestionComp
              question={question}
              key={question.id}
              author={users[question.author]}
            />
          ))
        ) : (
          <div className="not-available">
            No questions are available. <br />
            <em>Add and write new question.</em>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    users: state.users,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(loadUser()),
    getQuestions: () => dispatch(loadQuestions()),
    getUsers: () => dispatch(loadUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
