import React from 'react';
import TodoListItem from './todo_list_item';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 3,
      title: "",
      body: "",
      done: false
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateDone = this.updateDone.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  updateDone(e) {
    this.setState({ done: e.target.value });
  }

  submitTodo(e) {
    e.preventDefault();
    // debugger
    console.log(this.state);
    this.props.receiveTodo(this.state);
    this.setState({
      id: this.state.id + 1,
      title: "",
      body: "",
      done: false
    });
  }

  render() {
    return (
      <form>
        <label>Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.updateTitle}
          />
        </label>
        <label>Body:
          <input
            type="text"
            value={this.state.body}
            onChange={this.updateBody}
          />
        </label>
        <label>Done:
          <select onChange={this.updateDone} defaultValue={this.state.done}>
            <option value='true'>True</option>
            <option value='false'>False</option>
          </select>
        </label>

        <input type='submit' value='Add a todo' onClick={this.submitTodo} />
      </form>
    );
  }
}
