function arrayEqualto(arr, value) {
    var array = arr.filter(function(ele) {
        return ele != value
    }).map(function(arr) {
        return arr * arr
    })
    return array
}
console.log(arrayEqualto([9, 7, 5, 9, 9, 5, 4, 9, 5, 4, 9, 4, 5, 7, 7, 2, 6, 3, 4, 6], 7))