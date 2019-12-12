function returnMultiplier(arr, target) {
    var result = arr.map(function (val) {
        return val * target
    })
    return result
}
var arr = [1, 2, 3, 4, 5]
var target = 5
console.log(returnMultiplier(arr, target))
