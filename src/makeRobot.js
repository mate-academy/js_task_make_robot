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
 *  - Provide the coordss of your location via getter location.
 *    robot.location === '%name%: x=14, y=21'
 *  - Have methods to move goForward, goBack, goRight, goLeft.
 *  - Movement methods must be able to be used with a chain.
 *    robot.goForward().goForward().goForward().goLeft()
 *  - Default methods that move the work by 1 in the right direction.
 *    This value can be increased by passing the desired number to the method.
 *    Negative numbers should not affect the location of the robot. goLeft(3)
 *  - The coordss of the robot must be stored in the object coords,
 *    the keys x and y inside the robot.
 *  - The robot must be able to request the evacuation of robot.evacuate(),
 *    which will call rescuers and transfer it to the service center
 *    at the coordss x: 1400, y: 500.
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
    version,

    get info() {
      return `name: ${name}, chip version: ${version}, wheels: ${wheels}`;
    },

    coords: {
      x: 0,
      y: 0,
    },

    get location() {
      return `${name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goRight(c = 1) {
      if (c > 0) {
        this.coords.x += c;
      }

      return this;
    },

    goLeft(c = 1) {
      if (c > 0) {
        this.coords.x -= c;
      }

      return this;
    },

    goForward(c = 1) {
      if (c > 0) {
        this.coords.y += c;
      }

      return this;
    },

    goBack(c = 1) {
      if (c > 0) {
        this.coords.y -= c;
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
