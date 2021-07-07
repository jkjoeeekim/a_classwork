const Board = require("../ttt_node/board.js")

class View {
  constructor(game, el) {}

  setupBoard() {
    const ul = document.createElement("ul");
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        const li = document.createElement("li");
        li.dataset.position = JSON.stringify([x, y]);
        ul.append(li);
      }
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}
let v1 = new View
v1.setupBoard();
module.exports = View;
