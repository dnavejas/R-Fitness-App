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
                        <Input type="username" className="text-center " placeholder="Username"></Input>

                        <p className="text-center space">We'll send an email with a link to reset your password</p>
                    </FormGroup>
                    <div className="bottom-div">
                        <Button className="btn-lg hello btn-block" onClick={this.hide} >Send email</Button>
                    </div>
                </div>
                <div className={this.state.shouldHide ? "" : "hidden"}>
                    <FormGroup className="text-center font-weight-bold">

                        <label> Reset Password</label>
                        <Input type="password" className="text-center" placeholder="Password"></Input>
                    </FormGroup>
                    <FormGroup className="space1">
                        <Input type="password" className="text-center" placeholder="Confirm Password"></Input>
                    </FormGroup>

                    <div className="text-center">
                        <Button className="btn-lg hello btn-block  " /* onClick={this.hide}*/ >Reset Password</Button>
                    </div>
                </div>


            </Form>
        );
    }

}
export default ForgotPassword;