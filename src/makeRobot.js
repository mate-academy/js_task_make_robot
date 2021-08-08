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
 *  - 1.Provide information about yourself through getter info.
 *    2.robot.info === 'name:%name%, chip version: %version%, wheels: %wheels%'
 *  - 3.Provide the coordinates of your location via getter location.
 *    4.robot.location === '%name%: x=14, y=21'
 *  - 5.Have methods to move goForward, goBack, goRight, goLeft.
 *  - 6.Movement methods must be able to be used with a chain.
 *    7.robot.goForward().goForward().goForward().goLeft()
 *  - 8.Default methods that move the work by 1 in the right direction.
 *    9.This value can be increased by passing the desired number to the method.
 *    10.Negative numbers should not affect the location of the robot. goLeft(3)
 *  - 11.The coordinates of the robot must be stored in the object coords,
 *    12.the keys x and y inside the robot.
 *  - 13.The robot must be able to request the evacuation of robot.evacuate(),
 *    14.which will call rescuers and transfer it to the service center
 *    15.at the coordinates x: 1400, y: 500.
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
  const robot = {
    name: name,
    wheels: wheels,
    version: version,

    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      return 'name: '
      + this.name + ', '
      + 'chip version: '
      + this.version + ', '
      + 'wheels: '
      + this.wheels;
    },

    get location() {
      return this.name + ': '
      + 'x=' + this.coords.x + ', '
      + 'y=' + this.coords.y;
    },

    goForward(step = 1) {
      if (step > 0) {
        this.coords.y += step;
      }

      return this;
    },

    goBack(step = 1) {
      if (step > 0) {
        this.coords.y -= step;
      }

      return this;
    },

    goRight(step = 1) {
      if (step > 0) {
        this.coords.x += step;
      }

      return this;
    },

    goLeft(step = 1) {
      if (step > 0) {
        this.coords.x -= step;
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
