'use strict';
/*
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

      return this.coords;
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
    goBack(value = 1) {
      if (value > 0) {
        this.coords.y -= value;
      }

      return this;
    },
    goForward(value = 1) {
      if (value > 0) {
        this.coords.y += value;
      }

      return this;
    },

  };

  return robot;
}

module.exports = makeRobot;
