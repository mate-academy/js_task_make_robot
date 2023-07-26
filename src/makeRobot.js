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
  };

  Object.defineProperties(robot, {
    info: {
      get() {
        return (`name: ${this.name}, chip version: ${this.version}, `
               + `wheels: ${this.wheels}`).trim();
      },
    },

    location: {
      get() {
        return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
      },
    },

    goForward: {
      value(step = 1) {
        if (step > 0) {
          this.coords.y += step;
        }

        return this;
      },
    },

    goBack: {
      value(step = 1) {
        if (step > 0) {
          this.coords.y -= step;
        }

        return this;
      },
    },

    goRight: {
      value(step = 1) {
        if (step > 0) {
          this.coords.x += step;
        }

        return this;
      },
    },

    goLeft: {
      value(step = 1) {
        if (step > 0) {
          this.coords.x -= step;
        }

        return this;
      },
    },

    evacuate: {
      value() {
        this.coords.x = 1400;
        this.coords.y = 500;
      },
    },
  });

  return robot;
}

module.exports = makeRobot;
