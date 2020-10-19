import * as ActionTypes from "./ActionTypes";

export const Quiz = (state={
    isLoading: true,
    errMess: null,
    questions: [],
    visitedQuestions: null,
    answeredQuestions: null,
    yourAnswers: null,
    activeQuestion: 0
}, action) => {
    switch (action.type){
        case ActionTypes.ADD_QUESTIONS:
            return{
                ...state,
                isLoading: false,
                errMess: null,
                questions: action.payload
            }

        case ActionTypes.QUIZ_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                questions: [],
                visitedQuestions: null,
                answeredQuestions: null,
                yourAnswers: null,
                activeQuestion: 0
            }

        case ActionTypes.QUIZ_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            }



        case ActionTypes.SET_VISITED_QUESTIONS:
            return {
                ...state,
                visitedQuestions: action.payload
            }



        case ActionTypes.UPDATE_VISITED_QUESTIONS:{
            let newList = state.visitedQuestions;
            newList[action.payload] = true;

            return {
                ...state,
                visitedQuestions: newList
            }
        }



        case ActionTypes.SET_ANSWERED_QUESTIONS:
            return {
                ...state,
                answeredQuestions: action.payload
            }



        case ActionTypes.UPDATE_ANSWERED_QUESTIONS:{
            let newList = state.answeredQuestions;
            newList[action.index] = action.payload;

            return {
                ...state,
                answeredQuestions: newList
            }
        }



        case ActionTypes.SET_YOUR_ANSWERS:
            return {
                ...state,
                yourAnswers: action.payload
            }



        case ActionTypes.UPDATE_YOUR_ANSWERS:{
            let newList = state.yourAnswers;
            newList[action.index] = action.payload

            return {
                ...state,
                yourAnswers: newList
            }
        }



        case ActionTypes.UPDATE_ACTIVE_QUESTION:{
            return {
                ...state,
                activeQuestion: action.payload
            }
        }



        default:
            return state;
    }
}
