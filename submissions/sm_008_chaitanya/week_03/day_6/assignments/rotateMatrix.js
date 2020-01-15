function rotateMatrix(arr) {
    var out = []
    for (i = 0; i < arr.length; i++) {
        var res = []
        for (j = arr.length - 1; j >= 0; j--) {
            res.push(arr[j][i])
        }
        out.push(res)
    }
    return out
}
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotateMatrix(arr))