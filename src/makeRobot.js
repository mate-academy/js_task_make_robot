'use strict';

/**
* Фабрика роботів -матерів, вражена вашим успіхом, вони готові прийняти
 * Ви в команді з технологій, ви навчитесь програмувати роботів разом
 * З командою!Ви в бізнесі як тестове завдання, вам потрібно буде
 * Програмуйте наше обладнання, яке робить роботів.
 *
 * Створіть функцію Makerobot, яка приймає ім'я рядка та номер
 * Колеса, версія та повертає об'єкт робота.
 * Робот, що виходить з конвеєра, повинен мати можливість:
 * - Надайте інформацію про себе за допомогою інформації про Getter.
 * robot.info === 'Ім'я:%Ім'я%, версія чіпа:%Версія%, Колеса:%Колеса%'
 * - Надайте координати вашого місцезнаходження через місцезнаходження Getter.
 * robot.location === '%ім'я%: x = 14, y = 21'
 * - Майте методи переміщення Goforward, Doback, Goright, Goleft.
 * - Методи руху повинні бути використані за допомогою ланцюга.
 * robot.goforward (). goforward (). goforward (). goleft ()
 * - Методи за замовчуванням, які переміщують роботу на 1 у
 * nправильному напрямку.
 * Це значення можна збільшити, передаючи бажане число до методу.
 * Негативні числа не повинні впливати на розташування робота.Goleft (3)
 * - Координати робота повинні зберігатися в коордах об'єкта,
 * Клавіші x і y всередині робота.
 * - Робот повинен мати можливість вимагати евакуації роботів.EVACAUT (),
 * який зателефонує рятувальникам та перенесе його до сервісного центру
 * На координатах x: 1400, y: 500.
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
  // write code here
  const coords = {
    x: 0,
    y: 0,
  };

  const robot = {
    info: `name: ${name}, chip version: ${version}, wheels: ${wheels}`,
    get location() {
      return `${name}: x=${coords.x}, y=${coords.y}`;
    },
    get coords() {
      return { ...coords };
    },
    goForward(distance = 1) {
      if (distance > 0) {
        coords.y += distance;
      }

      return this;
    },
    goBack(distance = 1) {
      if (distance > 0) {
        coords.y -= distance;
      }

      return this;
    },
    goRight(distance = 1) {
      if (distance > 0) {
        coords.x += distance;
      }

      return this;
    },
    goLeft(distance = 1) {
      if (distance > 0) {
        coords.x -= distance;
      }

      return this;
    },
    evacuate() {
      coords.x = 1400;
      coords.y = 500;

      return this;
    },
  };

  return robot;
}

module.exports = makeRobot;
