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
 *
 *? Mate Robot Factory вражена вашим успіхом і готова прийняти вас до команди
 *? Tech, де ви будете навчатися програмувати роботів разом з командою! Ви
 *? готові *до цього? Як тестове завдання вам потрібно програмувати нашу
 *? обладнання, яке *створює роботів.
 *?
 *? Створіть функцію makeRobot, яка приймає рядок з іменем робота та кількість
 *? коліс, версію і повертає об'єкт робота.
 *
 *! Робот, який з'являється з лінії
 *! збірки, повинен мати такі можливості:
 *!
 *! Надавати інформацію про себе через геттер info.
 *! robot.info === 'name:%name%, chip version: %version%, wheels: %wheels%'
 *! Надавати координати свого місцезнаходження через геттер location.
 *! robot.location === '%name%: x=14, y=21'
 *! Мати методи для руху вперед, назад, праворуч та ліворуч.
 *! Методи руху повинні бути доступні для використання ланцюжком.
 *! robot.goForward().goForward().goForward().goLeft()
 *! За замовчуванням методи руху переміщують робота на 1 вправо.
 *! Значення може бути збільшено, передаючи бажану кількість до методу.
 *! Від'ємні числа не повинні впливати на місцезнаходження робота. goLeft(3)
 *! Координати робота повинні зберігатися в об'єкті coords,
 *! з ключами x та y всередині об'єкта робота.
 *! Робот повинен мати можливість запросити евакуацію robot.evacuate(),
 *! яка викличе рятувальників та переведе його до сервісного центру
 *! за координатами x: 1400, y: 500.
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

    get info() {
      return `name: ${name}, chip version: ${version}, wheels: ${wheels}`;
    },

    get location() {
      return `${name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    coords: {
      x: 0,
      y: 0,
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
    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },
  };

  return robot;
}

module.exports = makeRobot;
