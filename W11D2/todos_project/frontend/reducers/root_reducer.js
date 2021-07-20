import {combineReducers} from 'redux';
import todoReducer from './todos_reducer';

export const root_reducer = combineReducers(
    {
        todoReducer
    }
);


