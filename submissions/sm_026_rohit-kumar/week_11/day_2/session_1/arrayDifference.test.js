const arrayDifference = require('./arrayDifference')

var testOn = [
    {input1:[],        input2:[],          output:[]  },
    {input1:[1,2,3],   input2:[1,2,3],     output:[]  },
    {input1:[1,2,3],   input2:[4,5,6],     output:[1,2,3]},
    {input1:[1,2,3],   input2:[2,3,4],     output:[1]},
    {input1:[1,2,3],   input2:[],          output:[1,2,3]},
    {input1:[],        input2:[1,2,3],     output:[]},
    {input1:[1,2,3,4], input2:[1,2,3,4],   output:[]  },
    {input1:[1,2,3,4], input2:[4,5,6],     output:[1,2,3]},
    {input1:[1,2,3,4], input2:[2,3,4],     output:[1]},
    {input1:[1,2,3,4], input2:[],          output:[1,2,3,4]}
 ]

for(let i = 0; i < testOn.length; i++) {
    test(`array difference of '${testOn[i].input1}' and '${testOn[i].input2}' should be '${testOn[i].output}'`, () => {
        expect(arrayDifference(testOn[i].input1, testOn[i].input2)).toStrictEqual(testOn[i].output)
    })
}

