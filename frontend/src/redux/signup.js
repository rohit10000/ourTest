import * as ActionTypes from "./ActionTypes";

export const Signup = (state={
        isLoading: false,
        errMess: null,
        done: true,
    }, action) => {
    switch (action.type){
        case ActionTypes.SIGNUP_LOADING:
            return{
                ...state,
                isLoading: true,
                errMess: null,
                done: false
            }
        case ActionTypes.SIGNUP_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                done: true
            }
        case ActionTypes.SIGNUP_DONE:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                done: true
            }
        default:
            return state;
    }
}
