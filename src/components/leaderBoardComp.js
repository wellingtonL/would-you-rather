import React from 'react';
import { connect } from "react-redux";
import {_getQuestions} from '../utils/_DATA.js'
import {answers} from '../utils/_DATA.js'
import avatar from'./avatar';
import { Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap"


 const leaderBoardComp = props => {
	//let answers= user.answers.optionOne.text + user.answers.optionTwo.text;
	//let _getQuestions = user.questions.optionOne.text + user.questions.optionTwo.text;
	const questionData = _getQuestions();
	const questions = Object.keys(questionData).map(key => questionData[key]);
	
	

	const {user} = props;
	const data = user.questions.length + Object.keys(user.answers).length;

  	return (
  		<Container style={{marginTop:12, paddingTop:12}}>
  		<Row>
  		<Col sm="2">
  		<avatar big image={user.avatarURL} name={user.name} />
  		</Col>

   		<Col sm="8">
   		<Card>
   		<CardTitle tag="h2">{user.name}</CardTitle>
		<CardBody>					
		 Answered Questions:{" "}
		<strong>{Object.keys(user.answers).length}</strong>
		 	<br />
		 Created Questions:
		 <strong>{user.questions.length}</strong>
		 	<br />
		 </CardBody>
  		</Card>
  		</Col>

		<Col>
  		<Card style={{padding: 5, margin: 5}}>>
  		<CardTitle>ScoreData</CardTitle>
  		<CardBody tag="h2">{data}</CardBody>
  		</Card>
		</Col>
  		
  	</Row>
  	</Container>

);
};
export default leaderBoardComp;

