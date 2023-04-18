'use strict';

/**
 * Mate Robot Factory impressed by your success, they are ready to accept
 * you into the Tech team, you will learn to program robots together
 * with the team! Are you in business As a test task, you will need to
 * program our equipment that makes robots.
 *
 * Create a makeRobot function that takes the string name and the number
 * wheels, version and returns the robot object.
 * The robot coming off the assembly line must be able to:
 *  - Provide information about yourself through getter info.
 *    robot.info === 'name:%name%, chip version: %version%, wheels: %wheels%'
 *  - Provide the coordinates of your location via getter location.
 *    robot.location === '%name%: x=14, y=21'
 *  - Have methods to move goForward, goBack, goRight, goLeft.
 *  - Movement methods must be able to be used with a chain.
 *    robot.goForward().goForward().goForward().goLeft()
 *  - Default methods that move the work by 1 in the right direction.
 *    This value can be increased by passing the desired number to the method.
 *    Negative numbers should not affect the location of the robot. goLeft(3)
 *  - The coordinates of the robot must be stored in the object coords,
 *    the keys x and y inside the robot.
 *  - The robot must be able to request the evacuation of robot.evacuate(),
 *    which will call rescuers and transfer it to the service center
 *    at the coordinates x: 1400, y: 500.
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
  // Создаем объект робота с помощью метода Object.create()
  const robot = Object.create(Object.prototype, {
    name: { value: name },
    wheels: { value: wheels },
    version: { value: version },
    coords: { value: {
      x: 0, y: 0,
    } },
  });

  // Добавляем геттер для информации о роботе
  Object.defineProperty(robot, 'info', {
    get() {
      const nameS = `name: ${this.name}`;

      return `${nameS}, chip version: ${this.version}, wheels: ${this.wheels}`;
    },
  });

  // Добавляем геттер для координат робота
  Object.defineProperty(robot, 'location', {
    get() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },
  });

  // Добавляем методы для перемещения робота
  robot.goForward = function(steps = 1) {
    if (steps > 0) {
      this.coords.y += steps;
    }

    return this; // для цепочки вызовов
  };

  robot.goBack = function(steps = 1) {
    if (steps > 0) {
      this.coords.y -= steps;
    }

    return this;
  };

  robot.goRight = function(steps = 1) {
    if (steps > 0) {
      this.coords.x += steps;
    }

    return this;
  };

  robot.goLeft = function(steps = 1) {
    if (steps > 0) {
      this.coords.x -= steps;
    }

    return this;
  };

  // Добавляем метод для запроса эвакуации робота
  robot.evacuate = function() {
    this.coords.x = 1400;
    this.coords.y = 500;
  };

  // Возвращаем объект робота из функции
  return robot;
}

// // Создаем нового робота с помощью функции makeRobot()
// const r2d2 = makeRobot('R2D2', 4, 3);

// // Проверяем информацию и координаты робота
// console.log(r2d2.info); // name:R2D2, chip version:3 , wheels:4
// console.log(r2d2.location); // R2D2:x=0 , y=0

// // Перемещаем робота по координатам
// r2d2.goForward(5).goRight(3).goBack(4).goLeft(6);

// // Проверяем координаты робота после перемещения
// console.log(r2d2.location); // R2D2:x=-3 , y=1

// // Запрашиваем эвакуацию робота
// r2d2.evacuate();

// // Проверяем координаты робота после эвакуации
// console.log(r2d2.location); // R2D2:x=1400 , y=500

module.exports = makeRobot;
