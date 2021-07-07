const MovingObject = require("./moving_object");
const Util = require("./utils");

function Asteroid(options) {
  Asteroid.RADIUS = 20;
  Asteroid.COLOR = "#ff0000";

  options['radius'] = Asteroid.RADIUS;
  options['color'] = Asteroid.COLOR;
  options['vel'] = Util.randomVec(5);
  // const parentObj = new MovingObject(options);

  MovingObject.call(this, options)
}

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;