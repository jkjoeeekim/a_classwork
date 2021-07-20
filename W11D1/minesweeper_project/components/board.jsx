import React from 'react';
import Tile from './tile';

export default class Board  extends React.Component {
  constructor(props) {
    super(props);
  }

  createRow(row) {
    return row.map((ele, idx) => {
      return (
        <Tile tile={ele} updateGame={this.props.updateGame} key={idx} />
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
        <h1>{this.props.msg}</h1>
        {board}
      </div>
    )
  }
}