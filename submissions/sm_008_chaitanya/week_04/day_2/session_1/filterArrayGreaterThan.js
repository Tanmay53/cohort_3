function filterArrayGreaterThan(arr, target) {
    var new_array = arr.filter(function (val) {
        return val < target
    })
    return new_array
}
var arr = [1, 12, 3, 14, 5, 6, 7, 8, 9, 10, 15, 18, 19]
var target = 10
console.log(filterArrayGreaterThan(arr, target))