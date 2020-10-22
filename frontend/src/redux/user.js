import * as ActionTypes from "./ActionTypes";

export const User = (state = {
    isLoading: true,
    errMess: [],
    authorizedUserId: null,
    accessToken:null
    }, action) => {
    switch (action.type){
        case ActionTypes.ADD_USER_ID:
            return{
                ...state,
                isLoading: false,
                errMess: [],
                authorizedUserId: action.payload
            }
        case ActionTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: [],
                authorizedUserId: null,
                accessToken: null
            }
        case ActionTypes.USER_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            }
        case ActionTypes.ADD_USER_TOKEN:
            return {
                ...state,
                isLoading: false,
                errMess: [],
                accessToken: action.payload
            }
        default:
            return state;
    }
}
