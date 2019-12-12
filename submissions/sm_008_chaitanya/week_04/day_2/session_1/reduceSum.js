function reduceSum(arr, target) {
    var greater = arr.filter(function (val) {
        if (val > target) {
            return val
        }
    })
    var rsum = greater.reduce(function (a, c) {
        return a + c
    },0)
    return rsum
}
var arr = [2, 3, 4, 5, 6, 7, 8, 10, 25, 63, 98]
var target = 5
console.log(reduceSum(arr, target))
