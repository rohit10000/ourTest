import {createStore, combineReducers, applyMiddleware} from 'redux';
import {User} from "./users";
import {Tests} from "./tests";
import {Sections} from "./sections";
import {Quiz} from "./quiz";

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Topics} from "./topics";
import {Result} from "./result";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user: User,
            tests: Tests,
            sections: Sections,
            topics: Topics,
            quiz: Quiz,
            result: Result
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
