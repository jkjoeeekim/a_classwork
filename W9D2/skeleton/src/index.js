const View = require("./ttt-view.js");
const Game = require("../ttt_node/game.js");

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let g1 = new Game;
  const container = document.querySelector(".ttt");
  let v1 = new View(g1,container);
});
