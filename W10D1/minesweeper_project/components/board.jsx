import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tile updateGame={this.props.updateGame} />
    )
  }
}