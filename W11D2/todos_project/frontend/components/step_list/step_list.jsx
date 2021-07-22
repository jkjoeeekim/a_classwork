import React from 'react';
import StepListItem from './step_list_item_container'

export default class StepList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoId: this.props.todoId
    };
  }

  render() {
    const steps = this.props.steps.map((step) => {
      return (
        <li key={step.id}><StepListItem title={step.title} done={step.done} /></li>
      );
    });

    return (
      <div>
        {steps}
      </div>
    );
  }
}
