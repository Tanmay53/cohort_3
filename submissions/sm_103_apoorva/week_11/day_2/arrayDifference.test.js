const arrayDifference = require('./arrayDifference')

describe('test cases for arrayDifference function',()=>{

    test('arrayDifference function exists',()=>{
        expect(arrayDifference).toBeDefined()
    })

    test('difference of [2,5,7,9,1,4,3],[1,2,3,5,6] is [ 7, 9, 4, 6 ]',()=>{
        let arr1 = [2,5,7,9,1,4,3]
        let arr2 = [1,2,3,5,6]
        let out = [ 7, 9, 4, 6 ]
        expect(arrayDifference(arr1,arr2)).toEqual(out)
    })

    test('if only one input is provided return fase',()=>{
        let arr1 = [2,5,7,9,1,4,3]
        expect(arrayDifference(arr1)).toBe(false)
    })

    test('difference of [2,5,7,9,1,4,3],[1,2,3,5,9] is [ 7, 4, 6 ]',()=>{
        let arr1 = [2,5,7,9,1,4,3]
        let arr2 = [1,2,3,5,6,9]
        let out = [ 7, 4, 6 ]
        expect(arrayDifference(arr1,arr2)).toEqual(out)
    })

    test('difference of [2],[2] is []',()=>{
        let arr1 = [2]
        let arr2 = [2]
        let out = []
        expect(arrayDifference(arr1,arr2)).toEqual(out)
    })

    test('difference of [9,9,9,9,9],[1,999,9,9] is [ 1,999 ]',()=>{
        let arr1 = [9,9,9,9,9]
        let arr2 = [1,999,9,9]
        let out = [ 1, 999 ]
        expect(arrayDifference(arr1,arr2)).toEqual(out)
    })

    test('difference of [11,11,11,11],[11] is []',()=>{
        let arr1 = [11,11,11,11,11,11]
        let arr2 = [11]
        let out = []
        expect(arrayDifference(arr1,arr2)).toEqual(out)
    })

    test('difference of [11,11,11,11],[11,] is []',()=>{
        let arr1 = [11,11,11,11,11,11]
        let arr2 = [11,]
        let out = []
        expect(arrayDifference(arr1,arr2)).toEqual(out)
    })

    test('difference of [1,2,3,4,5],[2,4,5] is [1,3]',()=>{
        let arr1 = [1,2,3,4,5]
        let arr2 = [2,4,5,]
        let out = [1,3]
        expect(arrayDifference(arr1,arr2)).toEqual(out)
    })

    test('difference of [0,1,99,87],[0] is [1,99,87]',()=>{
        let arr1 = [0,1,99,87]
        let arr2 = [0]
        let out = [ 1, 99, 87]
        expect(arrayDifference(arr1,arr2)).toEqual(out)
    })



})