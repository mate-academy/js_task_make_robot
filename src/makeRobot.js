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
  const robot = {
    name,
    wheels,
    version,
    coords: {
      x: 0,
      y: 0,
    },
    get info() {
      return `name: ${this.name},` + ` `
        + `chip version: ${this.version}, wheels: ${this.wheels}`;
    },
    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },
    goForward(move = 1) {
      if (move > 0) {
        this.coords.y += move;
      }

      return this;
    },
    goBack(move = 1) {
      if (move > 0) {
        this.coords.y -= move;
      }

      return this;
    },
    goRight(move = 1) {
      if (move > 0) {
        this.coords.x += move;
      }

      return this;
    },
    goLeft(move = 1) {
      if (move > 0) {
        this.coords.x -= move;
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
/* * Mate Robot Factory вражений вашим успіхом, вони готові прийняти
  * Ви в команду Tech, ви разом навчитеся програмувати роботів
  * з командою! Are you in business В якості тестового завдання вам знадобиться
  * програмувати наше обладнання, яке робить роботів.
  *
  * Створіть функцію makeRobot, яка приймає назву рядка та номер
  * , версія та повертає об'єкт робота.
  * Робот, що сходить з конвеєра, повинен уміти:
  * - Надайте інформацію про себе через getter info.
  * robot.info === 'name:%name%, версія мікросхеми: %version%, колеса: %wheels%'
  * - Надайте координати свого місцезнаходження через getter location.
  * robot.location === '%name%: x=14, y=21'
  * - Є методи для переміщення goForward, goBack, goRight, goLeft.
  * - Методи пересування повинні бути використані з ланцюгом.
  * robot.goForward().goForward().goForward().goLeft()
  * - Методи за замовчуванням, які переміщують роботу на 1 у прав напрямку.
  * Це значення можна збільшити, передавши потрібне число методу.
  * Від’ємні числа не повинні впливати на розташування робота. йти вліво (3)
  * - Координати робота повинні бути збережені в координатах об'єкта,
  * клавіші x і y всередині робота.
  * - Робот повинен мати можливість запитувати евакуацію robot.evacuate(),
  * який викличе рятувальників і передасть його в сервісний центр
  * в координатах x: 1400, y: 500. */
