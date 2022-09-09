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

//   - I used one external function
//   |-- to check and calculate all the values
//   |-- from each of go<SOMEWHERE>() methods
//   |-- in one place and make the robot obj
//   |-- more compact and readable:

function moveRobot(action, axis, step) {
  // | s var is used to not assign
  // |-- the function parameter.
  let s = step;

  if (!step) {
    s = 1;
  } else if (step < 0) {
    return;
  }

  if (action === '+') {
    this.coords[axis] += s;
  } else if (action === '-') {
    this.coords[axis] -= s;
  }

  return this.coords;
}

// - And here is the main makeRobot() function
// |-- with all of the robot methods.

function makeRobot(name, wheels, version) {
  const robot = {
    name,
    wheels,
    version,
    coords: {
      'x': 0,
      'y': 0,
    },
    get info() {
      return `name: ${this.name}, `
        + `chip version: ${this.version}, `
        + `wheels: ${this.wheels}`;
    },
    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },
    move: moveRobot,
    evacuate() {
      this.coords.y = 500;
      this.coords.x = 1400;

      return this;
    },
    goForward(n) {
      this.move('+', 'y', n);

      return this;
    },
    goBack(n) {
      this.move('-', 'y', n);

      return this;
    },
    goRight(n) {
      this.move('+', 'x', n);

      return this;
    },
    goLeft(n) {
      this.move('-', 'x', n);

      return this;
    },
  };

  return robot;
}

module.exports = makeRobot;
