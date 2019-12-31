const getMirrorImage = require('./mirrorImage')

var testOn = [
                {input: 'AAAA', output: 'ZZZZ'},
                {input: 'azby', output: 'zayb'},
                {input: 'abcd', output: 'zyxw'},
                {input: 'A7b1', output: 'Z7y1'},
                {input: '7777', output: '7777'},
                {input: '',     output: ''},
                {input: 'LkMo', output: 'OpNl'},
                {input: 'tsrQ', output: 'ghiJ'},
                {input: 'uk',   output:   'fp'},
                {input: 'AyzB', output: 'ZbaY'},

             ]

for(let i = 0; i < testOn.length; i++) {
    test(`mirror image of ${testOn[i].input} should be ${testOn[i].output}`, () => {
        expect(getMirrorImage(testOn[i].input)).toBe(testOn[i].output)
    })
}


