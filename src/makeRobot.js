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
  const initialCoordinates = 0;
  const evacuateCoordinateX = 1400;
  const evacuateCoordinateY = 500;
  const initialStep = 1;

  return {
    name,
    wheels,
    version,
    coords: {
      x: initialCoordinates,
      y: initialCoordinates,
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
      this.coords.x = evacuateCoordinateX;
      this.coords.y = evacuateCoordinateY;
    },

    goRight(x = initialStep) {
      if (x >= 0) {
        this.coords.x += x;
      }

      return this;
    },

    goLeft(x = initialStep) {
      if (x >= 0) {
        this.coords.x -= x;
      }

      return this;
    },

    goForward(y = initialStep) {
      if (y >= 0) {
        this.coords.y += y;
      }

      return this;
    },

    goBack(y = initialStep) {
      if (y >= 0) {
        this.coords.y -= y;
      }

      return this;
    },

  };
}

module.exports = makeRobot;
