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
 * @return {object}
 */

function makeRobot(name, wheels, version) {
  // write code here
  const robot = {
    name,
    wheels,
    version,
    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      return (
        `name: ${this.name}, `
        + `chip version: ${this.version}, `
        + `wheels: ${this.wheels}`
      );
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goForward(step = 1) {
      if (step > 0) {
        this.coords.y = this.coords.y + step;
      }

      return this;
    },

    goBack(step = 1) {
      if (step > 0) {
        this.coords.y = this.coords.y - step;
      }

      return this;
    },

    goLeft(step = 1) {
      if (step > 0) {
        this.coords.x = this.coords.x - step;
      }

      return this;
    },

    goRight(step = 1) {
      if (step > 0) {
        this.coords.x = this.coords.x + step;
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
