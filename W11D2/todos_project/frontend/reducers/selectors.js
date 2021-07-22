export const allTodos = (state) => {
  const todos = Object.values(state.todos);
  return todos;
};

export const stepsByTodoId = (state, todoId) => {
  let steps = [];

  let allSteps = Object.values(state.steps);
  allSteps.forEach(step => {
    if (step.todo_id === todoId) {
      steps.push(step);
    }
  });

  return steps;
};