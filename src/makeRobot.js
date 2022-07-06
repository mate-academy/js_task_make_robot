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
  // write code here
  const robot = {
    name,
    wheels,
    'chip version': version,
    get info() {
      return `name: ${this.name},`
      + ` chip version: ${this['chip version']},`
      + ` wheels: ${this.wheels}`;
    },

    coords: {
      x: 0,
      y: 0,
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goBack(y = 1) {
      if (y < 0) {
        return this;
      }

      this.location = `Joy: x=0, y=${-y}`;

      return this;
    },

    goForward(y = 1) {
      if (y < 0) {
        return this;
      }
      this.location = `Joy: x=0, y=${y}`;

      return this;
    },

    goRight(x = 1) {
      if (x < 0) {
        return this;
      }
      this.location = `Joy: x=${x}, y=0`;

      return this;
    },

    goLeft(x = 1) {
      if (x < 0) {
        return this;
      }
      this.location = `Joy: x=${-x}, y=0`;

      return this;
    },
    set location(value) {
      if (typeof value !== 'string') {
        return;
      }

      const startX = value.lastIndexOf('x');
      const endX = value.lastIndexOf(',');
      const coordX = value.slice(startX + 2, endX);

      this.coords.x += Number(coordX);

      const startY = value.lastIndexOf('=');
      const coordY = value.slice(startY + 1);

      this.coords.y += Number(coordY);
    },

    evacuate() {
      const x = 1400 - this.coords.x;
      const y = 500 - this.coords.y;

      this.location = `Joy: x=${x}, y=${y}`;
    },
  };

  return robot;
}

module.exports = makeRobot;
