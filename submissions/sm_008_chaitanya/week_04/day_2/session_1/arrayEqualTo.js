function arrayEqualTo(arr, target) {
    var new_remove = arr.filter(function (val) {
        if (val != target) {
            return val
        }
    })
    var new_sqr = new_remove.map(function (val) {
        return val * val
    })
    return new_sqr
}
var arr = [2, 3, 5, 4, 5, 6, 7, 5, 8, 9, 10]
var target = 5
console.log(arrayEqualTo(arr, target))
