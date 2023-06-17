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
    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },
    get info() {
      const infoName = `name: ${this.name}`;
      const infoChipVersion = `chip version: ${this.version}`;
      const infoWheels = `wheels: ${this.wheels}`;

      return `${infoName}, ${infoChipVersion}, ${infoWheels}`;
    },
    goForward(distance = 1) {
      if (distance > 0) {
        this.coords.y += distance;
      }

      return this;
    },
    goBack(distance = 1) {
      if (distance > 0) {
        this.coords.y -= distance;
      }

      return this;
    },
    goRight(distance = 1) {
      if (distance > 0) {
        this.coords.x += distance;
      }

      return this;
    },
    goLeft(distance = 1) {
      if (distance > 0) {
        this.coords.x -= distance;
      }

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
