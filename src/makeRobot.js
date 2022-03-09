'use strict';

function makeRobot(name, wheels, version) {
  const robot = {
    name,
    wheels,
    version,
    x: 0,
    y: 0,

    get info() {
      return `name: ${this.name}, `
        + `chip version: ${this.version}, `
        + `wheels: ${this.wheels}`;
    },

    get coords() {
      return {
        x: this.x,
        y: this.y,
      };
    },

    get location() {
      return `${name}: x=${this.x}, y=${this.y}`;
    },

    evacuate() {
      this.x = 1400;
      this.y = 500;

      return this.coords;
    },

    goForward(value = 1) {
      if (value > 0) {
        this.y += value;
      }

      return this;
    },

    goBack(value = 1) {
      if (value > 0) {
        this.y -= value;
      }

      return this;
    },

    goRight(value = 1) {
      if (value > 0) {
        this.x += value;
      }

      return this;
    },

    goLeft(value = 1) {
      if (value > 0) {
        this.x -= value;
      }

      return this;
    },
  };

  return robot;
}

module.exports = makeRobot;
