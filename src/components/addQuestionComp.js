import React from 'react';
import {connect} from "react-redux";
import {handleSaveQuestion} from "../actions/shared";
import {input, Card, CardBody,CardFooter} from 'reactstrap';
import avatar from './avatar';
//import {routes} from "../utils";


export default class addQuestionComp extends React.Component {
	constructor (props) {
		super (props);
		this.submitArticle=this.submitArticle.bind(this);
	}
     submitArticle(event) {
	const  { onSubmitArticle, history} =this.props;
	onSubmitArticle(event);
	//history.push(routes.root);
}
	render() {

		const {question, optionOne, optionTwo, author} = this.props;
		const Input = 'text';
		const userId='author';
		const avatar='avatarURL';
		return (

		<article class='addNewQuestions'>
	    <h2>Create New Question Page</h2>
	     

	     <article class='addNewQuestions'>
	     <p> Complete the questions</p>
	     <h4>Would you rather ? </h4>
	     </article>

	    
	     
	     <div className='options'> 
	     <article class='addNewQuestions'> 
	     <input class='textarea' type='text' placeholder='Option 1' id='optionOne' />
		 </article>	     
	     	    
	      or <br />
	     
	     <article class='addNewQuestions'>
	     <input class='textarea' type='text' placeholder='Option 2' id='optionTwo' />
	     </article>
	     
	     
	     <CardFooter>
	     <p className='asked'> asked by
	    
	     <br /> {author}
	     </p>
	    


	      <img
	      className="authorImg"
	      src={avatar.avatarURL}
	      alt={author}
	      />
	     

		<input type="submit" value="Save/Submit"></input>
		</CardFooter>
		
		</div>
		</article>
					   
		);
	}
}
