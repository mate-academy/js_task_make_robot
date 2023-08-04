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
  const DEFAULT_STEPS = 1;
  const START_COORD_X = 0;
  const START_COORD_Y = 0;
  const SERVICE_COORD_X = 1400;
  const SERVICE_COORD_Y = 500;

  return {
    name,
    wheels,
    version,
    coords: {
      x: START_COORD_X,
      y: START_COORD_Y,
    },

    goForward(steps = DEFAULT_STEPS) {
      return this.move(0, this.normalizeSteps(steps));
    },

    goBack(steps = DEFAULT_STEPS) {
      return this.move(0, -this.normalizeSteps(steps));
    },

    goRight(steps = DEFAULT_STEPS) {
      return this.move(this.normalizeSteps(steps), 0);
    },

    goLeft(steps = DEFAULT_STEPS) {
      return this.move(-this.normalizeSteps(steps), 0);
    },

    evacuate() {
      this.coords.x = SERVICE_COORD_X;
      this.coords.y = SERVICE_COORD_Y;
    },

    move(x = 0, y = 0) {
      this.coords.x += x;
      this.coords.y += y;

      return this;
    },

    normalizeSteps(steps) {
      return steps > 0 ? steps : 0;
    },

    get location() {
      return `${this.name}: `
        + `x=${this.coords.x}, `
        + `y=${this.coords.y}`;
    },

    get info() {
      return `name: ${this.name}, `
        + `chip version: ${this.version}, `
        + `wheels: ${this.wheels}`;
    },
  };
}

module.exports = makeRobot;
