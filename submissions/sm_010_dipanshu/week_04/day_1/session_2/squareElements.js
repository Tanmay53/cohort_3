function squareElem(array){
    res = array.map(function(e){
        return e*e
    })

    return res
}

console.log(squareElem([1,2,3,4]))
console.log(squareElem([1,1,2,2,3,3,4,4,5,5]))
console.log(squareElem([1,-59,0,25,10e3]))
