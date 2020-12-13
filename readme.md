# Make Robot Factory

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**


function makeRobot(name, wheels, version) {
  return {
    name,
    wheels,
    version,
    _x: 0,
    _y: 0,

    set x(value) {
      this._x = value;
    },

    set y(value) {
      this._y = value;
    },

    get x() {
      return this._x;
    },

    get y() {
      return this._y;
    },

    goForward(y = 1) {
      if (y < 0) {
        return this;
      }
      this.y += y;

      return this;
    },

    goBack(y = 1) {
      if (y < 0) {
        return this;
      }
      this.y -= y;

      return this;
    },

    goRight(x = 1) {
      if (x < 0) {
        return this;
      }
      this.x += x;

      return this;
    },

    goLeft(x = 1) {
      if (x < 0) {
        return this;
      }
      this.x -= x;

      return this;
    },

    evacuate() {
      this.x = 1400;
      this.y = 500;

      return this;
    },

    get coords() {
      return {
        x: this.x,
        y: this.y,
      };
    },

    get location() {
      return `${this.name}: x=${this.x}, y=${this.y}`;
    },

    get info() {
      return `name: ${this.name}, chip version: ${this.version},`
              + ` wheels: ${this.wheels}`;
    },
  };
}
