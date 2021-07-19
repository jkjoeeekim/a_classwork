import React from 'react';
import Tile from './tile';

export default class Board  extends React.Component {
  constructor(props) {
    super(props);
    //2d array as state
  }

  createRow(row) {
    return row.map((ele, idx) => {
      return (
        <Tile alt={this.props.alt} content={ele} updateGame={this.props.updateGame} key={idx} />
      )
    })

  }

  render() {
    const board = this.props.board.grid.map( (row, idx) => {
      return (
        <ul className="row" key={idx}>
          {this.createRow(row)}
        </ul>
      )
    })

    return (
      // <Tile updateGame={this.props.updateGame} />
      <div className="board-display">
        {board}
      </div>
    )
  }
}