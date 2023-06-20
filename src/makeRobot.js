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
    name,
    wheels,
    version,
    coords: {
      x: 0,
      y: 0,
    },
    get info() {
      const nameInfo = `name: ${this.name}`;
      const versionInfo = `chip version: ${this.version}`;
      const wheelInfo = `wheels: ${this.wheels}`;

      return `${nameInfo}, ${versionInfo}, ${wheelInfo}`;
    },
    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },
    goForward(forward = 1) {
      if (forward > 0) {
        this.coords.y += forward;
      }

      return this;
    },
    goBack(back = 1) {
      if (back > 0) {
        this.coords.y -= back;
      }

      return this;
    },
    goRight(right = 1) {
      if (right > 0) {
        this.coords.x += right;
      }

      return this;
    },
    goLeft(left = 1) {
      if (left > 0) {
        this.coords.x -= left;
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
