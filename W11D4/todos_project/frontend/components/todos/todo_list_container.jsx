import { connect } from 'react-redux';
import TodoList from './todo_list';
import { createTodo, fetchAllTodos, removeTodo } from "../../actions/todo_actions";

const mapStateToProps = (state) => {
  return ({
    todos: Object.values(state.todos)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createTodo: (todo) => dispatch(createTodo(todo)),
    fetchAllTodos: (todos) => dispatch(fetchAllTodos(todos)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);