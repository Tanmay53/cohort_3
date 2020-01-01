const { findCountDuplicates } = require('./findCountDuplicates');

const error = {
  message: 'target not present'
};

const typeError = {
  message: 'argument first must be an array'
};

describe('Test Cases for Find Count Duplicates', () => {
  test('Function Should Be defined', () => {
    expect(findCountDuplicates).toBeDefined();
  });

  test('Function Should Return [1,2,3,4,5,5,5,5,4] , 5', () => {
    expect(findCountDuplicates([1, 2, 3, 4, 5, 5, 5, 5, 4], 5)).toBe(4);
  });
  test('Function Should Return [5] , 5', () => {
    expect(findCountDuplicates([5], 5)).toBe(1);
  });
  test('Function Should Return [a,b] , a', () => {
    expect(findCountDuplicates(['a', 'b'], 'a')).toBe(1);
  });
  test('Function should return [2,3,4,5,5,5,6,5,5,6] , 6', () => {
    expect(findCountDuplicates([2, 3, 4, 5, 5, 5, 6, 5, 5, 6], 6)).toEqual(2);
  });

  test('Function Should Return [1,2,3,4,5,5,5,5,4] , 7', () => {
    expect(findCountDuplicates([1, 2, 3, 4, 5, 5, 5, 5, 4], 7)).toBeFalsy();
  });

  test('Function should return false missing array  , 7', () => {
    expect(findCountDuplicates(undefined, 7)).toBeFalsy();
  });

  test('Function must return an object with message in case target not passed', () => {
    expect(findCountDuplicates([2, 4, 5])).toEqual(error);
  });

  test('Function must return object message saying type error in case array is not passed', () => {
    expect(findCountDuplicates(7, [2, 4, 5])).toEqual(typeError);
  });

  test('Both argument missing will return false', () => {
    expect(findCountDuplicates()).toBeFalsy();
  });
});
