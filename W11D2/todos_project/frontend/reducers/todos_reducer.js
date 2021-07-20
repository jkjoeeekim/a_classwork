import { RECEIVE_TODO, RECEIVE_TODOS, receiveTodo, receiveTodos } from '../actions/todo_actions';

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

const todosReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        default:
            return oldState;
    }
};


export default todosReducer;