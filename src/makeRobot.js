'use strict';

/**
 * @typedef {object} Robot
 * @property {string} name
 * @property {number} wheels
 * @property {number} version
 * @property {function} info
 * @param {string} name
 * @param {number} wheels
 * @param {number} version
 * @return {object}
 */
function makeRobot(name, wheels, version) {
  const moveRobot = {
    x: 0,
    y: 0,
  };

  const robot = {
    name,
    wheels,
    version,
    moveRobot,

    info: `name: ${name}, chip version: ${version}, wheels: ${wheels}`,

    location: `${name}: x=${moveRobot.x}, y=${moveRobot.y}`,

    goRight(step = 1) {
      if (step < 1) {
        this.location = this.location;
      } else {
        this.location = `${name}: x=${moveRobot.x += step}, y=${moveRobot.y}`;
      }

      return robot;
    },

    goLeft(step = 1) {
      if (step < 1) {
        this.location = this.location;
      } else {
        this.location = `${name}: x=${moveRobot.x -= step}, y=${moveRobot.y}`;
      }

      return robot;
    },

    goBack(step = 1) {
      if (step < 1) {
        this.location = this.location;
      } else {
        this.location = `${name}: x=${moveRobot.x}, y=${moveRobot.y -= step}`;
      }

      return robot;
    },

    goForward(step = 1) {
      if (step < 1) {
        this.location = this.location;
      } else {
        this.location = `${name}: x=${moveRobot.x}, y=${moveRobot.y += step}`;
      }

      return robot;
    },

    evacuate() {
      moveRobot.x = 1400;
      moveRobot.y = 500;

      return moveRobot;
    },
  };

  return robot;
}

module.exports = makeRobot;
