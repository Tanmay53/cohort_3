const { mirrorImage } = require("./mirrorImage");

describe("test mirrorImage", () => {
    test("case if function exists", () => {
        expect(mirrorImage).toBeDefined();
    });
    test("case 'AyCzB' to be 'ZbXaY' ", () => {
        expect(mirrorImage("AyCzB")).toBe("ZbXaY");
    });
    test("case '' to be false ", () => {
        expect(mirrorImage("")).toBeFalsy();
    });
    test("all upper case 'AYCZB' to be 'ZBXAY' ", () => {
        expect(mirrorImage("AYCZB")).toBe("ZBXAY");
    });
    test("all small case 'ayczb' to be 'zbxay' ", () => {
        expect(mirrorImage("ayczb")).toBe("zbxay");
    });
    test("Long case 'aaaaAyCzBzzzz' to Match 'ZbXaY' ", () => {
        expect(mirrorImage("aaaaAyCzBzzzz")).toMatch(/ZbXaY/);
    });
    test("return false if not alphabet", () => {
        expect(mirrorImage("abc123")).toBeFalsy();
    });
    test("return false if not alphabet", () => {
        expect(mirrorImage("abc12*(3_and")).toBeFalsy();
    });
    test("return response if given string", () => {
        expect(mirrorImage("abcAxYzb")).not.toBeFalsy();
    });
    test("return false if given null", () => {
        expect(mirrorImage(null)).toBeFalsy();
    });
});
