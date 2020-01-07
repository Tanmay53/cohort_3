const mirrorImage = require('./mirrorImage')

describe('test cases for mirrorImage function',()=>{

    test('mirrorImage function exists',()=>{
        expect(mirrorImage).toBeDefined()
    })

    test('output of AyzB should be ZbaY',()=>{
        expect(mirrorImage("AyzB")).toBe("ZbaY");
    })

    test('output of 23 should be 23',()=>{
        expect(mirrorImage("23")).toBe("23");
    })

    test('output of Y should be B',()=>{
        expect(mirrorImage("Y")).toBe("B");
    })

    test('output of z should be a',()=>{
        expect(mirrorImage("z")).toBe("a");
    })

    test('output of mmm should be nnn',()=>{
        expect(mirrorImage("mmm")).toBe("nnn");
    })

    test('output of mPm should be nKn',()=>{
        expect(mirrorImage("mPm")).toBe("nKn");
    })

    test('output of ApOoRVA KrIshNa should be ZkLlIEZ PiRhsMz',()=>{
        expect(mirrorImage("ApOoRVA KrIshNa")).toBe("ZkLlIEZ PiRhsMz");
    })

    test('output of @KooKiE should be ZkLlIEZ PiRhsMz',()=>{
        expect(mirrorImage("@KooKiE")).toBe("@PllPrV");
    })
})