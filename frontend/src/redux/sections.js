import * as ActionTypes from "./ActionTypes";

export const Sections = (state={
    isLoading: true,
    errMess: null,
    sections: []
}, action) => {
    switch (action.type){
        case ActionTypes.ADD_SECTIONS:
            return{
                ...state,
                isLoading: false,
                errMess: null,
                sections: action.payload
            }
        case ActionTypes.SECTIONS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                sections: []
            }
        case ActionTypes.SECTIONS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            }
        default:
            return state;
    }
}
