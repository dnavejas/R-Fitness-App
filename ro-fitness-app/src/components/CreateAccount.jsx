import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from "reactstrap"
import '../App.css';
import axios from 'axios';

class CreateAccount extends Component {
  state = {
    shouldHide: false
  }
  hide = () => {
    this.setState({ shouldHide: true });
  }

  unhide = () => {
    this.setState({ shouldHide: false });
  }

  constructor(props) {
    super(props);
    this.onChangeFN = this.onChangeFN.bind(this);
    this.onChangeLN = this.onChangeLN.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGEN = this.onChangeGEN.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this);
    this.onChangeBD = this.onChangeBD.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeLOC = this.onChangeLOC.bind(this);
    this.onSendData = this.onSendData.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      location: '',
      weight:'', 
      birthday: '',
      password: '',
      confirmPassword: ''
    }
  }
  onChangeFN(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLN(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeBD(e) {
    this.setState({
      birthday: e.target.value
    });
  }
  onChangeLOC(e) {
    this.setState({
      location: e.target.value
    });
  }
  onChangeGEN(e) {
    this.setState({
      gender: e.target.value
    });
  }
  onChangePass(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }
  onChangeConfirmPass(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  onSendData(e) {
    //e.preventDefault();
    console.log("Subbmitted ");
    const userPostBody = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.email,
      gender: this.state.gender,
      weight: this.state.weight, 
      location: this.state.location,
      birthday: this.state.birthday,
      password: this.state.password
    }
    axios.post('http://localhost:4000/api/users', userPostBody)
      .then(res => {
        console.log("Back to React");
        console.log(res.data);
        // this.props.history.push('/'); 
      }).catch(err => console.log(err));

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      location: '',
      birthday: '',
      weight: '', 
      password: '',
      confirmPassword: ''
    });

    this.unhide();
  }

  render() {
    return (
      <div className="container"> 
      <Form className="login-form">
        <div className={this.state.shouldHide ? "hidden" : ""}>
          <FormGroup>
            {/* <label>First Name</label> */}
            <Input type="name" className="text-center" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeFN}></Input>
          </FormGroup>
          <FormGroup>
            {/* <label>Last Name</label> */}
            <Input type="name" className="text-center" placeholder="Last Name" value={this.state.lastName} onChange={this.onChangeLN}></Input>
          </FormGroup>
          <FormGroup>
            {/* <label>Email</label> */}
            <Input type="email" className="text-center" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}></Input>
          </FormGroup>
          <FormGroup>
            <div className="text-center">
              <label >Birthday</label>
             </div> 
              <Input type="date" className="text-center" placeholder="MM/YYYY" value={this.state.birthday} onChange={this.onChangeBD}></Input>            </FormGroup>
            <FormGroup>
            <div className="row">  
              <div className="col-sm-6">
                {/* <label>Weight</label> */}
                <Input type="number" className="text-center" placeholder="Weight" value={this.state.weight} onChange={this.onChangeWeight}></Input>
              </div>  
              <div className="col-sm-6">
                {/* <label>Gender</label> */}
               <Input type="text" className="text-center" placeholder="gender (M or F)" value={this.state.gender} onChange={this.onChangeGEN} maxLength={1}></Input>
              </div>
            </div>
           
          </FormGroup>
          <FormGroup>
            {/* <label>Location</label> */}
            <Input type="text" className="text-center" placeholder="Location" value={this.state.location} onChange={this.onChangeLOC}></Input>
          </FormGroup>
          <Button className="btn-lg hello btn-block" onClick={this.hide}>Next</Button>

        </div>
        <div className={this.state.shouldHide ? "" : "hidden"}>
          <FormGroup>
            <Input type="password" className="text-center" placeholder="Password" value={this.state.password} onChange={this.onChangePass} ></Input>
          </FormGroup >
          <div className="text-center">
          <h5 class="font-weight-bold">Password requirements:</h5>
          <p>At least 8 characters</p>
          <p>Includes 1 upper, 1 lower, 1 number</p>
          <p>No special characters</p>
          </div>
          <FormGroup>
            <Input type="password" className="text-center" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.onChangeConfirmPass}></Input>
          </FormGroup>
          <div className="text-center">
            <Button className="btn-lg hello btn-block" type="button" onClick={this.onSendData}>Create Account</Button>
          </div>
        </div>
      </Form>
      </div>
    );
  }
}
export default CreateAccount;
