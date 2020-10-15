import {defaultState} from "../data/defaultState";

export const saveToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }catch (err){
        console.log(err);
    }
}

export const loadLocalState = () => {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState == null){
            return defaultState;
        }
        return JSON.parse(serializedState);
    }catch (err){
        return defaultState;
    }

}
