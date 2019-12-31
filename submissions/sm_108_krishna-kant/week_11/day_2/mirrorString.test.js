const { mirrorString } = require('./mirrorString');

describe('test cases for reverse string', () => {
  test('reverString exists', () => {
    expect(mirrorString).toBeDefined();
  });

  test('reverse of AyzB is ZbaY', () => {
    expect(mirrorString('AyzB')).toBe('ZbaY');
  });

  test('reverse of abc is zyx', () => {
    expect(mirrorString('abc')).toBe('zyx');
  });

  test('reverse of AyzB is ZbaY', () => {
    expect(mirrorString('AyzB')).toEqual('ZbaY');
  });

  test('reverse of XDXDXDXD is CVCVCVCV', () => {
    expect(mirrorString('XDXDXDXD')).toEqual('CWCWCWCW');
  });

  test('reverse of aaaaaAyzBbbbbbbbbbbb is zzzzzZbaYyyyyyyyyyyy', () => {
    expect(mirrorString('aaaaaAyzBbbbbbbbbbbb')).toBe('zzzzzZbaYyyyyyyyyyyy');
  });

  test('reverse of AzxYb__ extra spaces is ZacBy', () => {
    expect(mirrorString('AzxYb  ')).toBe('ZacBy');
  });

  test('String must not contain number ', () => {
    expect(mirrorString('AzxYb23')).toBeFalsy();
  });

  test('Must not be an empty string ', () => {
    expect(mirrorString('')).toBeNull();
  });

  test('Must be a string', () => {
    expect(mirrorString('hello')).not.toBe('number');
  });
});
