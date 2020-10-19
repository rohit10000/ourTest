import {createStore, combineReducers, applyMiddleware} from 'redux';
import {User} from "./users";
import {Tests} from "./tests";
import {Sections} from "./sections";
import {Quiz} from "./quiz";

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Topic} from "./topic";
import {Result} from "./result";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user: User,
            tests: Tests,
            sections: Sections,
            topic: Topic,
            quiz: Quiz,
            result: Result
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
