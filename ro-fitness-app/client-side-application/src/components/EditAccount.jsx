import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from "reactstrap"
import '../App.css';
// encrypted password 
class EditAccount extends Component {
  state = {
    shouldHide: false
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
        <div className={this.state.shouldHide ? "" : "hidden"}>
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
