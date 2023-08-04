'use strict';

/**
 * Робот должен уметь:
 * 1) Provide information about yourself through getter info
 *  Предоставлять информацию о себе через getter
 *    robot.info === 'name:%name%, chip version: %version%, wheels: %wheels%'
 *  2) Provide the coordinates of your location via getter location.
 *    robot.location === '%name%: x=14, y=21'
 *  3) Have methods to move goForward, goBack, goRight, goLeft.
 * имеет методы для перемещения
 * 4) Movement methods must be able to be used with a chain.
 * Методы движения должны быть пригодны для использования с цепью.
 *    robot.goForward().goForward().goForward().goLeft()
 * 5) Default methods that move the work by 1 in the right direction.
 * Методы по умолчанию, те которые перемещают работу
 *  на 1 в правильном направлении
 * 6)  This value can be increased by passing the desired number to the method
 * Это значение можно увеличить, передав методу нужное число
 * 7)  Negative numbers should not affect the location of the robot. goLeft(3)
 * Отрицательные числа не должны влиять на местоположение робота
 * 8) The coordinates of the robot must be stored in the object coords,
 *    the keys x and y inside the robot. Координаты робота должны храниться
 *    в координатах объекта, клавиши x и y внутри робота.
 * 9) The robot must be able to request the evacuation of robot.evacuate(),
 * Робот должен иметь возможность запрашивать эвакуацию
 *    which will call rescuers and transfer it to the service center
 *    at the coordinates x: 1400, y: 500 (по данным координнатам).
 *
 * @typedef {object} Robot
 * @property {string} name
 * @property {number} wheels
 * @property {number} version
 * @property {function} info
 *
 * @param {string} name
 * @param {number} wheels
 * @param {number} version
 *
 * @return {Robot}
 */
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
      return `name: ${this.name}, chip version: ${this.version}`
      + `, wheels: ${this.wheels}`;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goForward(dir = 1) {
      if (dir > 0) {
        this.coords.y += dir;
      }

      return this;
    },

    goBack(dir = 1) {
      if (dir > 0) {
        this.coords.y -= dir;
      }

      return this;
    },

    goRight(dir = 1) {
      if (dir > 0) {
        this.coords.x += dir;
      }

      return this;
    },

    goLeft(dir = 1) {
      if (dir > 0) {
        this.coords.x -= dir;
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
