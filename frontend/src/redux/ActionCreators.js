import * as ActionTypes from "./ActionTypes";
import {baseUrl} from "../shared/config";
import {actions} from "react-redux-form";

// Oauth related actions
//Google

export const postGoogle = (profile) => {
    return function (dispatch){

        fetch(baseUrl+"oauth/google", {
            method: 'POST',
            body: JSON.stringify({
                firstname: profile.givenName,
                lastname: profile.familyName,
                email: profile.email,
                googleId: profile.googleId,
                imageUrl: profile.imageUrl
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => response.json())
            .then(response => {
                console.log("Debug in google oauth ", JSON.stringify(response));
                if(response.ok === false){
                    dispatch(loginFailed(response.message));
                }
                else {
                    dispatch(addUserToken(response.token));
                    dispatch(addUserDetail(response.userDetail));
                    dispatch(loginDone());
                    dispatch(actions.reset('feedback'));
                }
            })
            .catch(error =>  {
                dispatch(loginFailed(error.toString()));
            });
    };
}

// Signup related actions

export const signupLoading = () =>{
    return{
        type: ActionTypes.SIGNUP_LOADING
    }
}
export const signupDone = () => {
    return{
        type: ActionTypes.SIGNUP_DONE
    }
}
export const signupFailed = (errMess) =>{
    return{
        type: ActionTypes.SIGNUP_FAILED,
        payload: errMess
    }
}

export const postSignup = (firstname, lastname, email, password) => {
    return function (dispatch){
        // dispatch(signupLoading());

        fetch(baseUrl+"user/signup", {
            method: 'POST',
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => response.json())
            .then(response => {

                if(response.ok === false){
                    dispatch(signupFailed(response.message));
                }
                else {
                    dispatch(signupDone());
                    alert("Registered successfully !");
                    dispatch(actions.reset('feedback'));
                    dispatch(postLogin(email, password));
                }
            })
            .catch(error =>  {
                dispatch(signupFailed(error.toString()));
            });
    };
}

//USER related actions

export const userLoading = () =>{
    return{
        type: ActionTypes.USER_LOADING
    }
}
export const userFailed = (errMess) =>{
    return{
        type: ActionTypes.USER_FAILED,
        payload: errMess
    }
}
export const addUserToken = (token) =>{
    return{
        type: ActionTypes.ADD_USER_TOKEN,
        payload: token
    }
}
export const addUserDetail = (userDetail) => {
    return{
        type: ActionTypes.ADD_USER_DETAIL,
        payload: userDetail
    }
}


// Login related actions

export const loginLoading = () =>{
    return{
        type: ActionTypes.LOGIN_LOADING
    }
}
export const loginDone = () => {
    return{
        type: ActionTypes.LOGIN_DONE
    }
}
export const loginFailed = (errMess) =>{
    return{
        type: ActionTypes.LOGIN_FAILED,
        payload: errMess
    }
}

export const postLogin = (email, password) => {
    return function (dispatch){
        // dispatch(loginLoading());

        fetch(baseUrl+"user/login", {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => response.json())
            .then(response => {
                if(response.ok === false){
                    dispatch(loginFailed(response.message));
                }
                else {
                    dispatch(addUserToken(response.token));
                    dispatch(addUserDetail(response.userDetail));
                    dispatch(loginDone());
                    dispatch(actions.reset('feedback'));
                }
            })
            .catch(error =>  {
                dispatch(loginFailed(error.toString()));
            });
    };
}


//Fetching test information
export const testsLoading = () =>{
    return{
        type: ActionTypes.TESTS_LOADING
    }
}
export const testsFailed = (errmess) => {
    return{
        type: ActionTypes.TESTS_FAILED,
        payload: errmess
    }
}
export const addTests = (tests) => {
    return{
        type: ActionTypes.ADD_TESTS,
        payload: tests
    }
}

export const fetchTests = () => {
    return function (dispatch){
        dispatch(testsLoading());

        fetch(baseUrl+'tests')
            .then(response => {
                if(response.ok)
                    return response;
                else{
                    let error = new Error('Error '+response.status+': '+response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(tests => {
                dispatch(addTests(tests))
            })
            .catch(error => dispatch(testsFailed(error.message)));
    }
}

//Fetching section information
export const sectionsLoading = () =>{
    return{
        type: ActionTypes.SECTIONS_LOADING
    }
}
export const sectionsFailed = (errmess) => {
    return{
        type: ActionTypes.SECTIONS_FAILED,
        payload: errmess
    }
}
export const addSections = (sections) => {
    return{
        type: ActionTypes.ADD_SECTIONS,
        payload: sections
    }
}

export const fetchSections = () => {
    return function (dispatch){
        dispatch(sectionsLoading());

        fetch(baseUrl + 'sections')
            .then(response => {
                if(response.ok)
                    return response;
                else{
                    let error = new Error('Error '+response.status+': '+response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(sections => {
                dispatch(addSections(sections))
            })
            .catch(error => dispatch(sectionsFailed(error.message)));
    }
}

//fetching topic information
export const topicsLoading = () =>{
    return{
        type: ActionTypes.TOPIC_LOADING
    }
}
export const topicsFailed = (errmess) => {
    return{
        type: ActionTypes.TOPIC_FAILED,
        payload: errmess
    }
}
export const addTopics = (topics) => {
    return{
        type: ActionTypes.ADD_TOPICS,
        payload: topics
    }
}

export const fetchTopics = () => {
    return function (dispatch){
        dispatch(topicsLoading());

        fetch(baseUrl+'topics')
            .then(response => {
                if(response.ok)
                    return response;
                else{
                    let error = new Error('Error '+response.status+': '+response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(topics => {
                dispatch(addTopics(topics));
            })
            .catch(error => {
                dispatch(topicsFailed(error.message));
            });
    }
}

//fetching information for quiz

export const quizLoading = () =>{
    return{
        type: ActionTypes.QUIZ_LOADING
    }
}
export const quizFailed = (errmess) => {
    return{
        type: ActionTypes.QUIZ_FAILED,
        payload: errmess
    }
}
export const addQuestions = (questions) => {
    return{
        type: ActionTypes.ADD_QUESTIONS,
        payload: questions
    }
}

export const fetchQuiz = (topicId, accessToken) =>{
    return function (dispatch){
        dispatch(quizLoading());
        console.log("Debug in fetchQuiz ", accessToken)
        fetch(baseUrl+'topic/'+topicId+'/questions', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer "+accessToken
            },
            credentials: "same-origin"
        })
            .then(response => {
                if(response.ok)
                    return response;
                else{
                    let error = new Error('Error '+response.status+': '+response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(questions => {

                //LOGIC FOR SETTING UP QUIZ STATES
                let numberOfQuestions = questions.length;

                //logic for setting up visited list
                let list = Array(numberOfQuestions).fill(false);
                list[0] = true;
                dispatch(setVisitedQuestions(list));

                //logic for setting up answered list
                list = Array(numberOfQuestions).fill(false);
                dispatch(setAnsweredQuestions(list));

                //logic for setting up yourAnswer list
                list = Array(numberOfQuestions).fill(-1);
                dispatch(setYourAnswers(list));

                //logic for setting up quiz
                dispatch(addQuestions(questions));
            })
            .catch(error => {
                dispatch(quizFailed(error.message));
            });
    }
}

export const setVisitedQuestions = (list) => {
    return{
        type: ActionTypes.SET_VISITED_QUESTIONS,
        payload: list
    }
}
export const updateVisitedQuestions = (index) => {
    return{
        type: ActionTypes.UPDATE_VISITED_QUESTIONS,
        payload: index
    }
}
export const setAnsweredQuestions = (list) =>{
    return{
        type: ActionTypes.SET_ANSWERED_QUESTIONS,
        payload: list
    }
}
export const updateAnsweredQuestions = (index, flag) => {
    return{
        type: ActionTypes.UPDATE_ANSWERED_QUESTIONS,
        index: index,
        payload: flag
    }
}
export const setYourAnswers = (list) => {
    return{
        type: ActionTypes.SET_YOUR_ANSWERS,
        payload: list
    }
}
export const updateYourAnswers = (index, answer) => {
    return{
        type: ActionTypes.UPDATE_YOUR_ANSWERS,
        index: index,
        payload: answer
    }
}
export const updateActiveQuestion = (index) => {
    return{
        type: ActionTypes.UPDATE_ACTIVE_QUESTION,
        payload: index
    }
}


export const resultLoading = () =>{
    return{
        type: ActionTypes.RESULT_LOADING
    }
}
export const addResultClass = (list) =>{
    return{
        type: ActionTypes.ADD_RESULT_CLASS,
        payload: list
    }
}
export const addResultScore = (score) =>{
    return{
        type: ActionTypes.ADD_RESULT_SCORE,
        payload: score
    }
}



export const logsLoading = () =>{
    return{
        type: ActionTypes.LOGS_LOADING
    }
}
export const logsFailed = (errmess) => {
    return{
        type: ActionTypes.LOGS_FAILED,
        payload: errmess
    }
}
export const addLogs = (logs) => {
    return{
        type: ActionTypes.ADD_LOGS,
        payload: logs
    }
}
export const fetchLogs = (userId) => {
    return function (dispatch){
        dispatch(logsLoading());

        fetch(baseUrl+`user/${userId}/logs`)
            .then(response => response.json())
            .then(logs => {
                console.log("Debug in fetch logs: ", logs);
                dispatch(addLogs(logs))
            })
            .catch(error => dispatch(logsFailed(error.message)));
    }
}

export const postLog = (name, scoredMarks, totalMarks, userId) => {
    return function (dispatch){

        fetch(baseUrl+"logs", {
            method: 'POST',
            body: JSON.stringify({
                name,
                scoredMarks,
                totalMarks,
                userId
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => response.json())
            .then(log => {
                console.log("Debug in post log: ", log);
                dispatch(fetchLogs(userId));
            })
            .catch(error =>  {
                console.log("Debug in log post: ", error.message);
            });
    };
}




