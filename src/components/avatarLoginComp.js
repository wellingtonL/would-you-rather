import React from 'react';

import { connect } from 'react-redux';
//import {Button,Card,CardBody,CardFooter,CardSubtitle,CardTitle,Form,Input} from "reactstrap";
import { loginUser } from '../actions/authedUser';
import {saveUser, loadUsers} from '../utils/_DATA.js'; 
//import { routes } from "../utils";
import {Form, Card, CardBody, CardFooter, Button, Input} from "reactstrap";




class avatarLoginComp extends React.Component {
	  state = {
    loading: true,
    users: {},
    currentUser: null
  };

  componentDidMount() {
    this.props.getUsers().then(response => {
      this.setState({ users: response.users, loading: false });
    });
  }

  saveUser = (user, e) => {
    console.log(user);
    this.props.setCurrentUser(user);
    this.setState({ loading: true });
  };
    submit(e) {
    const { onSubmitForm } = this.props;
    e.preventDefault();
    onSubmitForm(e.target.pickUser.value);
    //this.setState({ redirectToReferrer: true });
  }


  render() {
    const { users, loading } = this.state;
    if (this.props.isOpen === false) return null;

		return (

       <Form onSubmit={this.submit}>
        <Card>
          
          <CardBody>
            <span>Sign In</span>
            <Input
              type="select"
              placeholder="Select Username"
              ref="currentUser"
              id="currentUser"
            >
              {users.map(user => (
                <React.Fragment key={user.id}>
                  <option value={user.id}>{user.name}</option>
                </React.Fragment>
              ))}
            </Input>
          </CardBody>
          <CardFooter>
            <Button type="submit">Login</Button>
          </CardFooter>
        </Card>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmitForm: userId => {
    dispatch(loginUser(userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(avatarLoginComp);

