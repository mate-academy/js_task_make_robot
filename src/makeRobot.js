'use strict';

function makeRobot(name, wheels, version) {
  const x = 0;
  const y = 0;

  const robot = {
    name: name,
    wheels: wheels,
    version: version,
    coords: {
      x: x,
      y: y,
    },

    get info() {
      return (`name: ${name}, chip version: ${version}, wheels: ${wheels}`);
    },

    get location() {
      return (`${this.name}: x=${this.coords.x}, y=${this.coords.y}`);
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
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

  };

  return robot;
}

module.exports = makeRobot;
