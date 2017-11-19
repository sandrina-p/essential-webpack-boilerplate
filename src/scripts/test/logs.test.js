import * as logs from '../logs';

describe('test logWorld()', () => {
  test('with a number expect to return its square', () => {
    expect(logs.logSquare(3)).toBe(27);
  });

  test('with not a number string expect to return false', () => {
    expect(logs.logSquare('3')).toBe(false);
  });


  test('without a parameter expect to return false', () => {
    expect(logs.logSquare()).toBe(false);
  });
});

describe('test logWorld()', () => {
  test('return greeting sentence', () => {
    expect(logs.logWorld('Sandrina')).toMatchSnapshot();
  });
});
