'use strict';

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

  it('When the robot moves, his coordinates must change.', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.goBack().goForward().goForward().goLeft().goLeft().goRight();

    const actual = robot.location;
    const expected = 'Joy: x=-1, y=1';

    expect(actual).toBe(expected);
  });

  it('Robot\'s moves must be able to pass step value', function() {
    const robot = makeRobot('Joy', 5, 31);

    robot.goBack(3).goForward(7).goForward(2).goLeft(3).goLeft(7).goRight();

    const actual = robot.location;
    const expected = 'Joy: x=-9, y=6';

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
