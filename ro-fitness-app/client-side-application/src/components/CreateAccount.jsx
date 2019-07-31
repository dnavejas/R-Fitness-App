import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "../App.css";

class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastName = this.onChangelastName.bind(this);
    this.onChangeemailAddress = this.onChangeemailAddress.bind(this);
    this.onChangelocation = this.onChangelocation.bind(this);
    this.onChangegender = this.onChangegender.bind(this);
    this.onChangebirthday = this.onChangebirthday.bind(this);

    this.state = {
      shouldHide: false,
      firstName: "",
      lastName: "",
      emailAddress: "",
      location: "",
      gender: "",
      birthday: ""
    };
  }

  hide = () => {
    this.setState({ shouldHide: true });
  };

  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangelastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangeemailAddress(e) {
    this.setState({
      emailAddress: e.target.value
    });
  }

  onChangelocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangegender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangebirthday(e) {
    this.setState({
      birthday: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();

    const users = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      location: this.state.location,
      gender: this.state.gender,
      birthday: this.state.birthday
    };
    console.log(users);
  }

  render() {
    return (
      <Form className="login-form">
        <div className={this.state.shouldHide ? "hidden" : ""}>
          <FormGroup>
            <label>First Name</label>
            <Input
              type="name"
              className="text-center"
              placeholder="First Name"
              required
              value={this.state.firstName}
              onChange={this.onChangefirstName}
            />
          </FormGroup>
          <FormGroup>
            <label>Last Name</label>
            <Input
              type="name"
              className="text-center"
              placeholder="Last Name"
              required
              value={this.state.lastName}
              onChange={this.onChangelastName}
            />
          </FormGroup>
          <FormGroup>
            <label>Email</label>
            <Input
              type="email"
              className="text-center"
              placeholder="Email"
              required
              value={this.state.emailAddress}
              onChange={this.onChangeemailAddress}
            />
          </FormGroup>
          <FormGroup>
            <label>Birthday</label>
            <Input
              type="date"
              className="text-center"
              placeholder="birthday"
              required
              value={this.state.birthday}
              onChange={this.onChangebirthday}
            />
            <label>Gender</label>
            <Input
              type="text"
              className="text-center"
              placeholder="gender"
              required
              value={this.state.gender}
              onChange={this.onChangegender}
            />
          </FormGroup>
          <FormGroup>
            <label>Location</label>
            <Input
              type="text"
              className="text-center"
              placeholder="Location"
              required
              value={this.state.location}
              onChange={this.onChangelocation}
            />
          </FormGroup>
          <Button className="btn-lg hello btn-block" onClick={this.submit}>
            Next
          </Button>
        </div>
        <div className={this.state.shouldHide ? "" : "hidden"}>
          <FormGroup>
            <Input
              type="password"
              className="text-center"
              placeholder="Password"
            />
          </FormGroup>
          <h5>Password requirements:</h5>
          <p>At least 8 characters</p>
          <p>Includes 1 upper, 1 lower, 1 number</p>
          <p>No special characters</p>
          <FormGroup>
            <Input
              type="password"
              className="text-center"
              placeholder="Confirm Password"
            />
          </FormGroup>
          <div className="text-center">
            <Button
              className="btn-lg hello btn-block"
              /* onClick={this.hide}*/
            >
              Create Account
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}
export default CreateAccount;
