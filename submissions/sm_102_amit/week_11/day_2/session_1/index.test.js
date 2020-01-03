const { mirrorImage } = require("./function/mirrorImage");
const { arrayDifference } = require("./function/arrayDifference");
const { findCountDuplicates } = require("./function/findCountDuplicates");

// mirror image test
describe("Test cases for `mirrorImage function`", () => {
  test("Does function exists?", () => {
    expect(mirrorImage).toBeDefined();
  });

  test("Output of `123` should be `Wrong Input!`", () => {
    expect(mirrorImage(123)).toBe("Wrong Input!");
  });

  test("Output of `AyzB` should be `ZbaY`", () => {
    expect(mirrorImage("AyzB")).toBe("ZbaY");
  });

  test("Output of `ahgQt` should be `zstJg`", () => {
    expect(mirrorImage("ahgQt")).toBe("zstJg");
  });

  test("Output of `PqnJ` should be `KjmQ`", () => {
    expect(mirrorImage("PqnJ")).toBe("KjmQ");
  });

  test("Output of `YYY` should be `BBB`", () => {
    expect(mirrorImage("YYY")).toBe("BBB");
  });

  test("Output of `FFhyEW` should be `UUsbVD`", () => {
    expect(mirrorImage("FFhyEW")).toBe("UUsbVD");
  });

  test("Output of `pqgy` should be `kjtb`", () => {
    expect(mirrorImage("pqgy")).toBe("kjtb");
  });

  test("Output of `FGUY` should be `UTFB`", () => {
    expect(mirrorImage("FGUY")).toBe("UTFB");
  });

  test("Output of `rtgfAS` should be `igtuZH`", () => {
    expect(mirrorImage("rtgfAS")).toBe("igtuZH");
  });

  test("Output of `AmiT` should be `ZnrG`", () => {
    expect(mirrorImage("AmiT")).toBe("ZnrG");
  });
});

// array difference test
describe("Test cases for `arrayDifference function`", () => {
  test("Does function exists?", () => {
    expect(arrayDifference).toBeDefined();
  });

  test("Array Difference of `[1, 2, 6, 3, 6, 3, 4, 5, 4] & [1, 2, 3, 4, 4]` should be `[6, 5]`", () => {
    let arr1 = [1, 2, 6, 3, 6, 3, 4, 5, 4];
    let arr2 = [1, 2, 3, 4, 4];
    let arr3 = [6, 5];
    expect(arrayDifference(arr1, arr2)).toEqual(arr3);
  });

  test("Array Difference of `[1, 2] & [1, 2, 3, 4, 4]` should be `Wrong Input!`", () => {
    let arr1 = [1, 2];
    let arr2 = [1, 2, 3, 4, 4];
    expect(arrayDifference(arr1, arr2)).toBe("Wrong Input!");
  });

  test("Array Difference of `['red', 'green', 'blue','yellow'] & ['red', 'green', 'blue']` should be `['yellow']`", () => {
    let arr1 = ["red", "green", "blue", "yellow"];
    let arr2 = ["red", "green", "blue"];
    let arr3 = ["yellow"];
    expect(arrayDifference(arr1, arr2)).toEqual(arr3);
  });

  test("Array Difference of `[1,3,3] & []` should be `Wrong Input!`", () => {
    let arr1 = [1, 3, 3];
    let arr2 = [];
    expect(arrayDifference(arr1, arr2)).toBe("Wrong Input!");
  });

  test("Array Difference of `[1, 2, 6] & [1, 2]` should be `[6]`", () => {
    let arr1 = [1, 2, 6];
    let arr2 = [1, 2];
    let arr3 = [6];
    expect(arrayDifference(arr1, arr2)).toEqual(arr3);
  });

  test("Array Difference of `[3, 4, 5, 4] & [1, 2]` should be `[3, 4, 5]`", () => {
    let arr1 = [3, 4, 5, 4];
    let arr2 = [1, 2];
    let arr3 = [3, 4, 5];
    expect(arrayDifference(arr1, arr2)).toEqual(arr3);
  });
});

// count duplicates test
describe("Test cases for `findCountDuplicates function`", () => {
  test("Does function exists?", () => {
    expect(findCountDuplicates).toBeDefined();
  });

  test("Duplicate Count of `6` in `[6, 6, 6, 6, 1, 2, 1, 2, -8, 0, 6]` should be `5`", () => {
    let array = [6, 6, 6, 6, 1, 2, 1, 2, -8, 0, 6];
    let value = 6;
    let output = 5;
    expect(findCountDuplicates(array, value)).toEqual(output);
  });

  test("Duplicate Count of `1` in `[]` should be `Wrong Input!`", () => {
    let array = [];
    let value = 1;
    expect(findCountDuplicates(array, value)).toBe("Wrong Input!");
  });

  test("Duplicate Count of `a` in `['d', 'e', 'e', 'a', 'f', 'a', 'q', 'r', 'a']` should be `3`", () => {
    let array = ["d", "e", "e", "a", "f", "a", "q", "r", "a"];
    let value = "a";
    let output = 3;
    expect(findCountDuplicates(array, value)).toEqual(output);
  });
});
