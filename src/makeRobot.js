'use strict';

/**
 * @typedef {object} Robot
 * @property {string} name
 * @property {number} wheels
 * @property {number} version
 * @property {function} info
 * @param {string} name
 * @param {number} wheels
 * @param {number} version
 * @return {object}
 */
function makeRobot(name, wheels, version) {
  const coords = {
    x: 0,
    y: 0,
  };

  const robot = {
    name,
    wheels,
    version,
    coords,

    info: `name: ${name}, chip version: ${version}, wheels: ${wheels}`,

    get location() {
      return `${name}: x=${coords.x}, y=${coords.y}`;
    },

    goRight(step = 1) {
      if (step > 0) {
        this.coords.x += step;
      }

      return robot;
    },

    goLeft(step = 1) {
      if (step > 0) {
        this.coords.x -= step;
      }

      return robot;
    },

    goBack(step = 1) {
      if (step > 0) {
        this.coords.y -= step;
      }

      return robot;
    },

    goForward(step = 1) {
      if (step > 0) {
        this.coords.y += step;
      }

      return robot;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;

      return coords;
    },
  };

  return robot;
}

module.exports = makeRobot;
