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
  return {
    name: name,
    wheels: wheels,
    version: version,
    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      return `name: ${this.name}, `
      + `chip version: ${this.version}, `
      + `wheels: ${this.wheels}`;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },

    goRight(x = 1) {
      if (x >= 0) {
        this.coords.x += x;
      }

      return this;
    },

    goLeft(x = 1) {
      if (x >= 0) {
        this.coords.x -= x;
      }

      return this;
    },

    goForward(y = 1) {
      if (y >= 0) {
        this.coords.y += y;
      }

      return this;
    },

    goBack(y = 1) {
      if (y >= 0) {
        this.coords.y -= y;
      }

      return this;
    },

  };
}

module.exports = makeRobot;
