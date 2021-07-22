import React from 'react';
import { stepsByTodoId } from '../../reducers/selectors'
import StepList from '../step_list/step_list_container'

export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      buttonMsg: 'Show'
    }

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    if (this.state.display === 'none') {
      this.setState({display: 'block', buttonMsg: 'Hide'})
    } else {
      this.setState({display: 'none', buttonMsg: 'Show'})
    }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.toggleDetails}>{this.state.buttonMsg}</button>
        </div>
        <div id="todo-details" style={{ display: this.state.display }}>
          <p>BODY: {this.props.todo.body}</p>
          <p>DONE: {`${this.props.todo.done}`}</p>
          <ul>
            <StepList todoId={this.props.todo.id} />
          </ul>
        </div>
      </div >
    );
  }
}
