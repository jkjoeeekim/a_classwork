const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./utils.js");
const Game = require("./game.js");


window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', function (event) {
  // console.log('loaded');
  let canvas = document.getElementById('game-canvas');
  let canvasContent = canvas.getContext('2d');
  ball.draw(canvasContent);
  aster.draw(canvasContent);
  console.log(game1.asteroids);
  
});

const ball = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});

const aster = new Asteroid({ pos: [60, 60] });
const game1 = new Game;


// ball.move();
// console.log(ball.prototype);
// console.log(Util.inherits);