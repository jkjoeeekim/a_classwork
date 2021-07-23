import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';
import * as TodoApiUtil from '../util/todo_api_util';

// reducers/todos_reducer.js
const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

let todos = TodoApiUtil.fetchTodos();
// debugger;

const todosReducer = (oldState = todos, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case RECEIVE_TODOS:
            fetchAllTodos(action.todos).forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        case REMOVE_TODO:
            delete nextState[action.todo.id];
            return nextState;
        default:
            return oldState;
    }
};


export default todosReducer;