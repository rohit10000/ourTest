import * as ActionTypes from "./ActionTypes";

export const Tests = (state={
        isLoading: true,
        errMess: null,
        tests: []
    }, action) => {
    switch (action.type){
        case ActionTypes.ADD_TESTS:
            return{
                ...state,
                isLoading: false,
                errMess: null,
                tests: action.payload
            }
        case ActionTypes.TESTS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                tests: []
            }
        case ActionTypes.TESTS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            }
        default:
            return state;
    }
}
