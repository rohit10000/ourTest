import React, {useState} from "react";
import {useHistory} from "react-router";
import "./Login.css";
import {useStateValue} from "../contextAPI/StateProvider";
import Alert from "react-bootstrap/Alert";
import {login} from "../utility/authenticateUtility";

function Login(){
    const history = useHistory();
    const [state, dispatch] = useStateValue();

    const [error, setError] = useState();
    const [show, setShow] = useState(false);

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
                (function (){
                    if(show == true){
                        return (
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                <p style={{float:"left", paddingBottom: 0}}>
                                    {error}
                                </p>
                            </Alert>
                        );
                    }
                })()
            }
            <div className={"login__local"}>

                <div className={"login__local_form"}>
                    <label htmlFor={"userEmail"}>Email</label>
                    <input type={"email"} id={"email"} name={"email"} placeholder={"Enter Email"} required={true}/>

                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} id={"password"} name={"password"} placeholder={"Enter Password"} required={true}/>

                    <button type={"submit"} onClick={() => login(state, setShow, setError, dispatch, history)}>Login and Continue</button>
                </div>
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
