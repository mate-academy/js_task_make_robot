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

    evacuate() {
      this.coords.x = this.serviceCenter.x;
      this.coords.y = this.serviceCenter.y;
    },
  };

  return robot;
}

module.exports = makeRobot;
