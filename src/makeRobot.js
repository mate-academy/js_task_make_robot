'use strict';

/**
* Фабрика роботів -матерів, вражена вашим успіхом, вони готові прийняти
 * Ви в команді з технологій, ви навчитесь програмувати роботів разом
 * З командою! Ви в бізнесі як тестове завдання, вам потрібно буде
 * Програмуйте наше обладнання, яке робить роботів.
 *
 * Створіть функцію Makerobot, яка приймає ім'я рядка та номер
 * Колеса, версія та повертає об’єкт робота.
 * Робот, що виходить з конвеєра, повинен мати можливість:
 * - Надайте інформацію про себе за допомогою інформації про Getter.
 * robot.info === 'Ім'я:%Ім'я%, версія чіпа:%версії%, колеса:%колес%'
 * - Надайте координати вашого місцезнаходження через місцезнаходження Getter.
 * robot.location === '%ім'я%: x = 14, y = 21'
 * - Майте методи переміщення Goforward, Doback, Goright, Goleft.
 * - Методи руху повинні бути використані за допомогою ланцюга.
 * robot.goforward (). goforward (). goforward (). goleft ()
 * - Методи за замовчуванням, які переміщують роботу на
 * 1 у правильному напрямку.
 * Це значення можна збільшити, передаючи бажане число до методу.
 * Негативні числа не повинні впливати на розташування робота. Goleft (3)
 * - Координати робота повинні зберігатися в об'єктних коордах,
 * Клавіші x і y всередині робота.
 * - робот повинен мати можливість вимагати евакуації robot.evacate (),
 * який зателефонує рятувальникам та перенесе його до Центру обслуговування
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
  return {
    name,
    version,
    wheels,
    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      return `name: ${this.name}, `
      + `chip version: ${this.version}, `
      + `wheels: ${this.wheels}`;
    },

    get location() {
      return `${this.name}: `
      + `x=${this.coords.x}, `
      + `y=${this.coords.y}`;
    },

    goBack(step = 1) {
      if (step > 0) {
        this.coords.y -= step;
      };

      return this;
    },

    goForward(step = 1) {
      if (step > 0) {
        this.coords.y += step;
      };

      return this;
    },

    goLeft(step = 1) {
      if (step > 0) {
        this.coords.x -= step;
      };

      return this;
    },

    goRight(step = 1) {
      if (step > 0) {
        this.coords.x += step;
      };

      return this;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },

  };
}

module.exports = makeRobot;
