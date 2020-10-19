import * as ActionTypes from "./ActionTypes";

export const Topics = (state={
    isLoading: true,
    errMess: null,
    topics: []
}, action) => {
    switch (action.type){
        case ActionTypes.ADD_TOPICS:
            return{
                ...state,
                errMess: null,
                topics: action.payload,
                isLoading: false
            }
        case ActionTypes.TOPIC_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                topics: []
            }
        case ActionTypes.TOPIC_FAILED:
            return {
                ...state,
                errMess: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}
