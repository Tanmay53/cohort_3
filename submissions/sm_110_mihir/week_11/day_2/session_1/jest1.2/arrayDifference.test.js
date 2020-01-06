const { difference } = require("./arrayDifference");

describe("test for array difference of two arrays", () => {
    test("function is Defined", () => {
        expect(difference).toBeDefined();
    });
    test("case [1,2,3]-[3,4,5] to be [1,2,4,5]", () => {
        expect(difference([1, 2, 3], [3, 4, 5])).toContain(1, 2, 4, 5);
    });

    test("case emty arrays to return empty result", () => {
        expect(difference([], [])).toEqual(expect.arrayContaining([]));
    });
    test("case undefined arrays to return false", () => {
        expect(difference(undefined, undefined)).toBeFalsy();
    });
    test("case undefined and null arrays to return false", () => {
        expect(difference(null, undefined)).toBeFalsy();
    });
    test("case null arrays to return false", () => {
        expect(difference(null, null)).toBeFalsy();
    });
    test("case [a,b,c]-[a,b,d] to be [c,d]", () => {
        expect(difference(["a", "b", "c"], ["a", "b", "d"])).toContain(
            "c",
            "d"
        );
    });
    test("case [a,b,1]-[a,b,d] to be [1,d]", () => {
        expect(difference(["a", "b", 1], ["a", "b", "d"])).toContain(1, "d");
    });
    test("missing element case [a,b,1,,2]-[a,b,d] to be [1,2,d]", () => {
        expect(difference(["a", "b", 1, , 2], ["a", "b", "d"])).toContain(
            1,
            2,
            "d"
        );
    });
    test("long case [a,b,1,,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]-[a,b,d,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] to be [1,2,d]", () => {
        expect(
            difference(
                [
                    "a",
                    "b",
                    1,
                    ,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20
                ],
                [
                    "a",
                    "b",
                    "d",
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20
                ]
            )
        ).toContain(1, 2, "d");
    });
});
