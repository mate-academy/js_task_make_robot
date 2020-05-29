'use strict';

//  * @typedef {object} Robot
//  * @property {string} name
//  * @property {number} wheels
//  * @property {number} version
//  * @property {function} info
//  *
//  * @param {string} name
//  * @param {number} wheels
//  * @param {number} version
//  *
//  * @return {object}
//  */

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
      return `name: ${this.name}, `
      + `chip version: ${this.version}, `
      + `wheels: ${this.wheels}`;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goForward: function(n = 1) {
      this.coords.y += n;

      return this;
    },
    goBack: function(n = 1) {
      this.coords.y -= n;

      return this;
    },
    goRight: function(n = 1) {
      this.coords.x += n;

      return this;
    },
    goLeft: function(n = 1) {
      this.coords.x -= n;

      return this;
    },

    evacuate: function() {
      this.coords.x = 1400;
      this.coords.y = 500;

      return this;
    },
  };

  return robot;
}

module.exports = makeRobot;
