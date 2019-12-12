function squareElements(input) {
    var squareIt = input.map(function(x) {
        return x * x
    })
    return squareIt
}

console.log(squareElements([9, 7, 5, 9, 9, 5, 4, 9, 5, 4]))