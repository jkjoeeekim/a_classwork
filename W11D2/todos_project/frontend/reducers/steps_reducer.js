import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/steps_actions';

// reducers/todos_reducer.js
const initialState = {
    1: {
        id: 1,
        title: "buy soap",
        todo_id: 1,
        done: false
    },
    2: {
        id: 2,
        title: "buy soap2",
        todo_id: 1,
        done: false
    },
    3: {
        id: 3,
        title: "buy soap3",
        todo_id: 2,
        done: false
    },
    4: {
        id: 4,
        title: "make him happy",
        todo_id: 2,
        done: true
    }
};

const stepsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case RECEIVE_STEPS:
            action.steps.forEach(step => {
                nextState[step.id] = step;
            });
            return nextState;
        case REMOVE_STEP:
            delete nextState[action.step.id];
            return nextState;
        default:
            return oldState;
    }
};


export default stepsReducer;