import * as ActionTypes from "./ActionTypes";

export const Logs = (state={
    isLoading: true,
    errMess: null,
    logs: []
}, action) => {
    switch (action.type){
        case ActionTypes.ADD_LOGS:
            return{
                ...state,
                isLoading: false,
                errMess: null,
                logs: action.payload
            }
        case ActionTypes.LOGS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                logs: []
            }
        case ActionTypes.LOGS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            }
        default:
            return state;
    }
}
