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
 * Функція makeRobot створює об'єкт робота
 * на основі переданих параметрів: рядка name,
 * числа wheels і version. Робот, що з'являється
 * з лінії збірки, повинен мати такі можливості:

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
Надавати інформацію про себе за допомогою геттера info.
robot.info === 'name:%name%, chip version: %version%, wheels: %wheels%'
Надавати координати свого розташування за допомогою геттера location.
robot.location === '%name%: x=14, y=21'
Мати методи для руху goForward, goBack, goRight та goLeft.
Методи руху повинні бути використані як ланцюжок.
robot.goForward().goForward().goForward().goLeft()
За замовчуванням рухатися на 1 одиницю в правильному напрямку.
Значення можна збільшити, передаючи потрібне число у метод.
Від'ємні числа не повинні впливати на розташування робота. goLeft(3)
Координати робота повинні зберігатись у об'єкті coords з ключами x та y.
Робот повинен мати можливість запросити
евакуацію за допомогою robot.evacuate(),
що викличе службу порятунку і переведе його до сервісного центру
за координатами x: 1400, y: 500.
 */
function makeRobot(name, wheels, version) {
  const robot = {
    name,
    wheels,
    version,
    x: 0,
    y: 0,

    // #region GETs

    get info() {
      return (
        `name: ${this.name}, `
        + `chip version: ${this.version}, `
        + `wheels: ${this.wheels}`
      );
    },

    get location() {
      return `${this.name}: x=${this.x}, y=${this.y}`;
    },

    get coords() {
      return {
        x: this.x,
        y: this.y,
      };
    },

    // #endregion

    // #region functions

    evacuate() {
      this.x = 1400;
      this.y = 500;
    },

    goForward(moves = 1) {
      this.y += moves > 0 ? moves : 0;

      return this;
    },

    goBack(moves = 1) {
      this.y -= moves > 0 ? moves : 0;

      return this;
    },

    goRight(moves = 1) {
      this.x += moves > 0 ? moves : 0;

      return this;
    },

    goLeft(moves = 1) {
      this.x -= moves > 0 ? moves : 0;

      return this;
    },

    // #endregion
  };

  return robot;
}

module.exports = makeRobot;
