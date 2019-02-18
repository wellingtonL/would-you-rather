import React from "react";
import { connect } from "react-redux";
import leaderBoardComp from "./leaderBoardComp";
import {questions} from '../utils/_DATA.js'

const leaderBoardPage = props => {


const {users} = props;
 return (
    <React.Fragment>
      <h1 className="text-center">Leaderboard</h1>
	{users.map(user => (
        <user={user} key ={user.id} /> 
      ))}
    </React.Fragment>
);
};

  const mapStateToProps = state => {
  	return {
    users: state.users.sort((a, b) => {
      const dataA = a.questions.length + Object.keys(a.answers).length;
      const dataB = b.questions.length + Object.keys(b.answers).length;
      return dataB - dataA;

})
};
};
export default connect(mapStateToProps)(leaderBoardPage);