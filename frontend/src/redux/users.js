import * as ActionTypes from "./ActionTypes";

export const User = (state = {
        authorizedUser: "Rohit"
    }, action) => {
    switch (action.type){
        case ActionTypes.ADD_USER:
            return{
                ...state,
                authorizedUser: action.payload
            }
        default:
            return state;
    }
}
