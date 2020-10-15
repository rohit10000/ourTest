import React, {useState} from "react";
import {useHistory} from "react-router";
import "./Signup.css";
import {useStateValue} from "../contextAPI/StateProvider";

import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";
import {register} from "../utility/authenticateUtility";


function Signup(){
    const history = useHistory();

    const [state, dispatch] = useStateValue();
    const [show, setShow] = useState(false);

    return(
        <div className={"signup"}>
            <div className={"signup__title"}>
                <p>Get Started</p>
            </div>
            <div className={"signup__oauth"}>
                <div className={"signup__oauth__title"}>
                    SIGN UP USING
                </div>
                <img className={"signup__oauth__image"} src={require("../images/google.jpg")}
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
                (function (){
                    if(show == true){
                        return (
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                <p style={{float:"left", paddingBottom: 0}}>
                                    Oops!! Email already exists!
                                </p>
                            </Alert>
                        );
                    }
                })()
            }

            <div className={"signup__local"}>
                <div className={"signup__local_form"}>
                    <div className={"signup__local_form__username"}>
                        <div className={"signup__username signup__firstname"}>
                            <label htmlFor={"firstname"}>First Name</label>
                            <input type={"text"} id={"firstname"} name={"firstname"} placeholder={"Enter First name"}
                                   required={true}/>
                        </div>
                        <div className={"signup__username signup__lastname"}>
                            <label htmlFor={"lastname"}>Last Name</label>
                            <input type={"text"} id={"lastname"} name={"lastname"} placeholder={"Enter Last name"}
                                   required={true}/>
                        </div>
                    </div>

                    <label htmlFor={"userEmail"}>Email</label>
                    <input type={"email"} id={"email"} name={"email"} placeholder={"Enter Email"} required={true}/>

                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} id={"password"} name={"password"} placeholder={"Enter Password"} required={true}/>

                    <button type={"submit"} onClick={() => register(state, setShow, dispatch, history)}>Sign Up and Continue</button>
                </div>
            </div>
            <div className={"signup__login__option"}>
                <p>Already a ourTest user? <span onClick={()=>history.push('/login')}>Login</span></p>
            </div>
        </div>
    )

}

export default Signup;
