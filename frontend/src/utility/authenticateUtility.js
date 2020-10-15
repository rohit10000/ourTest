import {addUser, setAuthorizedUser} from "../contextAPI/actions";

export const  register = (state, setShow, dispatch, history) =>{
    let email = document.getElementById("email").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let password = document.getElementById("password").value;

    const checkEmail = (email, users) => {
        let numberOfUsers = users.length;
        for(let i=0; i<numberOfUsers; i++){
            if(email == users[i].email)
                return true;
        }
        return false;
    }

    let emailExists = checkEmail(email, state.users);

    if(emailExists){
        console.log("Email is already registered.");
        setShow(true);
    }
    else{
        let userInfo = {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password
        };

        fetch('http://localhost:5000/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then(response => response.json())
            .then(data => {
                console.log('successfully Registered', data);

                addUser(data, dispatch);
                setAuthorizedUser(data, dispatch);

                history.push("/");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export const login = (state, setShow, setError, dispatch, history) => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    function checkEmailAndPassword(email, users, password){
        let numberOfUsers = users.length;
        for(let i=0; i<numberOfUsers; i++){
            if(email == users[i].email){
                if(password == users[i].password){
                    setAuthorizedUser(users[i], dispatch);
                    return true;
                }
                else{
                    setError("Invalid Email/Password");
                    return false;
                }
            }
        }
        setError("EmailId not found");
        return false;
    }

    let isValid = checkEmailAndPassword(email, state.users, password);
    if(isValid){
        console.log("Debug: You are authenticated");
        history.push('/');
    }
    else{
        setShow(true);
    }
}

export const logout = (dispatch, history) =>{
    setAuthorizedUser(null, dispatch);
    history.push('/');
}
