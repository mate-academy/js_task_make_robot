'use strict';

/*
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
  const serviceX = 1400;
  const serviceY = 500;
  const robot = {
    name: name,
    wheels: wheels,
    version: version,
    get info() {
      return `name: ${this.name}, `
      + `chip version: ${this.version}, `
      + `wheels: ${this.wheels}`;
    },
    x: 0,
    y: 0,
    goForward(n = 1) {
      this.y = this.y + n;

      return this;
    },
    goBack(n = 1) {
      this.y = this.y - n;

      return this;
    },
    goRight(n = 1) {
      this.x = this.x + n;

      return this;
    },
    goLeft(n = 1) {
      this.x = this.x - n;

      return this;
    },
    get location() {
      return `${this.name}: x=${this.x}, y=${this.y}`;
    },
    get coords() {
      return {
        x: this.x, y: this.y,
      };
    },
    evacuate() {
      this.x = serviceX;
      this.y = serviceY;
    },
  };

  return robot;
}

module.exports = makeRobot;
