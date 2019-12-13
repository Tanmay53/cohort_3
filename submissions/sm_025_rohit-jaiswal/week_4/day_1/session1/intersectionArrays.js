var arr = []
var obj = {}
var obj2 = {}

function intersactionArrays(a, b) {
    for (var i = 0; i < a.length; i++) {
        obj[a[i]] = a[i]
    }
    for (var i = 0; i < b.length; i++) {
        obj2[b[i]] = b[i]
    }
    for (key in obj) {
        if (obj2[key])
            arr.push(obj2[key])
    }
    return arr
}
console.log(intersactionArrays([9, 4, 5, 7, 7, 2, 6, 3, 4, 6], [9, 7, 5, 9, 9, 5, 4, 9, 5, 4]))