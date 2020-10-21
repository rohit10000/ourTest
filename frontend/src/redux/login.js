import * as ActionTypes from "./ActionTypes";

export const Login = (state={
    isLoading: false,
    errMess: null,
    done: true,
}, action) => {
    switch (action.type){
        case ActionTypes.LOGIN_LOADING:
            return{
                ...state,
                isLoading: true,
                errMess: null,
                done: false
            }
        case ActionTypes.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                done: true
            }
        case ActionTypes.LOGIN_DONE:
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
