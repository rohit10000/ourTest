import React from "react";
import {loadLocalState} from "../utility/storeUtility";

export const initialState = {
    state: loadLocalState()
};

let reducer = (state, action) => {

    switch (action.type){
        //logic for Update Test Id

        case 'UPDATE_TEST_ID':
            return {
                ...state,
                testId: action.item
            }

        case 'UPDATE_TEST_TITLE':
            //logic for Update Test Title

            return {
                ...state,
                testTitle: action.item
            }

        case 'UPDATE_TOPIC_ID':
            //logic for Update Topic Id

            return {
                ...state,
                topicId: action.item
            }

        case 'UPDATE_TOPIC_DETAIL':
            //logic for Update Topic Details

            return {
                ...state,
                topicDetails: action.item
            }

        case 'SET_ACTIVE_QUESTION':
            //logic for setting Active Questions

            return {
                ...state,
                activeQuestion: action.item
            }
        case 'SET_VISITED_QUESTION':
            //logic for setting Visited Questions

            return {
                ...state,
                visitedQuestion: action.item
            }

        case 'UPDATE_VISITED_QUESTION':
            //logic for updating Visited Questions

            var list= state.visitedQuestion;
            list[parseInt(action.item)] = true;

            return {
                ...state,
                visitedQuestion:list
            }

        case 'SET_ANSWERED_QUESTION':
            //logic for setting Answered Questions

            return {
                ...state,
                answeredQuestion: action.item
            }

        case 'UPDATE_ANSWERED_QUESTION':
            //logic for updating Answered Questions

            var list = state.answeredQuestion;
            list[state.activeQuestion-1] = action.item

            return {
                ...state,
                answeredQuestion: list
            }

        case 'SET_YOUR_ANSWER':
            //logic for setting your answer list

            return {
                ...state,
                yourAnswer: action.item
            }

        case 'UPDATE_YOUR_ANSWER':
            //logic for updating your answer in the list

            var list = state.yourAnswer;
            list[state.activeQuestion-1] = action.item

            return {
                ...state,
                yourAnswer: list
            }

        case 'UPDATE_RESULT_CLASS':
            //logic for updating result class

            return {
                ...state,
                resultClass: action.item
            }

        case 'SET_YOUR_SCORE':
            //logic for setting you your score

            return {
                ...state,
                yourScore: action.item
            }
        case 'ADD_USER':
            //logic for adding user to store

            return {
                ...state,
                users: [...state.users, action.item]
            }

        case 'SET_AUTHORIZED_USER':
            return {
                ...state,
                authorizedUser: action.item
            }


            //**********rest is utility

        case 'SET_QUESTION_TIMER':
            return {
                ...state,
                questionTimer: action.item
            }




        case 'UPDATE_QUESTION_TIMER':
            list = state.questionTimer;
            list[state.activeQuestion-1] = action.item;

            return {
                ...state,
                questionTimer: list
            }

        case 'SET_USERS':
            return {
                ...state,
                users: action.item
            }



        default:
            return state;
    }
}

export default reducer;
