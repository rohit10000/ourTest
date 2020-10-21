import React, {useState} from "react";
import {useHistory} from "react-router";
import "./Login.css";
import Alert from "react-bootstrap/Alert";
import {Loading} from "../components/Loading";

function Login(props){
    const history = useHistory();

    const handleSubmit = () => {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        console.log("email: "+email+" , password: "+password);
        alert("email: "+email+" , password: "+password);
    }

    if(props.user.authorizedUserId){
        history.push('/home');
    }
    else{
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
                            <form onSubmit={handleSubmit}>
                                <div className={"login__local_form"}>

                                    <label htmlFor={"userEmail"}>Email</label>
                                    <input type={"email"} id={"email"} name={"email"} placeholder={"Enter Email"} required={true}/>

                                    <label htmlFor={"password"}>Password</label>
                                    <input type={"password"} id={"password"} name={"password"} placeholder={"Enter Password"} required={true}/>

                                    <button type={"submit"}>Login and Continue</button>

                                </div>
                            </form>
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

}

export default Login;
