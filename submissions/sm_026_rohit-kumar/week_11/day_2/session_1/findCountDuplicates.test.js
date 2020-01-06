const findCountDuplicates = require('./findCountDuplicates')


var testOn = [
    {input: [],             key:1,  output: 0},
    {input: [1,2,3],        key:1,  output: 1},
    {input: [1,2,2,3],      key:2,  output: 2},
    {input: [1,2,2,3,3,3],  key:3,  output: 3},
    {input: [1,2,3],        key:1,  output: 1},
    {input: [1,2,3],        key:2,  output: 1},
    {input: [1,2,2,3],      key:3,  output: 1},
    {input: [1,2,2,3,3,3],  key:1,  output: 1},
    {input: [1,2,3],        key:4,  output: 0},
    {input: [1,2,3,4,5,5],  key:5,  output: 2}
 ]

 for(let i = 0; i < testOn.length; i++) {
    test(`cout duplicates in array '${testOn[i].input}' for '${testOn[i].key}' should be '${testOn[i].output}'`, () => {
        expect(findCountDuplicates(testOn[i].input, testOn[i].key)).toBe(testOn[i].output)
    })
}