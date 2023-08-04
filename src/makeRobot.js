'use strict';

/**
 *
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
  // write code here
  const robot = {
    get info() {
      return `name: ${this.name}, `
        + `chip version: ${this.version}, wheels: ${this.wheels}`;
    },
    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    get evacuation() {
      return `x=${this.coords.evacuationX}, y=${this.coords.evacuationY}`;
    },

    name,
    wheels,
    version,
    coords: {
      x: 0,
      y: 0,
    },

    serviceCenter: {
      x: 1400,
      y: 500,
    },

    goForward(y = 1) {
      if (y > 0) {
        this.coords.y += y;
      }

      return this;
    },

    goBack(y = 1) {
      if (y > 0) {
        this.coords.y -= y;
      }

      return this;
    },

    goRight(x = 1) {
      if (x > 0) {
        this.coords.x += x;
      }

      return this;
    },

    goLeft(x = 1) {
      if (x > 0) {
        this.coords.x -= x;
      }

      return this;
    },

    evacuate() {
      this.coords.x = this.serviceCenter.x;
      this.coords.y = this.serviceCenter.y;
    },
  };

  return robot;
}

module.exports = makeRobot;
