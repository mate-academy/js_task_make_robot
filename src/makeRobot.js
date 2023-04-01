'use strict';

function makeRobot(name, wheels, version) {
  const newRobot = {
    name,
    wheels,
    version,
    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      return `name: ${name}, chip version: ${version}, wheels: ${wheels}`;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goForward(distance = 1) {
      const actualDistance = distance < 0 ? 0 : distance;

      this.coords.y += actualDistance;

      return this;
    },

    goBack(distance = 1) {
      const actualDistance = distance < 0 ? 0 : distance;

      this.coords.y -= actualDistance;

      return this;
    },

    goRight(distance = 1) {
      const actualDistance = distance > 0 ? distance : 0;

      if (actualDistance >= 1) {
        this.coords.x += actualDistance;
      }

      return this;
    },

    goLeft(distance = 1) {
      const actualDistance = distance > 0 ? distance : 0;

      if (actualDistance >= 1) {
        this.coords.x -= actualDistance;
      }

      return this;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;

      return this;
    },

  };

  return newRobot;
}
module.exports = makeRobot;
