const Board = require("../ttt_node/board.js")

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.ul = this.setupBoard();
    this.el.append(this.ul);
    this.bindEvents();
  }

  setupBoard() {
    const ul = document.createElement("ul");
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        const li = document.createElement("li");
        li.dataset.position = JSON.stringify([x, y]);
        ul.append(li);
      }
    }
    return ul;
  }
  
  bindEvents() {
    console.log(this);
    console.log(this.ul);
    this.ul.addEventListener("click", (e) => this.handleClick(e));
  }

  handleClick(e) {
    let pos = e.target.dataset.position;
    console.log(pos);
    this.makeMove(JSON.parse(pos));
    e.target.innerText = this.game.currentPlayer;
    e.target.classList = ("clicked");
  }

  makeMove(square) {
    try{
      this.game.playMove(square);
    }catch(error){
      // console.log(error);
      alert(error.msg);
    }
    if(this.game.winner()){
        
    }else if(this.game.isOver()){
      console.log(this.ul);
    }else{
      console.log(this.game.currentPlayer);
    }
  }

}

module.exports = View;
