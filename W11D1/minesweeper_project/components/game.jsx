import React from 'react';
import Board from './board';
const Minesweeper = require('./minesweeper')

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: null,
      board: new Minesweeper.Board(10, 10)
    };
    this.updateGame = this.updateGame.bind(this);

  }

  updateGame() {
    if (this.state.board.won()) {
      this.setState({ msg: 'Victory!' })
    } else if (this.state.board.lost()) {
      this.setState({ msg: 'Defeat' })
    }
  }

  render() {
    return (
      <Board board={this.state.board} msg={this.state.msg} updateGame={this.updateGame}/>
    )
  }
}