import * as ActionTypes from "./ActionTypes";
import {baseUrl} from "../shared/baseUrl";

export const addUser = (user) => {
    return({
        type: ActionTypes.ADD_USER,
        payload: user
    })
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

//Topic
export const topicLoading = () =>{
    return{
        type: ActionTypes.TOPIC_LOADING
    }
}
export const topicFailed = (errmess) => {
    return{
        type: ActionTypes.TOPIC_FAILED,
        payload: errmess
    }
}
export const addTopic = (topic) => {
    return{
        type: ActionTypes.ADD_TOPIC,
        payload: topic
    }
}

export const fetchTopic = (topicId) => {
    return function (dispatch){
        dispatch(quizLoading());

        fetch(`http://localhost:5000/topics/${topicId}`)
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
            .then(topic => {
                dispatch(addTopic(topic));

                //LOGIC FOR SETTING UP QUIZ STATES
                let numberOfQuestions = topic.questions.length;

                //logic for setting up visited list
                let list = Array(numberOfQuestions).fill(false);
                list[0] = true;
                dispatch(setVisitedQuestions(list));

                //logic for setting up answered list
                list = Array(numberOfQuestions).fill(false);
                dispatch(setAnsweredQuestions(list));

                //logic for setting up yourAnswer list
                list = Array(numberOfQuestions).fill(0);
                dispatch(setYourAnswers(list));

                //logic for setting up quiz
                dispatch(addQuestions(topic.questions));
            })
            .catch(error => {
                dispatch(quizFailed(error.message));
                dispatch(topicFailed(error.message));
            });
    }
}

//Quiz

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

//Result

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




