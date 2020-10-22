import React from "react";
import {useHistory} from "react-router";
import "./Login.css";
import Alert from "react-bootstrap/Alert";
import {Loading} from "../components/Loading";
import {Control, Form} from "react-redux-form";
import {Button, Col, Label, Row} from "reactstrap";

function Login(props){
    const history = useHistory();

    const handleSubmit = (values) => {
        let email = values.email;
        let password = values.password;
        props.postLogin(email, password);
    }

    if(props.user.authorizedUserId){
        history.push('/home');
    }

    return(
        <div className={"login"}>
            <div className={"login__title"}>
                <p>Log in to your account</p>
            </div>
            <div className={"login__oauth"}>
                <div className={"login__oauth__title"}>
                    LOG IN USING
                </div>
                <img className={"login__oauth__image"} src={require("../images/google.jpg")}
                />
            </div>
            <div className={"login__separator"}>
                <div >
                    <hr className={"login__separator__hr"} />
                </div>
                <p>OR</p>
                <div>
                    <hr className={"login__separator__hr"}/>
                </div>
            </div>
            {
                props.login.errMess ? (
                    <Alert variant="danger" dismissible>
                        <p style={{float:"left", paddingBottom: 0}}>
                            {props.login.errMess}
                        </p>
                    </Alert>
                ): (<div></div>)
            }
            <div className={"login__local"}>
                {
                    props.login.isLoading ? (
                        <div className="container">
                            <div className="row">
                                <Loading />
                            </div>
                        </div>
                    ): (
                        <Form model={"feedback"} onSubmit={(values) => handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                                  placeholder="Email"
                                                  className="form-control"

                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Control.password model=".password" id="password" name="password"
                                                      placeholder="Password"
                                                      className="form-control"

                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )
                }


            </div>
            <div className={"login__forgot__password"}>
                <a>Forgot password?</a>
            </div>
            <div className={"login__signup__option"}>
                <p>Not a ourTest user? <span onClick={()=>history.push('/signup')}>Sign up</span></p>
            </div>
        </div>
    )

}

export default Login;
