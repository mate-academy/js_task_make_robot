'use strict';

/**

 *    Negative numbers should not affect the location of the robot. goLeft(3)
 *  - The coordinates of the robot must be stored in the object coords,
 *    the keys x and y inside the robot.
 *  - The robot must be able to request the evacuation of robot.evacuate(),
 *    which will call rescuers and transfer it to the service center
 *    at the coordinates x: 1400, y: 500.
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
  const robot = {
    name,
    wheels,
    version,
    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      // eslint-disable-next-line max-len
      return `name: ${this.name}, chip version: ${this.version}, wheels: ${this.wheels}`;
    },

    get location() {
      const { x, y } = this.coords;

      return `${this.name}: x=${x}, y=${y}`;
    },

    goForward(step = 1) {
      if (step < 0) {
        return this;
      }
      this.coords.y += step;

      return this;
    },

    goBack(step = 1) {
      if (step < 0) {
        return this;
      }
      this.coords.y -= step;

      return this;
    },

    goRight(step = 1) {
      if (step < 0) {
        return this;
      }
      this.coords.x += step;

      return this;
    },

    goLeft(step = 1) {
      if (step < 0) {
        return this;
      }
      this.coords.x -= step;

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
