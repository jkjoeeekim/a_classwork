import React from 'react';

export default class StepListItem extends React.Component {
  render() {
    return (
      <div>
        <p>Title: {this.props.title}</p>
        <p>Done: {`${this.props.done}`}</p>
        <button>toggle</button>
        <button>remove</button>
      </div>
    );
  }
}
