import React from 'react'

export default class StepList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoId: this.props.todoId
    }
  }
  
  render() {
    const steps = this.props.steps.map((step) => {
      return (
        <li key={step.id}>{step.title}</li>
      )
    })

    return (
      <div>
        {steps}
      </div>
    )
  }
}
