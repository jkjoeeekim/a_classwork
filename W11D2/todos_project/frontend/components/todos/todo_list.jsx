import React from 'react';
import TodoListItem from '../todo_list/todo_list_item'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let todos = [];
    if (this.props.todos) {
      todos = this.props.todos.map((todo) => {
        todos.push(<TodoListItem todo={todo} />)
      })
    }

    return (
      <div>
        <h3>Todo List: </h3>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

export default TodoList;