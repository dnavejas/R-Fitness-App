import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from "reactstrap"
import '../App.css';


class ForgotPassword extends Component {

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
                        <Input type="username" className="text-center" placeholder="Username"></Input>
                    </FormGroup>
                    <div className="bottom-div">
                        <Button className="btn-lg hello btn-block" onClick={this.hide} >Send email</Button>
                    </div>
                </div>
                <div className={this.state.shouldHide ? "" : "hidden"}>
                    <FormGroup className="text-center">
                        
                        <label> Reset Password</label>
                        <Input type="password" className="text-center" placeholder="Password"></Input>
                    </FormGroup>
                    {/* <h5>Password requirements:</h5>
                    <p>At least 8 characters</p>
                    <p>Includes 1 upper, 1 lower, 1 number</p>
                    <p>No special characters</p> */}
                    <FormGroup>
                       
                        <Input type="password" className="text-center" placeholder="Confirm Password"></Input>
                    </FormGroup>
                   
                    <div className="text-center">
                        <Button className="btn-lg hello btn-block" /* onClick={this.hide}*/ >Reset Password</Button>
                    </div>
                </div>


            </Form>
        );
    }

}
export default ForgotPassword;