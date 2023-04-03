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

 * Создать функцию MakeroBot, которая принимает имя строки и номер
 * Колеса, версия и возвращает объект робота.
 * Робот, выходящий из сборочной линии, должен иметь возможность:
 * - Предоставьте информацию о себе через информацию о Getter.
 * robot.info === 'Имя:%Имя%, Чип Версия:%Версия%, Колеса:%колеса%'
 * - Предоставьте координаты вашего местоположения через местоположение Getter.
 * robot.location === '%Имя%: x = 14, y = 21'
 * - Имейте методы для перемещения GoForward, Goback, Goright, Goleft.
 * - Методы движения должны использоваться с цепью.
 * robot.goforward (). goforward (). goforward (). goleft ()
 * - Методы по умолчанию, которые перемещают работу
 * на 1 в правильном направлении.
 * Это значение может быть увеличено путем передачи желаемого числа методу.
 * Отрицательные числа не должны влиять на местоположение робота.Goleft (3)
 * - Координаты робота должны храниться в координатах объекта,
 * Ключи x и y внутри робота.
 * - Робот должен иметь возможность запросить эвакуацию robot.evacuate (),
 * который позвонит спасателям и передает его в сервисный центр
 * В координатах x: 1400, y: 500.
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
      return `name: ${this.name}, `
      + `chip version: ${this.version}, wheels: ${this.wheels}`;
    },

    get location() {
      return `${name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goBack(value = 1) {
      if (value > 0) {
        this.coords.y -= value;
      }

      return this;
    },

    goForward(value = 1) {
      if (value > 0) {
        this.coords.y += value;
      }

      return this;
    },

    goLeft(value = 1) {
      if (value > 0) {
        this.coords.x -= value;
      }

      return this;
    },

    goRight(value = 1) {
      if (value > 0) {
        this.coords.x += value;
      }

      return this;
    },

    evacuate() {
      this.coords.y = 500;
      this.coords.x = 1400;
    },
  };

  return robot;
}
module.exports = makeRobot;
