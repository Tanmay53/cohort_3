var test1 = [2, 5, -6, 25, 13]
var test2 = [0, -15, 19, 100]

function squareElements(arr) {
    var square = arr.map(function(ele){
        return ele*ele
    })
    return square
}

console.log(squareElements(test1))
console.log(squareElements(test2))