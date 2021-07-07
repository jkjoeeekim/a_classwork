const Asteroid = require("./asteroid.js")

function Game() {
  Game.DIM_X;
  Game.DIM_Y;
  Game.NUM_ASTEROIDS;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  while (this.asteroids.length < 10) {
    this.asteroids.push(new Asteroid({pos: this.randomPosition}))
  }
};

Game.prototype.randomPosition = function () {
  let pos = [];

  while (pos.length < 2) {
    pos.push(Math.random() * 501);
  }

  return pos;
};

module.exports = Game