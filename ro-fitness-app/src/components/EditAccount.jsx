import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from "reactstrap"
import '../App.css';
import axios from 'axios'; 

// encrypted password 
class EditAccount extends Component {
  constructor(props) {
    super(props);
    this.onChangeFN = this.onChangeFN.bind(this);
    this.onChangeLN = this.onChangeLN.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGEN = this.onChangeGEN.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this);
    this.onChangeBD = this.onChangeBD.bind(this);
    this.onChangeLOC = this.onChangeLOC.bind(this);
    this.onSendData = this.onSendData.bind(this);
  
    this.state = {
        shouldHide: false,
        firstName: 'Lilia',
        lastName:"Ribac",
        email: 'gmaile@gmai.com',
        gender: 'male',
        location: 'location',
        birthday: '01/21/2009',
        password: 'adfad',
        confirmPassword: 'adfads'
    }
    axios.get('http://localhost:4000/api/users/currentUser')
    .then(res => {
        console.log("Back to React");
        console.log(res.data); 
        this.state.firstName = res.data.firstName; 
        this.state.lastName = res.data.firstName; 
        this.state.email = res.data.emailAddress; 
        this.state.gender = res.data.gender; 
        this.state.location = res.data.location; 
        this.state.firstName = res.data.firstName; 
    }).catch(err => console.log(err));
    
  }
  onChangeFN(e){
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLN(e){
    this.setState({
      lastName: e.target.value
    });
  }
  
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }
  onChangeBD(e){
    this.setState({
      birthday: e.target.value
    });
  }
  onChangeLOC(e){
    this.setState({
      location: e.target.value
    });
  }
  onChangeGEN(e){
    this.setState({
      gender: e.target.value
    });
  }
  onChangePass(e){
    this.setState({
      password: e.target.value
    });
  }
  onChangeConfirmPass(e){
    this.setState({
      confirmPassword: e.target.value
    });
  }
  onSendData(e) {
    //e.preventDefault();
    console.log("Submitted "); 
    const userPostBody = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailAddress: this.state.email, 
        gender: this.state.gender,
        location: this.state.location, 
        birthday: this.state.birthday, 
        password: this.state.password
    }
    axios.put('http://localhost:4000/api/users', userPostBody)
    .then(res => {
        console.log("Back to React");
        console.log(res.data); 
        this.props.history.push('/'); 
    }).catch(err => console.log(err));
    
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      location: '',
      birthday: '',
      password: '',
      confirmPassword: ''
    });

    this.unhide(); 
}
  hide = () => {
    this.setState({ shouldHide: true });
  }
  render() {
    return (
      <Form className="login-form">
        <div className={this.state.shouldHide ? "hidden" : ""}>
          <FormGroup>
            <label>First Name</label>
            <Input type="name" className="text-center" placeholder="First Name" disabled={"disabled"} value={this.state.firstName} onChange={this.onChangeFN}></Input>
          </FormGroup>
          <FormGroup>
            <label>Last Name</label>
            <Input type="name" className="text-center" placeholder="Last Name" disabled={"disabled"} value={this.state.lastName} onChange={this.onChangeLN}></Input>
          </FormGroup>
          <FormGroup>
            <label>Email</label>
            <Input type="email" className="text-center" placeholder="Email" disabled={"disabled"} value={this.state.email} onChange={this.onChangeEmail}></Input>
          </FormGroup>
          <FormGroup>
            <div>
            <div className="birthday">
            <label>Birthday</label>
            <Input type="date" className="text-center" placeholder="birthday" disabled={"disabled"} value={this.state.birthday} onChange={this.onChangeBD}></Input>
            </div>
            <div className="gender">
            <label>Gender</label>
            <Input type="text" className="text-center" placeholder="gender" disabled={"disabled"} value={this.state.gender} onChange={this.onChangeGEN}></Input>
            </div>
            </div>
                        
          </FormGroup>
          <FormGroup>
            <label>Location</label>
            <Input type="text" className="text-center" placeholder="Location" disabled={"disabled"} value={this.state.location} onChange={this.onChangeLOC}></Input>
          </FormGroup>
          <Button className="btn-lg hello btn-block" onClick={this.hide}>Edit Profile</Button>

        </div>
        <div className={this.state.shouldHide ? "" : "hidden"}>
        <FormGroup>
         <label>Password</label>
           <Input type="password" className="text-center"placeholder="Password"></Input>
         </FormGroup>
            <h5>Password requirements:</h5>
            <p>At least 8 characters</p>
            <p>Includes 1 upper, 1 lower, 1 number</p>
            <p>No special characters</p>
         <FormGroup>
         <label>Confirm Password</label>
           <Input type="password" className="text-center"placeholder="Confirm Password"></Input>
         </FormGroup>
        <FormGroup>
              <label>First Name</label>
            <Input type="name" className="text-center" placeholder="First Name" disabled={"disabled"} ></Input>
          </FormGroup>
          <FormGroup>
            <label>Last Name</label>
            <Input type="name" className="text-center" placeholder="Last Name" disabled={"disabled"} ></Input>
          </FormGroup>
          <FormGroup>
            <label>Email</label>
            <Input type="email" className="text-center" placeholder="Email" disabled={"disabled"} ></Input>
          </FormGroup>
          <FormGroup>
            <label>Birthday</label>
            <Input type="date" className="text-center" placeholder="birthday" disabled={"disabled"} ></Input>
            <label>Gender</label>
            <Input type="text" className="text-center" placeholder="gender" disabled={"disabled"} ></Input>
          </FormGroup>
          <FormGroup>
            <label>Location</label>
            <Input type="text" className="text-center" placeholder="Location" disabled={"disabled"} ></Input>
          </FormGroup>
          <Button className="btn-lg hello btn-block" onClick={this.hide}>Edit Profile</Button>

        </div>
    
      </Form>
    );
  }
}
export default EditAccount;
