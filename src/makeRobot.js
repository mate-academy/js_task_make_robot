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
  const robot = {
    /* getter of robot.info string */
    get info() {
      const a = `name: ${this.name},`;
      const b = `chip version: ${this['chip version']},`;
      const c = `wheels: ${this.wheels}`;

      return `${a} ${b} ${c}`;
    },

    set info(value) {
      this.info = value.split(' ');
    },

    goForward(a) {
      if (a < 1) {
        this.coords.y += 0;
      } else if (a === undefined) {
        this.coords.y++;
      } else {
        this.coords.y += a;
      };

      return this;
    },

    goBack(a) {
      if (a < 1) {
        this.coords.y += 0;
      } else if (a === undefined) {
        this.coords.y--;
      } else {
        this.coords.y -= a;
      };

      return this;
    },

    goRight(a) {
      if (a < 1) {
        this.coords.x += 0;
      } else if (a === undefined) {
        this.coords.x++;
      } else {
        this.coords.x += a;
      };

      return this;
    },

    goLeft(a) {
      if (a < 1) {
        this.coords.x += 0;
      } else if (a === undefined) {
        this.coords.x--;
      } else {
        this.coords.x -= a;
      };

      return this;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },
  };

  /* Adding variables to the object Robot  */
  robot.name = name;
  robot['chip version'] = version;
  robot.wheels = wheels;

  robot.coords = {
    x: 0,
    y: 0,
  };

  return robot;
}

module.exports = makeRobot;
