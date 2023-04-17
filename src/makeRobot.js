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
  const obj = {
    name: name,
    'chip version': version,
    wheels: wheels,
    coord: {
      x: 0,
      y: 0,
    },

    get info() {
      const namee = this.name;
      const wheelse = this.wheels;
      const chip = 'chip version';

      return `name: ${namee}, chip version: ${this[chip]}, wheels: ${wheelse}`;
    },

    get location() {
      return `${this.name}: x=${this.coord.x}, y=${this.coord.y}`;
    },

    get coords() {
      return (this.coord);
    },

    goForward: function(step = 1) {
      if (step >= 0) {
        this.coord.y = this.coord.y + step;
      }

      return obj;
    },

    goBack: function(step = 1) {
      if (step > 0) {
        this.coord.y = this.coord.y - step;
      }

      return obj;
    },

    goRight: function(step = 1) {
      if (step > 0) {
        this.coord.x = this.coord.x + step;
      }

      return obj;
    },

    goLeft: function(step = 1) {
      if (step > 0) {
        this.coord.x = this.coord.x - step;
      }

      return obj;
    },

    evacuate: function() {
      this.coord.x = 1400;
      this.coord.y = 500;
    },
  };

  return obj;
}

module.exports = makeRobot;
