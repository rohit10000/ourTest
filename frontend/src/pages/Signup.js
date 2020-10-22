import React from "react";
import {useHistory} from "react-router";
import "./Signup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";

import {Button, Label, Col, Row} from 'reactstrap';
import {Control, Form, Errors} from 'react-redux-form';
import {Loading} from "../components/Loading";
import {postSignup} from "../redux/ActionCreators";
import {clientId} from "../shared/config";
import GoogleLogin from "react-google-login";

const required = function (val){
    return val && val.length;
}
const maxLength = function (len){
    return function (val){
        return !(val) || (val.length <= len);
    }
}

const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


function RenderError(props){
    console.log("Debug in renderComponent", props);
    return(
        <div>
            <p>{props.children}</p>
        </div>
    )
}


function Signup(props){
    const history = useHistory();

    const handleSubmit = (values) => {
        props.postSignup(values.firstname, values.lastname, values.email, values.password);
        console.log(values);
    }

    const authenticateGoogle = (response) => {
        console.log(response.profileObj);
        props.postGoogle(response.profileObj);
    }

    if(props.user.authorizedUserId){
        history.push('/home');
    }

    return(
        <div className={"signup"}>
            <div className={"signup__title"}>
                <p>Get Started</p>
            </div>
            <div className={"signup__oauth"}>
                <div className={"signup__oauth__title"}>
                    SIGN UP USING
                </div>
                <GoogleLogin
                    clientId = {clientId}
                    buttonText= "Login"
                    onSuccess={authenticateGoogle}
                    onFailure={authenticateGoogle}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <div style={{cursor: "pointer"}} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <img className={"login__oauth__image"} src={require("../images/google.jpg")}/>
                        </div>
                    )}
                />
            </div>
            <div className={"signup__separator"}>
                <div >
                    <hr className={"signup__separator__hr"} />
                </div>
                <p>OR</p>
                <div>
                    <hr className={"signup__separator__hr"}/>
                </div>
            </div>
            {
                props.signup.errMess ? (
                    <Alert variant="danger" dismissible>
                        <p style={{float:"left", paddingBottom: 0}}>
                            {props.signup.errMess}
                        </p>
                    </Alert>
                ): (<div></div>)
            }

            <div className={"signup__local"}>
                {
                    props.signup.isLoading ? (
                        <div className="container">
                            <div className="row">
                                <Loading />
                            </div>
                        </div>
                    ):(
                        <Form model={"feedback"} onSubmit={(values) => handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                                  placeholder="First Name"
                                                  className="form-control"
                                                  validators={{
                                                      required,
                                                      minLength: minLength(3),
                                                      maxLength: maxLength(15)
                                                  }}
                                    />
                                    <Errors model={".firstname"}
                                            className={"text-danger"}
                                            show={"touched"}
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be greater than 2 characters",
                                                maxLength: "Must be less than 15 characters or less"
                                            }}
                                            component={RenderError}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                                  placeholder="Last Name"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        component={RenderError}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                                  placeholder="Email"
                                                  className="form-control"
                                                  validators={{
                                                      required, validEmail
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                        component={RenderError}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Control.password model=".password" id="password" name="password"
                                                      placeholder="Password"
                                                      className="form-control"
                                                      validators={{
                                                          required,
                                                          minLength: minLength(3),
                                                          maxLength: maxLength(15)
                                                      }}
                                    />
                                    <Errors model={".password"}
                                            className={"text-danger"}
                                            show={"touched"}
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be greater than 2 characters",
                                                maxLength: "Must be less than 15 characters or less"
                                            }}
                                            component={RenderError}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Register
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )
                }
            </div>
            <div className={"signup__login__option"}>
                <p>Already a ourTest user? <a onClick={()=>history.push('/login')}>Login</a></p>
            </div>
        </div>
    )
}

export default Signup;
