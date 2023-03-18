'use strict';

function makeRobot(name, wheels, version) {
  const robot = {
    name,
    version,
    wheels,
    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      return `name: ${name}, chip version: ${version}, wheels: ${wheels}`;
    },

    get location() {
      return `${name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goForward(number = 1) {
      if (number > 0) {
        this.coords.y += number;
      }

      return this;
    },

    goBack(number = 1) {
      if (number > 0) {
        this.coords.y -= number;
      }

      return this;
    },

    goRight(number = 1) {
      if (number > 0) {
        this.coords.x += number;
      }

      return this;
    },

    goLeft(number = 1) {
      if (number > 0) {
        this.coords.x -= number;
      }

      return this;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;

      return this;
    },
  };

  return robot;
}

module.exports = makeRobot;
