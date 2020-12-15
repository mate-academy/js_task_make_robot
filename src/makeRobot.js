'use strict';

function makeRobot(name, wheels, version) {
  const robot = {
    name,
    wheels,
    version,
    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      return `name: ${this.name},`
      + ` chip version: ${this.version}, wheels: ${this.wheels}`;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goForward(coordinate = 1) {
      if (coordinate > 0) {
        this.coords.y += coordinate;
      }

      return this;
    },

    goRight(coordinate = 1) {
      if (coordinate > 0) {
        this.coords.x += coordinate;
      }

      return this;
    },

    goBack(coordinate = 1) {
      if (coordinate > 0) {
        this.coords.y -= coordinate;
      }

      return this;
    },

    goLeft(coordinate = 1) {
      if (coordinate > 0) {
        this.coords.x -= coordinate;
      }

      return this;
    },
  };

  return robot;
}

module.exports = makeRobot;
