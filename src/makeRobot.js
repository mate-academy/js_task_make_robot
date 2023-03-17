/* eslint-disable no-console */
'use strict';

/**
 * Mate Robot Factory impressed by your success, they are ready to accept
 * you into the Tech team, you will learn to program robots together
 * with the team! Are you in business As a test task, you will need to
 * program our equipment that makes robots.
 *
 * Create a makeRobot function that takes the string name and the number
 * wheels, version and returns the robot object.
 * The robot coming off the assembly line must be able to:
 *  - Provide information about yourself through getter info.
 *    robot.info === 'name:%name%, chip version: %version%, wheels: %wheels%'
 *  - Provide the coordinates of your location via getter location.
 *    robot.location === '%name%: x=14, y=21'
 *  - Have methods to move goForward, goBack, goRight, goLeft.
 *  - Movement methods must be able to be used with a chain.
 *    robot.goForward().goForward().goForward().goLeft()
 *  - Default methods that move the work by 1 in the right direction.
 *    This value can be increased by passing the desired number to the method.
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
  const result = {
    set name(value) {
      if (typeof value === 'string') {
        this._name = value;
      }
    },

    get name() {
      return this._name;
    },

    set wheels(value) {
      if (typeof value === 'number') {
        this._wheels = value;
      }
    },

    get wheels() {
      return this._wheels;
    },

    set version(value = version) {
      if (typeof value === 'number') {
        this._version = value;
      }
    },

    get version() {
      return this._version;
    },

    get info() {
      return `name: ${this.name},`
        + ` chip version: ${this.version},`
        + ` wheels: ${this.wheels}`;
    },

    set x(value) {
      this._x = value;
    },

    get x() {
      return this._x;
    },

    set y(value) {
      this._y = value;
    },

    get y() {
      return this._y;
    },

    get location() {
      return `${this.name}: x=${this._x}, y=${this._y}`;
    },

    goBack(value = 1) {
      if (value >= 0) {
        this._y -= value;
      }

      return this;
    },

    goForward(value = 1) {
      if (value >= 0) {
        this._y += value;
      }

      return this;
    },

    goLeft(value = 1) {
      if (value >= 0) {
        this._x -= value;
      }

      return this;
    },

    goRight(value = 1) {
      if (value >= 0) {
        this._x += value;
      }

      return this;
    },

    get coords() {
      return {
        x: this.x,
        y: this.y,
      };
    },

    evacuate() {
      this.x = 1400;
      this.y = 500;

      return {
        x: this.x,
        y: this.y,
      };
    },
  };

  result.name = name;
  result.version = version;
  result.wheels = wheels;
  result.x = 0;
  result.y = 0;

  return result;
}

module.exports = makeRobot;
