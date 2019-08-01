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
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeBD = this.onChangeBD.bind(this);
    this.onChangeLOC = this.onChangeLOC.bind(this);
    this.onSendData = this.onSendData.bind(this);
  
    this.state = {
        shouldHide: false,
        firstName: 'Lilia',
        lastName:"Ribac",
        email: 'gmaile@gmai.com',
        gender: 'male',
        weight: 100, 
        location: 'location',
        birthday: '01/21/2009',
        password: 'adfad',
        confirmPassword: 'adfads'
    }
    axios.get('http://localhost:4000/api/users/currentUser')
    .then(res => {
        console.log(res.data); 
        this.state.firstName = res.data.firstName; 
        this.state.lastName = res.data.lastName; 
        this.state.email = res.data.emailAddress; 
        this.state.gender = res.data.gender; 
        this.state.weight = res.data.weight; 
        this.state.location = res.data.location; 
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
    onChangeWeight(e){
      this.setState({
        weight: e.target.value
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
        weight: this.state.weight, 
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
      weight:'', 
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

  unhide = () => {
    this.setState({ shouldHide: true });
  }

  render() {
    return (
      <div>
      <Form className="login-form">
        <div className={this.state.shouldHide ? "hidden" : ""}>
          {/* <h1>Account</h1> */}
          <FormGroup>
            {/* <label>First Name</label> */}
            <Input type="name" className="text-center" placeholder="First Name" disabled={"disabled"} value={this.state.firstName} onChange={this.onChangeFN}></Input>
          </FormGroup>
          <FormGroup>
            {/* <label>Last Name</label> */}
            <Input type="name" className="text-center" placeholder="Last Name" disabled={"disabled"} value={this.state.lastName} onChange={this.onChangeLN}></Input>
          </FormGroup>
          <FormGroup>
            {/* <label>Email</label> */}
            <Input type="email" className="text-center" placeholder="Email" disabled={"disabled"} value={this.state.email} onChange={this.onChangeEmail}></Input>
          </FormGroup>
           <FormGroup>
             <div className="text-center">
              <label>Birthday</label>
              </div>
              <Input type="date" className="text-center" placeholder="MM/YYYY"  disabled={"disabled"} value={this.state.birthday} onChange={this.onChangeBD}></Input>            </FormGroup>
            <FormGroup>
            <div className="row">  
              <div className="col-sm-6">
                {/* <label>Weight</label> */}
                <Input type="number" disabled={"disabled"} className="text-center" placeholder="Weight" value={this.state.weight} onChange={this.onChangeWeight}></Input>
              </div>  
              <div className="col-sm-6">
                {/* <label>Gender</label> */}
               <Input type="text" className="text-center" placeholder="gender (M or F)" disabled={"disabled"} value={this.state.gender} onChange={this.onChangeGEN} maxLength={1}></Input>
              </div>
            </div>
           
          </FormGroup>
          <FormGroup>
            {/* <label>Location</label> */}
            <Input type="text" className="text-center" placeholder="Location" disabled={"disabled"} value={this.state.location} onChange={this.onChangeLOC}></Input>
          </FormGroup>

          <Button className="btn-lg hello btn-block" onClick={this.hide}>Edit Profile</Button>


        </div>
      </Form>

      {/* Editing the page  */}
      <Form className="login-form">
      <div className={this.state.shouldHide ? "" : "hidden"}>
      {/* <h1>Edit Account</h1> */}
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
          <Input type="email" className="text-center" placeholder="Email"  disabled={"disabled"} value={this.state.email} onChange={this.onChangeEmail}></Input>
        </FormGroup>
        <FormGroup>
          <div className="text-center">
            <label>Birthday</label>
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
        <div className="text-center">
          <Button className="btn-lg hello btn-block" type="button" onClick={this.onSendData}>Submit Changes</Button>
        </div>
      </div>
    </Form>
    </div>
    );
  }
}
export default EditAccount;
