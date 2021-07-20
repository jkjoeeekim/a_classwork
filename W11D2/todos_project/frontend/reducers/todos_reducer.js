import {createStore} from 'redux';

export const todosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        // case 'RECEIVE_TODOS':

        // case 'RECEIVE_TODO':
        //     nextState[action.todo.id] = action.todo;
        //     return nextState;
        default:
            return oldState;
    }
};