import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container'

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDone = this.toggleDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleDone(e) {
    e.preventDefault();
    let bool;
    let id = this.props.todo.id;
    let title = this.props.todo.title;
    let body = this.props.todo.body;

    if (this.props.todo.done) {
      bool = false;
    } else {
      bool = true;
    }

    this.props.removeTodo(this.props.todo);

    this.props.receiveTodo({
      id: id,
      title: title,
      body: body,
      done: bool
    });
  }

  deleteTodo(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <li>
        <p>TITLE: {this.props.todo.title}</p>
        <button onClick={this.deleteTodo}>Delete Todo</button>
        <button onClick={this.toggleDone}>Toggle Done</button>
        <TodoDetailViewContainer todo={this.props.todo} />
      </li>
    );
  }
}

export default TodoListItem;