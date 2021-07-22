import React from 'react';
import StepListItem from './step_list_item_container';
import StepForm from './step_form';

export default class StepList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_id: this.props.todoId
    };
  }

  render() {
    const steps = this.props.steps.map((step) => {
      return (
        <li key={step.id}><StepListItem step={step} /></li>
      );
    });

    return (
      <div>
        {steps}
        < StepForm todo_id={this.state.todo_id} receiveStep={this.props.receiveStep}/>
      </div>
    );
  }
}
