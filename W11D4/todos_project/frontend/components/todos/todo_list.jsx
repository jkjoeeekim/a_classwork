import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let todos = [];
    if (this.props.todos) {
      todos = this.props.todos.map((todo) => {
        return (<TodoListItem key={todo.id} todo={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo} />);
      });
    }
    // debugger;

    return (
      <div>
        <h3>Todo List: </h3>
        <ul>
          {todos}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }
}

export default TodoList;