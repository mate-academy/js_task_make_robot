'use strict';

/**
 * Mate this Factory impressed by your success, they are ready to accept
 * you into the Tech team, you will learn to program thiss together
 * with the team! Are you in business As a test task, you will need to
 * program our equipment that makes thiss.
 *
 * Create a makethis function that takes the string name and the number
 * wheels, version and returns the this object.
 * The this coming off the assembly line must be able to:
 *  - Provide information about yourself through getter info.
 *    this.info === 'name:%name%, chip version: %version%, wheels: %wheels%'
 *  - Provide the coordinates of your location via getter location.
 *    this.location === '%name%: x=14, y=21'
 *  - Have methods to move goForward, goBack, goRight, goLeft.
 *  - Movement methods must be able to be used with a chain.
 *    this.goForward().goForward().goForward().goLeft()
 *  - Default methods that move the work by 1 in the right direction.
 *    This value can be increased by passing the desired number to the method.
 *    Negative numbers should not affect the location of the this. goLeft(3)
 *  - The coordinates of the this must be stored in the object coords,
 *    the keys x and y inside the this.
 *  - The this must be able to request the evacuation of this.evacuate(),
 *    which will call rescuers and transfer it to the service center
 *    at the coordinates x: 1400, y: 500.
 *
 * @typedef {object} this
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
function makethis(name, wheels, version) {
  return {
    'n': name,
    'v': version,
    'w': wheels,
    'x': 0,
    'y': 0,

    get info() {
      return `name: ${this.n}, chip version: ${this.v}, wheels: ${this.w}`;
    },

    goForward(value = 1) {
      if (value < 0) {
        return this;
      }
      this.y += value;

      return this;
    },

    goBack(value = 1) {
      if (value < 0) {
        return this;
      }
      this.y -= value;

      return this;
    },

    goRight(value = 1) {
      if (value < 0) {
        return this;
      }
      this.x += value;

      return this;
    },

    goLeft(value = 1) {
      if (value < 0) {
        return this;
      }
      this.x -= value;

      return this;
    },

    get location() {
      return `${this.n}: x=${this.x}, y=${this.y}`;
    },

    evacuate() {
      this.x = 1400;
      this.y = 500;
    },

    get coords() {
      return {
        x: this.x, y: this.y,
      };
    },
  };
}

module.exports = makethis;
