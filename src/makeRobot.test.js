'use strict';
/* global require, describe, it, expect */

const makeRobot = require('./makeRobot');

describe('sum', () => {
  it('You should return created robot in your function', function() {
    const robot = makeRobot('Joy', 5, 31);

    expect(robot).toBeInstanceOf(Object);
  });

  it('Robot must be able to give info', function() {
    const robot = makeRobot('Joy', 5, 31);

    const actual = robot.info;
    const expected = 'name: Joy, chip version: 31, wheels: 5';

    expect(actual).toBe(expected);
  });

  it('Robot must be able to give location (default: 0 0)', function() {
    const robot = makeRobot('Joy', 5, 31);

    const actual = robot.location;
    const expected = 'Joy: x=0, y=0';

    expect(actual).toBe(expected);
  });

  it('Robot must have the ability to move '
  + '(goBack, goForward, goLeft, goRight)', function() {
    const robot = makeRobot('Joy', 5, 31);

    expect(robot.goRight).toBeInstanceOf(Function);
    expect(robot.goLeft).toBeInstanceOf(Function);
    expect(robot.goBack).toBeInstanceOf(Function);
    expect(robot.goForward).toBeInstanceOf(Function);
  });

  it('Robot must have the ability to move several times '
    + '(goBack, goForward, goLeft, goRight)', function() {
    const robot = makeRobot('Joy', 5, 31);

    expect(robot.goRight()).toBe(robot);
    expect(robot.goLeft()).toBe(robot);
    expect(robot.goBack()).toBe(robot);
    expect(robot.goForward()).toBe(robot);
  });

  it('When the robot moves back, his coordinates must change.', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.goBack();

    const actual = robot.location;
    const expected = 'Joy: x=0, y=-1';

    expect(actual).toBe(expected);
  });

  it('When the robot moves forward, his coordinates must change.', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.goForward();

    const actual = robot.location;
    const expected = 'Joy: x=0, y=1';

    expect(actual).toBe(expected);
  });

  it('When the robot moves left, his coordinates must change.', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.goLeft();

    const actual = robot.location;
    const expected = 'Joy: x=-1, y=0';

    expect(actual).toBe(expected);
  });

  it('When the robot moves right, his coordinates must change.', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.goRight();

    const actual = robot.location;
    const expected = 'Joy: x=1, y=0';

    expect(actual).toBe(expected);
  });

  it('Robot\'s moves forward could be increased.', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.goForward(2);

    const actual = robot.location;
    const expected = 'Joy: x=0, y=2';

    expect(actual).toBe(expected);
  });

  it('Robot\'s moves back could be increased.', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.goBack(2);

    const actual = robot.location;
    const expected = 'Joy: x=0, y=-2';

    expect(actual).toBe(expected);
  });

  it('Robot\'s moves left could be increased.', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.goLeft(2);

    const actual = robot.location;
    const expected = 'Joy: x=-2, y=0';

    expect(actual).toBe(expected);
  });

  it('Robot\'s coordinates must be '
    + 'saved in the robot in coords property with x and y keys', function() {
    const robot = makeRobot('Joy', 5, 31);

    const actual = robot.coords;
    const expected = {
      x: 0, y: 0,
    };

    expect(actual).toEqual(expected);
  });

  it('Robot must be able to request an evacuation', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.evacuate();

    const actual = robot.coords;
    const expected = {
      x: 1400, y: 500,
    };

    expect(actual).toEqual(expected);
  });
});
