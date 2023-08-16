/* eslint-disable max-len */

'use strict';

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
      return (
        'name: ' + this.name
        + ', chip version: ' + this.version
        + ', wheels: ' + this.wheels
      );
    },
    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },
    goForward(steps = 1) {
      if (steps >= 0) {
        this.coords.y += steps;
      }

      return this;
    },
    goBack(steps = 1) {
      if (steps >= 0) {
        this.coords.y -= steps;
      }

      return this;
    },
    goRight(steps = 1) {
      if (steps >= 0) {
        this.coords.x += steps;
      }

      return this;
    },
    goLeft(steps = 1) {
      if (steps >= 0) {
        this.coords.x -= steps;
      }

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
