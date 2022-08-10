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
      return `name: ${this.name},`
      + ` chip version: ${this.version},`
      + ` wheels: ${this.wheels}`;
    },

    get location() {
      return `${name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    // можно сделать метод и ифчики туда сложить
    goForward(step = 0) {
      if (step > 0) {
        this.coords.x++;
      }
    },

    goBack(step = 0) {
      if (step < 0) {
        this.coords.x--;
      }
    },

    goRight(step = 0) {
      if (step > 0) {
        this.coords.y++;
      }
    },

    goLeft(step = 0) {
      if (step < 0) {
        this.coords.y--;
      }
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },

  };

  return robot;
}

module.exports = makeRobot;

// Фабрика роботов Mate впечатлена вашим успехом, они готовы принять
//   вы в Техническую команду, вы научитесь программировать роботов вместе
//   с командой! Вы в деле? В качестве тестового задания вам нужно будет
//   запрограммировать наше оборудование, которое делает роботов.

//   Создайте функцию makeRobot, которая принимает имя строки и число
//   колеса, версия и возвращает объект робота.
//   Робот, сходящий с конвейера, должен уметь:
//   - Предоставить информацию о себе через геттерную информацию.
//   robot.info === 'name:%name%, версия чипа: %version%, колеса: %wheels%'
//   - Укажите координаты вашего местоположения через геттер.
//   robot.location === '%name%: x=14, y=21'
//  - Есть методы для перемещения goForward, goBack, goRight, goLeft.
//   - Методы движения должны быть пригодны для использования с цепью.
//   - Методы по умолчанию, которые перемещают работу
// на 1 в правильном направлении.
//   Это значение можно увеличить, передав методу нужное число.
//   Отрицательные числа не должны влиять на местоположение робота.
// иди налево(3)
//   - Координаты робота должны храниться в координатах объекта,
//   клавиши x и y внутри робота.
//   - Робот должен иметь возможность запрашивать эвакуацию robot.evacuate(),
//   который вызовет спасателей и передаст в сервисный центр
//   по координатам x:1400, y:500.
