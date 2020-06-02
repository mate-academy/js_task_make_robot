'use strict';

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
        + `chip version: ${this.version}, wheels: ${this.wheels}`;
    },
    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },
    goBack(back = 1) {
      this.coords.y -= back;

      return this;
    },
    goForward(forward = 1) {
      this.coords.y += forward;

      return this;
    },
    goLeft(left = 1) {
      this.coords.x -= left;

      return this;
    },
    goRight(right = 1) {
      this.coords.x += right;

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
