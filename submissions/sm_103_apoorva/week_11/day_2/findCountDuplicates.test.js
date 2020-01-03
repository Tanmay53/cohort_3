const findCountDuplicate = require('./findCountDuplicates')

describe('test cases for countDuplicate',()=>{

    test('findCountDuplicate function exists',()=>{
        expect(findCountDuplicate).toBeDefined()
    })

    test('count Duplicate of [1,1,1,1,1],1 is 6',()=>{
        var arr={
            students: [1,1,1,1,1]
        }
        check = 1
        out  = 5
        expect(findCountDuplicate(arr,check)).toBe(out)
    })

    test('count Duplicate of ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj","Vishal"],Vishal is 2',()=>{
        var arr={
            students: ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj","Vishal"]
        }
        check = "Vishal"
        out  = 2
        expect(findCountDuplicate(arr,check)).toEqual(out)
    })

    test('count Duplicate of ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj","Vishal"],Vishal is 2',()=>{
        var arr={
            students: ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj","Vishal"]
        }
        check = "Visha"
        out  = 0
        expect(findCountDuplicate(arr,check)).toEqual(out)
    })
    
    test('count Duplicate of ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj","Vishal"],Vishal is 2',()=>{
        var arr={
            student: ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj","Vishal"]
        }
        check = "Vishal"
        out  = false
        expect(findCountDuplicate(arr,check)).toEqual(out)
    })

    test('count Duplicate of [1,1,1,1,1],1 is 6',()=>{
        var arr={
            students: [111,3,5,6]
        }
        check = 111
        out  = 1
        expect(findCountDuplicate(arr,check)).toBe(out)
    })


    test('count Duplicate of ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj Vishal"],Vishal is 1',()=>{
        var arr={
            students: ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj Vishal"]
        }
        check = "Vishal"
        out  = 1
        expect(findCountDuplicate(arr,check)).toEqual(out)
    })

    test('count Duplicate of ["ApoorvaRajRahulVishalKushalRajVishal"],Vishal is 0',()=>{
        var arr={
            students: ["ApoorvaRajRahulVishalKushalRajVishal"]
        }
        check = "Vishal"
        out  = 0
        expect(findCountDuplicate(arr,check)).toEqual(out)
    })


    test('count Duplicate of ["ApoorvaRajRahul Vishal KushalRajVishal"],Vishal is 0',()=>{
        var arr={
            students: ["ApoorvaRajRahulVishalKushalRajVishal"]
        }
        check = "Vishal"
        out  = 0
        expect(findCountDuplicate(arr,check)).toEqual(out)
    })

    test('count Duplicate of ["Apoorva RajRahul Vishal KushalRajVishal"],Vishal is 0',()=>{
        var arr={
            students: ["ApoorvaRajRahulVishalKushalRajVishal"]
        }
        check = "apoorva"
        out  = 0
        expect(findCountDuplicate(arr,check)).toEqual(out)
    })
})