'use strict';

function makeRobot(name, wheels, version) {
  const SERVICE_CENTER = {
    x: 1400,
    y: 500,
  };

  const robot = {
    name,
    wheels,
    version,
    coords: {
      x: 0,
      y: 0,
    },

    move(coord = 'y', direction = '+', steps = 1) {
      if (steps > 0) {
        switch (direction) {
          case '+':
            this.coords[coord] += steps;
            break;
          case '-':
            this.coords[coord] -= steps;
            break;
          default:
            throw new Error('Unknown direction');
        }
      }
    },

    goForward(val) {
      this.move('y', '+', val);

      return this;
    },

    goBack(val) {
      this.move('y', '-', val);

      return this;
    },

    goRight(val) {
      this.move('x', '+', val);

      return this;
    },

    goLeft(val) {
      this.move('x', '-', val);

      return this;
    },

    evacuate() {
      this.coords.x = SERVICE_CENTER.x;
      this.coords.y = SERVICE_CENTER.y;

      return this;
    },

    get info() {
      return `name: ${
        this.name
      }, chip version: ${
        this.version
      }, wheels: ${
        this.wheels
      }`;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },
  };

  return robot;
}

module.exports = makeRobot;
