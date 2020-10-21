import {createStore, combineReducers, applyMiddleware} from 'redux';
import {User} from "./user";
import {Tests} from "./tests";
import {Sections} from "./sections";
import {Quiz} from "./quiz";

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Topics} from "./topics";
import {Result} from "./result";
import {Signup} from "./signup";
import { createForms } from 'react-redux-form';

import { InitialFeedback } from './forms';
import {Login} from "./login";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user: User,
            tests: Tests,
            sections: Sections,
            topics: Topics,
            quiz: Quiz,
            result: Result,
            signup: Signup,
            login: Login,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
