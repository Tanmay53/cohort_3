const { arrayDifference } = require('./arrayDifference');

describe('test cases for Array Difference Method', () => {
  test('should be defined', () => {
    expect(arrayDifference).toBeDefined();
  });

  test('difference of [2, 5, 9, 6, 7, 55, 13, 66, 5] , [12, 55, 4, 6, 7, 13, 66, 12] is to be  [ 4, 12 ]', () => {
    expect(
      arrayDifference(
        [2, 5, 9, 6, 7, 55, 13, 66, 5],
        [12, 55, 4, 6, 7, 13, 66, 12]
      )
    ).toEqual([4, 12]);
  });

  test('difference of [0] , [0] is to be  []', () => {
    expect(arrayDifference([0], [0])).toEqual([]);
  });

  test('difference of [0] , [1] is to be [1]', () => {
    expect(arrayDifference([0], [1])).toEqual([1]);
  });

  test('difference of [0,1,2,3] and [0,2] is to []', () => {
    expect(arrayDifference([0, 1, 2, 3], [0, 2])).toEqual([]);
  });

  test('difference of [a,z,s,v] and [b,a] is to []', () => {
    expect(arrayDifference(['a', 'z', 's', 'v'], ['b', 'a'])).toEqual(['b']);
  });

  test('Must work on different types of values', () => {
    expect(arrayDifference([2, 4, 'z', 's', 'v'], [5, 'b', 'a'])).toEqual([
      5,
      'b',
      'a'
    ]);
  });

  test('must use defalut value in case of one missing aurguments ', () => {
    expect(arrayDifference([])).toEqual([]);
  });

  test('must use defalut value in case of both missing aurguments ', () => {
    expect(arrayDifference()).toEqual([]);
  });

  test('argument must be array values', () => {
    expect(arrayDifference('dfhd', 'saa')).toBeFalsy();
  });
});
