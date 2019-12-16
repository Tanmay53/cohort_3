function symmetricDifference(a, b) {
    var arr = []
    for (var i = 0; i < a.length; i++) {
        var flag = 0
        for (var j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                flag++
                break
            }
        }
        if (flag == 0)
            arr.push(a[i])
    }
    for (var i = 0; i < b.length; i++) {
        var flag = 0
        for (var j = 0; j < a.length; j++) {
            if (b[i] == a[j]) {
                flag++
                break
            }
        }
        if (flag == 0)
            arr.push(b[i])
    }
    return arr
}

var result = console.log(symmetricDifference([9, 4, 5, 7, 7, 2, 6, 3, 4, 6], [9, 7, 5, 9, 9, 5, 4, 9, 5, 4]))