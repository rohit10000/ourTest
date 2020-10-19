import * as ActionTypes from "./ActionTypes";

export const Topic = (state={
    isLoading: true,
    errMess: null,
    topic: null
}, action) => {
    switch (action.type){
        case ActionTypes.ADD_TOPIC:
            return{
                ...state,
                errMess: null,
                topic: action.payload,
                isLoading: false
            }
        case ActionTypes.TOPIC_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                topic: null
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
