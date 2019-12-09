function arrDifference(a, b) {
    var arr = []
    for (var i = 0; i < a.length; i++) {
        var count = 0
        for (var j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                count++
            }
        }
        if (count == 0)
            arr.push(a[i])
    }
    return arr
}

var result = console.log(arrDifference([9, 4, 5, 7, 7, 2, 6, 3, 4, 6], [9, 7, 5, 9, 9, 5, 4, 9, 5, 4]))