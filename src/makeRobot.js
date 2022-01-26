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
 * * Mate Robot Factory вражені вашим успіхом, вони готові прийняти
 * Ви в технічній команді, ви навчитеся програмувати роботів разом
 * з командою! Ви займаєтесь бізнесом Як тестове завдання вам знадобиться
 * програмуйте наше обладнання, яке робить роботів.
 *
 * Створіть функцію makeRobot, яка приймає назву рядка та число
 * колеса, версія і повертає об'єкт робота.
 * Робот, який сходить з конвеєра, повинен вміти:
 * - Надайте інформацію про себе за допомогою отримання інформації.
 * robot.info === 'name:%name%, версія мікросхеми: %version%, колеса: %wheels%'
 * - Надайте координати свого місцезнаходження через місцезнаходження.
 * robot.location === '%name%: x=14, y=21'
 * — Є методи для переміщення goForward, goBack, goRight, goLeft.
 * - Методи пересування повинні мати можливість використовуватися з ланцюгом.
 * robot.goForward().goForward().goForward().goLeft()
 * - Методи за замовчуванням, які переміщують роботу на 1 в правильному
 * напрямку.
 * Це значення можна збільшити, передавши потрібне число в метод.
 * Від'ємні числа не повинні впливати на розташування робота. goLeft(3)
 * - Координати робота повинні зберігатися в координатах об'єкта,
 * клавіші x і y всередині робота.
 * - Робот повинен мати можливість запросити евакуацію robot.evacuate(),
 * який викличе рятувальників і передасть до сервісного центру
 * за координатами x: 1400, y: 500.
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
 * @return {object}
 */
function makeRobot(name, wheels, version) {
  return {
    name,
    wheels,
    version,
    info: `name: ${name}, chip version: ${version}, wheels: ${wheels}`,
    location: name + ': x=0, y=0',
    coords: {
      x: 0,
      y: 0,
    },
    _setLocation,
    _goRobot,
    evacuate,
    goForward: function(n = 1) {
      return this._goRobot(0, n < 0 ? 0 : n);
    },
    goBack: function(n = 1) {
      return this._goRobot(0, n < 0 ? 0 : -n);
    },
    goLeft: function(n = 1) {
      return this._goRobot(n < 0 ? 0 : -n, 0);
    },
    goRight: function(n = 1) {
      return this._goRobot(n < 0 ? 0 : n, 0);
    },
  };

  function _setLocation() {
    this.location = `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
  }

  function _goRobot(x, y) {
    this.coords.x += x;
    this.coords.y += y;
    this._setLocation();

    return this;
  }

  function evacuate() {
    this.coords.x = 1400;
    this.coords.y = 500;
    this._setLocation();

    return this.coords;
  }
}

module.exports = makeRobot;
