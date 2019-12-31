const { findCountDuplicates } = require("./findCountDuplicates");

describe("test function to Count number of Currances of given target", () => {
    test("function is defined", () => {
        expect(findCountDuplicates).toBeDefined();
    });
    test("case when only target is provided, return 0", () => {
        expect(findCountDuplicates(1)).toBe(0);
    });
    test("when arr is null, return 0", () => {
        expect(findCountDuplicates(12, null)).toBeFalsy();
    });
    test("when arr is undefined, return 0", () => {
        expect(findCountDuplicates(12, undefined)).toBeFalsy();
    });
    test("when target is not present", () => {
        expect(findCountDuplicates(12, [1, 2])).toBeFalsy();
    });
    test("when target is present. case target=1, arr=[1, 1, 2, 2, 3, 1, 1, 3, 4, 1, 1]. to be 6", () => {
        expect(findCountDuplicates(1, [1, 1, 2, 2, 3, 1, 1, 3, 4, 1, 1])).toBe(
            6
        );
    });
    test("when arr argument receives string,target is digit, return 0", () => {
        expect(findCountDuplicates(12, "12")).toBeFalsy();
    });
    test("when arr argument receives object,target is digit, return 0", () => {
        const obj = {
            12: 12
        };
        expect(findCountDuplicates(12, obj)).toBeFalsy();
    });
    test("case array of characters, target is also a character", () => {
        expect(findCountDuplicates("a", ["a", "b", "c", "a", "e", "a"])).toBe(
            3
        );
    });
    test("case array of alphanumeric, target is also a number. strict matching based on data type", () => {
        expect(
            findCountDuplicates(1, [1, "1", "a", "b", "c", "a", "e", "a", 1])
        ).toBe(2);
    });
});
