import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "../App.css";
import NavBar from "./NavBarNoMenu"; 
import axios from 'axios'; 

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeUN = this.onChangeUN.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onSendData = this.onSendData.bind(this); 
    this.state = {
        userName: '',
        password: ''
    }
  }
  onChangeUN(e){
    this.setState({
      userName: e.target.value
    });
  }

  onChangePass(e){
    this.setState({
      password: e.target.value
    });
  }

  
  

  onSendData(e) {
    //e.preventDefault();
    console.log("Submitted "); 
    console.log(this.state); 
    const userPostBody = {
        userName: this.state.userName,
        password: this.state.password
    }
    // authenticates user then logs in to the profile page 
    axios.post('http://localhost:4000/api/users/login', userPostBody)
    .then(res => {
      if (res.data.success){
        window.location = "http://localhost:3000/Profile"; 
      }else{
        window.alert("Incorrect credentials"); 
      }
    }).catch(err => {
      console.log(err)
    });
    // this.setState({
    //   userName: '',
    //   password: ''
    //     });

}
  render() {
    return (
      <div>
        <NavBar />
      <Form className="login-form">
        {/* <h2 className="text-center">Ro</h2>
        <span className="font-weight-bold">
          <h5 className="text-center">Fitness</h5>
        </span> */}
        <FormGroup>
          {/* <Label>Email</Label> */}
          <Input
            type="username"
            className="text-center"
            placeholder="Username"
            value={this.state.userName} onChange={this.onChangeUN}
          />
        </FormGroup>
        <FormGroup>
          {/* <Label>Email</Label> */}
          <Input
            type="Password"
            className="text-center"
            placeholder="Password"
            value={this.state.password}onChange={this.onChangePass} />
        </FormGroup>
        <Button className="btn-lg hello btn-block" type="button" onClick={this.onSendData}>Log In</Button>

        <div className="text-center pt-2">
          <Input type="checkbox" />
          Remember me
        </div>

        <div className="text-center">
          <a href="/create-account">Create New Account</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password ?</a>
        </div>
      </Form>
      </div>
    );
  }
}
export default Login;
