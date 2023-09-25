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
      return `name: ${this.name}, `
        + `chip version: ${this.version}, `
        + `wheels: ${this.wheels}`;
    },

    get coordinates() {
      return {
        x: this.coords.x,
        y: this.coords.y,
      };
    },

    get location() {
      return `${name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;

      return this.coords;
    },

    goForward(value = 1) {
      if (value > 0) {
        this.coords.y += value;
      }

      return this;
    },

    goBack(value = 1) {
      if (value > 0) {
        this.coords.y -= value;
      }

      return this;
    },

    goRight(value = 1) {
      if (value > 0) {
        this.coords.x += value;
      }

      return this;
    },

    goLeft(value = 1) {
      if (value > 0) {
        this.coords.x -= value;
      }

      return this;
    },
  };

  return robot;
}

module.exports = makeRobot;
