return `name: ${name}, chip version: ${version}, wheels: ${wheels}`;
},

get location() {
  return `${name}: x=${this.coords.x}, y=${this.coords.y}`;
},

evacuate() {
  this.coords.x = 1400;
  this.coords.y = 500;
},

goForward(step = 1) {
  if (step > 0) {
    this.coords.y += step;
  }

  return robot;
},

goBack(step = 1) {
  if (step > 0) {
    this.coords.y -= step;
  }

  return robot;
},

goRight(step = 1) {
  if (step > 0) {
    this.coords.x += step;
  }

  return robot;
},

goLeft(step = 1) {
  if (step > 0) {
    this.coords.x -= step;
  }

  return robot;
},
};

return robot;
}

module.exports = makeRobot;
