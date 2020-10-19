import * as ActionTypes from "./ActionTypes";

export const Result = (state={
    isLoading: true,
    resultClass: [],
    resultScore: null
}, action) => {
    switch (action.type){
        case ActionTypes.ADD_RESULT_CLASS:
            return{
                ...state,
                isLoading: false,
                resultClass: action.payload
            }
        case ActionTypes.RESULT_LOADING:
            return {
                ...state,
                isLoading: true,
                resultClass: [],
                resultScore: null
            }
        case ActionTypes.ADD_RESULT_SCORE:
            return {
                ...state,
                isLoading: false,
                resultScore: action.payload
            }
        default:
            return state;
    }
}
