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
        li.classList = "default";
        li.dataset.position = JSON.stringify([x, y]);
        ul.append(li);
      }
    }
    return ul;
  }
  
  bindEvents() {
    // console.log(this);
    // console.log(JSON.parse(this.ul));
    this.ul.addEventListener("click", (e) => this.handleClick(e));
  }

  handleClick(e) {
    if(!this.game.isOver()){
      let pos = e.target.dataset.position;
      // console.log(pos);
      e.target.classList = ("clicked");
      this.makeMove(JSON.parse(pos));
      e.target.innerText = this.game.currentPlayer;
      console.log(e.target.classList);
      this.checkWinner();
    }
  }

  makeMove(square) {
    try{
      this.game.playMove(square);
    }catch(error){
      // console.log(error);
      alert(error.msg);
    }
  }

  checkWinner(){

    let winner = this.game.winner();
    if(winner){
      // let winner = this.game.winner();
      // console.log(winner);
      document.querySelectorAll(".clicked").forEach(el => {
        if(el.innerText === winner){
          el.classList = "loser";
        }else{
          el.classList = "winner";
        }
      });
      const otherLIs = document.querySelectorAll(".default");
      otherLIs.forEach(el => {
      el.classList = "empty";
      });
      const msg = document.createElement("h2");
      msg.innerText = `winner is ${this.game.currentPlayer}!`;
      this.el.append(msg);
    }else if(this.game.isOver()){
      document.querySelectorAll(".clicked").forEach(el => {
        el.classList = "loser";
      });
      const otherLIs = document.querySelectorAll(".default");
      otherLIs.forEach(el => {
      el.classList = "empty";
      });
      const msg = document.createElement("h2");
      msg.innerText = 'TIE GAME';
      this.el.append(msg);

    }
  }

}

module.exports = View;
