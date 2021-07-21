import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, receiveTodos, removeTodo } from "../../actions/todo_actions"

const mapStateToProps = (state) => {
  return ({
    todos: Object.values(state.todos)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    receiveTodos: (todos) => dispatch(receiveTodos(todos)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)