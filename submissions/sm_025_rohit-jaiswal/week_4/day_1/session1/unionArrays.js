var arr = []
var obj = {}

function unionArrays(a, b) {
    for (var i = 0; i < a.length; i++) {
        obj[a[i]] = a[i]
    }
    for (var j = 0; j < b.length; j++) {
        obj[b[j]] = b[j]
    }
    for (i = 0, j = 0; j < a.length, i < b.length; j++, i++) {
        arr.push(a[i])
        arr.push(b[j])
    }
    return arr
}
console.log(unionArrays([9, 4, 5, 7, 7, 2, 6, 3, 4, 6], [9, 7, 5, 9, 9, 5, 4, 9, 5, 4]))