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
      return `name: ${this.name}, chip version: ${version}, wheels: ${wheels}`;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goRight(value = 1) {
      if (value > 0) {
        this.coords.x += value;
      }

      return this;
    },

    goLeft(value = 1) {
      if (value > 0) {
        this.coords.x -= value;
      }

      return this;
    },

    goForward(value = 1) {
      if (value > 0) {
        this.coords.y += value;
      }

      return this;
    },

    goBack(value = 1) {
      if (value > 0) {
        this.coords.y -= value;
      }

      return this;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },
  };

  return robot;
}

module.exports = makeRobot;
