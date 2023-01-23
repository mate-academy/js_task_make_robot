'use strict';

/**
 * @typedef {object} Robot
 * @property {string} name
 * @property {number} wheels
 * @property {number} version
 * @property {function} info
 *
 * @param {string} name
 * @param {number} wheels
 * @param {number} version
 *
 * @return {Robot}
 */
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
      return `name: ${this.name}, chip version: `
      + `${this.version}, wheels: ${this.wheels}`;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },

    goForward(move = 1) {
      if (move >= 1) {
        this.coords.y += move;
      }

      return this;
    },

    goBack(move = 1) {
      if (move >= 1) {
        this.coords.y -= move;
      }

      return this;
    },

    goRight(move = 1) {
      if (move >= 1) {
        this.coords.x += move;
      }

      return this;
    },

    goLeft(move = 1) {
      if (move >= 1) {
        this.coords.x -= move;
      }

      return this;
    },

  };

  return robot;
}

module.exports = makeRobot;
