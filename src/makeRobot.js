'use strict';

function makeRobot(name, wheels, version) {
  const robot = {
    name: name,
    wheels: wheels,
    version: version,
    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      return 'name: ' + this.name + ', ' + 'chip version: ' + this.version
      + ', ' + 'wheels: ' + this.wheels;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;

      return `x: {this.coords.x}, y: {this.coords.y}`;
    },

    goForward(step = 1) {
      if (step > 0) {
        this.coords.y += step;
      }

      return this;
    },
    goBack(step = 1) {
      if (step > 0) {
        this.coords.y -= step;
      }

      return this;
    },
    goRight(step = 1) {
      if (step > 0) {
        this.coords.x += step;
      }

      return this;
    },
    goLeft(step = 1) {
      if (step > 0) {
        this.coords.x -= step;
      }

      return this;
    },
  };

  return robot;
}

module.exports = makeRobot;
