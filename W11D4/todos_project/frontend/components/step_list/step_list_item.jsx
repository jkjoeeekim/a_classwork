import React from 'react';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   done: this.props.step.done,
    //   id: this.props.step.id,
    //   title: this.props.step.title,
    //   todo_id: this.props.step.todo_id
    // };
    this.state = this.props.step;
    this.toggleDone = this.toggleDone.bind(this);
    this.deleteStep = this.deleteStep.bind(this);

  }



  toggleDone(e) {
    e.preventDefault();
    if(this.state.done) {
      this.setState({ done: false });
    } else {
      this.setState({ done: true}); 
    }
  }

  deleteStep (e) {
    e.preventDefault();
    this.props.removeStep(this.state);
  }

  render() {
    return (
      <div>
        <p>Title: {this.state.title}</p>
        <p>Done: {`${this.state.done}`}</p>
        <button onClick={this.toggleDone}>toggle</button>
        <button onClick={this.deleteStep}>remove</button>
      </div>
    );
  }
}
