function squareElements(arr) {

    var newarr = arr.map(function (value) {
        return value * value
    })
    return newarr
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(squareElements(arr))